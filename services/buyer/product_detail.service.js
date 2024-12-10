import db from '../../ultis/db.js';

export default {
    findAllCategories() {
        return db('categories');
    },
    findProductByID(id) {
        return db('products')
            .join('categories', 'products.category_id', 'categories.category_id')
            .where('product_id', id)
            .first();
    }
}