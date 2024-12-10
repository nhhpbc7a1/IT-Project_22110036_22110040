import db from '../../ultis/db.js';

export default {
    findByUsername(username) {
        return db('accounts')
           .where('username', username)
           .first();
    }
};