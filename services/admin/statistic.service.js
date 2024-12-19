import db from '../../ultis/db.js';

export default {
    async findByProduct() {
        try {
            const products = await db('products'); // Fetch all products
            if (!products || products.length === 0) return []; // Return empty array if no products

            const productIds = products.map(product => product.product_id);

            // Fetch aggregated data for all products in a single query
            const productStats = await db('order_items')
                .select('product_id')
                .sum('order_items.quantity as count_sold')
                .sum('price as total_selling')
                .whereIn('product_id', productIds)
                .groupBy('product_id');

            // Map stats back to products
            for (const product of products) {
                const stats = productStats.find(stat => stat.product_id === product.product_id) || {};
                product.count_sold = stats.count_sold || 0;
                product.total_cost = String(product.cost_price * product.count_sold)|| 0;
                product.total_selling = stats.total_selling || 0;
            }

            return products;
        } catch (error) {
            console.error("Error fetching product information:", error);
            throw new Error("Failed to fetch product information");
        }
    },
    async findByUser() {
        try {
            const users = await db('users'); // Fetch all users
            if (!users || users.length === 0) return []; // Return empty array if no users

            const userIds = users.map(user => user.user_id);

            // Fetch aggregated data for all users in a single query
            const userOrderStats = await db('orders')
                .select('user_id')
                .count('* as count_ordered')
                .sum('total_selling as total_selling')
                .whereIn('user_id', userIds)
                .groupBy('user_id');

            const userItemStats = await db('orders')
                .join('order_items', 'order_items.order_id', 'orders.order_id')
                .select('orders.user_id')
                .count('order_item_id as count_item_ordered')
                .whereIn('orders.user_id', userIds)
                .groupBy('orders.user_id');

            // Map stats back to users
            for (const user of users) {
                const orderStats = userOrderStats.find(stat => stat.user_id === user.user_id) || {};
                const itemStats = userItemStats.find(stat => stat.user_id === user.user_id) || {};

                user.count_ordered = orderStats.count_ordered || 0;
                user.total_selling = orderStats.total_selling || 0;
                user.count_item_ordered = itemStats.count_item_ordered || 0;
            }

            return users;
        } catch (error) {
            console.error("Error fetching user information:", error);
            throw new Error("Failed to fetch user information");
        }
    }
}