import db from '../../ultis/db.js';

export default {
    findAllCategories() {
        return db('categories');
    },

    findAllProducts() {
        return db('products');
    },

    findProductsByCategoryId(category_id) {
        return db('products')
            .where('category_id', category_id);
    },

    findProductsByName(text) {
        return db('products')
            .where('name', 'like', `%${text}%`);
    },
};