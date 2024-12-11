import express from 'express';
import manage_orderService from '../../services/admin/manage_order.service.js';

const router = express.Router();

router.get('/', async function(req, res) {
    const orders = await manage_orderService.findAll();
    const status_list = await manage_orderService.findAllStatus();
    
    res.locals.title = 'List orders';
    res.render('vwAdmin/order/list', {
        orders: orders,
        status_list: status_list,
    });
});

router.get('/list', async function(req, res) {
    res.redirect('/admin/order/');
});

router.get('/detail', async function(req, res) {
    const order_id = +req.query.id || 0;
    const order = await manage_orderService.getOrderDetail(order_id);
    let next_status ;
    next_status = await manage_orderService.getStatusByID(order.status_id + 1);
    if (next_status === undefined)
        next_status = { status_name: 'Done' };


    const user = await manage_orderService.getUserByID(order.user_id);

    res.locals.title = 'Order details';
    res.render('vwAdmin/order/detail', {
        order: order,
        next_status: next_status,
        user: user,
    });
});

router.use(express.json());

router.post('/confirm_order', async function (req, res) {
    const order_id = +req.body.order_id || 0;

    try {
        await manage_orderService.add_next_status(order_id);
        res.json({ success: true, message: 'Order confirmed!' }); // Phản hồi khi thành công
    } catch (error) {
        console.error('Error confirming order:', error);
        res.status(500).json({ success: false, message: 'Failed to confirm order.' }); // Phản hồi khi thất bại
    }
})

router.post('/cancel_order', async function (req, res) {
    const order_id = +req.body.order_id || 0;
    const reason = req.body.reason;

    try {
        await manage_orderService.cancelOrder(order_id, reason);
        res.json({ success: true, message: 'Order canceled!' }); // Phản hồi khi thành công
    } catch (error) {
        console.error('Error confirming order:', error);
        res.status(500).json({ success: false, message: 'Failed to confirm order.' }); // Phản hồi khi thất bại
    }
})



export default router;