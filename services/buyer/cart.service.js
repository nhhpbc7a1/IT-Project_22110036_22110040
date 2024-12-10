import db from '../../ultis/db.js';

export default {
    addItemToCart(user_id, product_id) {
        return db('cart')
            .insert({
                user_id: user_id,
                product_id: product_id,
                quantity: 1
            });
    },
    getCartItems(user_id) {
        return db('cart')
            .join('products', 'products.product_id', 'cart.product_id')
            .join('categories', 'categories.category_id', 'products.category_id')
            .where('user_id', user_id)
            .select({
                'cart_id': 'cart_id',
                'product_id': 'products.product_id',
                'name': 'name',
                'image_url': 'image_url',
                'selling_price':'selling_price',
                'category_name': 'category_name',
                'quantity': 'cart.quantity'
            });
    },
    getCartItemByID(id) {
        return db('cart')
           .where('cart_id', id)
           .first();
    },
    updateCartItem(CartItem) {
        return db('cart')
           .where('cart_id', CartItem.cart_id)
           .update(CartItem);
    }
}