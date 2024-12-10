import db from '../../ultis/db.js';

export default {
    findAll() {
        return db('products');
    },
    findAllCategories() {
        return db('categories');
    },
    findById(id) {
        return db('products')
           .where('product_id',id)
           .first();
    },
    add(entity) {
        return db('products')
            .insert(entity)
            .then(() => {
                return db('products')
                    .max('product_id as id')
                    .first();
            })
            .then(result => {
                return result.id;  // Trả về product_id của bản ghi mới
            });
    },
    patch(product_id, entity) {
        return db('products')
            .where('product_id', product_id)
            .update(entity);
    },
    del(product_id) {
        return db('products').where('product_id', product_id).del();
    },

}