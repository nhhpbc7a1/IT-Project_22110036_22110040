import db from '../../ultis/db.js';

export default {
    getUserInfoByID(id) {
        return db('users')
            .join('accounts', 'accounts.account_id', 'users.account_id')
            .where('user_id', id)
            .first();
    },
    async updateUsername(user_id, username) {
        const user = await db('users').where('user_id', user_id).first();
        const account_id = user.account_id;
        const entity = {
            username: username,
        }
        return db('accounts').where('account_id', account_id).update(entity);
    },
    patch(user_id, entity) {
        return db('users').where('user_id', user_id).update(entity);
    },
    async getOrdersByUserID(user_id, status_id) {
        let orders = [];
        if (status_id == 0) {
            orders = await db('orders')
                .join('status', 'status.status_id', 'orders.status_id')
                .where('user_id', user_id)
                .orderBy('created_at', 'desc');
        }
        else {
            orders = await db('orders')
                .join('status', 'status.status_id', 'orders.status_id')
                .where('user_id', user_id)
                .where('status.status_id', status_id)
                .orderBy('created_at', 'desc');
        }

        for (let order of orders) {
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
        }
        return orders;
    }
};