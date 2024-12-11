import db from '../../ultis/db.js';

export default {
    getCheckoutItems(cart_id_list) {
        return db('cart')
            .join('products', 'cart.product_id', 'products.product_id')
            .join('categories', 'products.category_id', 'categories.category_id')
            .whereIn('cart_id', cart_id_list)
            .select({
                'cart_id': 'cart_id',
                'product_id': 'products.product_id',
                'name': 'name',
                'image_url': 'image_url',
                'selling_price': 'selling_price',
                'category_name': 'category_name',
                'quantity': 'cart.quantity',
                'cost_price': 'cost_price'
            });
    },
    getUserInfoByID(id) {
        return db('users')
            .where('user_id', id)
            .first();
    },
    async createOrder(user_id, data) {
        const checkout_list = await this.getCheckoutItems(data.cart_id_list);
        let product_total = 0;
        let total_cost = 0;
        for (let item of checkout_list) {
            item.item_total_selling = item.selling_price * item.quantity;
            total_cost += item.cost_price * item.quantity;
            product_total += item.item_total_selling;
        }
        const total_selling = data.shipping_fee + product_total;

        const order = {
            user_id: user_id,
            address: data.address,
            full_name: data.full_name,
            phone_number: data.phone_number,
            delivery_fee: data.shipping_fee,
            created_at: new Date(),
            note: 'can add',

            total_selling: data.total_selling,
            total_cost: total_cost,
            items_price: product_total,
            status_id: 1,
        }
        const new_id = await db('orders')
            .insert(order)
            .then(() => {
                return db('orders')
                    .max('order_id as id')
                    .first();
            })
            .then(result => {
                return result.id;  // Trả về product_id của bản ghi mới
            });

        for (let item of checkout_list) {
            const order_item = {
                order_id: new_id,
                product_id: item.product_id,
                quantity: item.quantity,
                price: item.item_total_selling,
                // message_for_cake : 'hello',
            }
            await db('order_items').insert(order_item);
        }

        return new_id;
    },
    add_order_status_update(entity) {
        return db('order_status_updates').insert(entity);
    }
}