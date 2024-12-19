import db from '../../ultis/db.js';

export default {
    async find_dashboard_info() {
        try {
            const tong_cost = await db('orders').sum('total_cost as total_cost');
            const tong_selling = await db('orders').sum('total_selling as total_selling');
            const tong_nguoidung = await db('users').count('* as total_users');
            const tong_don = await db('orders').count('* as total_orders');
            
            return {
                tong_cost: tong_cost[0].total_cost || 0,
                tong_selling: tong_selling[0].total_selling || 0,
                tong_nguoidung: tong_nguoidung[0].total_users || 0,
                tong_don: tong_don[0].total_orders || 0,
            };
        } catch (error) {
            console.error("Error fetching dashboard info:", error);
            throw new Error("Failed to fetch dashboard info");
        }
    }
}