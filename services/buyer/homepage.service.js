import db from '../../ultis/db.js';

export default {
    findAllCategories() {
        return db('categories');
    },
    findSuggestProducts() {
        return db('products')
            .limit(4);
    },
    findBestSellerProducts() {
        return db('products')
            .limit(4);
    },
    findNewestProducts() {
        return db('products')
            .orderBy('created_at', 'desc')
            .limit(4);
    },

}