import db from '../../ultis/db.js';

export default {
    findByUsername(username) {
        return db('accounts')
           .where('username', username)
           .first();
    },
    findUserByAccountID(account_id) {
        return db('users')
           .where('account_id', account_id)
           .first();
    },
    add_account(entity) {
        return db('accounts')
            .insert(entity)
            .then(() => {
                return db('accounts')
                    .max('account_id as id')
                    .first();
            })
            .then(result => {
                return result.id;  // Trả về account_id của bản ghi mới
            });
    },
    add_user(entity) {
        return db('users')
            .insert(entity)
            .then(() => {
                return db('users')
                   .max('user_id as id')
                   .first();
            })
           .then(result => {
                return result.id;  // Trả về user_id của bản ghi mới
            });
    }
};