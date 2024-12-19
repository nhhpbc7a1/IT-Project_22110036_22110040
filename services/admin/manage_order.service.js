import db from '../../ultis/db.js';

export default {
    findAll() {
        return db('orders')
            .join('status', 'status.status_id', 'orders.status_id')
            .join('users', 'users.user_id', 'orders.user_id')
    },

    findByStatusID(id) {
        return db('orders')
            .where('status_id', id);
    },

    findById(id) {
        return db('orders')
            .join('status', 'status.status_id', 'orders.status_id')
            .where('order_id', id)
            .first();
    },
    async findAllStatus() {
        const status_list = await db('status');
        for (let status of status_list) {
            const list_order = await this.findByStatusID(status.status_id);
            status.count = list_order.length;
        }
        return status_list;
    },
    async getOrderDetail(order_id) {
        const order = await this.findById(order_id);

        order.items = await db('order_items')
            .where('order_id', order.order_id)
            .join('products', 'products.product_id', 'order_items.product_id')
            .select({
                'product_id': 'products.product_id',
                'name': 'products.name',
                'quantity': 'order_items.quantity',
                'price': 'order_items.price',
                'image_url': 'products.image_url',
            });

        order.order_status_update = await db('order_status_updates')
            .join('status', 'status.status_id', 'order_status_updates.status_id')
            .where('order_id', order.order_id)
            .orderBy('updated_at', 'desc');
        return order;
    },
    getStatusByID(status_id) {
        return db('status')
            .where('status_id', status_id)
            .first();
    },
    async add_next_status(order_id) {
        const current_order = await this.findById(order_id);
        if (current_order.status_id > 3) {
            throw new Error('This order has already done');
        }
        const next_status = await this.getStatusByID(current_order.status_id + 1);
        if (next_status === undefined)
            return;

        await db('orders').where('order_id', order_id).update({ status_id: next_status.status_id });

        return db('order_status_updates').insert({
            order_id: order_id,
            status_id: next_status.status_id,
            updated_at: new Date(),
            title: 'Change order status to ' + next_status.status_name,
            reason: ''
        });

    },

    async cancelOrder(order_id, reason) {
        const current_order = await this.findById(order_id);
        if (current_order.status_id > 3) {
            throw new Error('This order has already done');
        }
        const next_status = await this.getStatusByID(5); // status 5 is canceled

        await db('orders').where('order_id', order_id).update({ status_id: next_status.status_id });

        return db('order_status_updates').insert({
            order_id: order_id,
            status_id: next_status.status_id,
            updated_at: new Date(),
            title: 'Change order status to ' + next_status.status_name,
            reason: reason
        });


    },
    getUserByID(id) {
        return db('users')
            .join('accounts', 'accounts.account_id', 'users.account_id')
            .where('user_id', id)
            .first();
    }

}