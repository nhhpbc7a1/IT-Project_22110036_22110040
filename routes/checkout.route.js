import express from 'express';
import checkoutService from '../services/buyer/checkout.service.js';
import bodyParser from 'body-parser';


const router = express.Router();

router.post('/', async function (req, res) {
    const cart_id_list = req.body.cart_ids;
    const checkout_list = await checkoutService.getCheckoutItems(cart_id_list);

    const user_id = req.session.user_id;
    const userInfo = await checkoutService.getUserInfoByID(user_id);

    let shipping_fee = 50000;
    let product_total = 0;
    for (let item of checkout_list) {
        item.item_total_price = item.selling_price * item.quantity;
        product_total += item.item_total_price;
    }
    if (product_total > 300000) 
        shipping_fee = 0;
    const total_price = shipping_fee + product_total;

    res.render('vwBuyer/checkout', {
        checkout_list: checkout_list,
        shipping_fee: shipping_fee,
        product_total: product_total,
        total_price: total_price,
        userInfo: userInfo,
        cart_id_list: cart_id_list,
    });
});

router.use(bodyParser.json());
router.post('/create_order', async function (req, res) {
    console.log(req.body);
    const user_id = req.session.user_id;
    try {
        const order_id = await checkoutService.createOrder(user_id, req.body);
        const order_status_update = {
            order_id: order_id,
            status_id: 1, // 1: pending
            updated_at: new Date(),
            title: 'Order created',
            reason: 'Waiting for shop to verify order'
        }
        await checkoutService.add_order_status_update(order_status_update);
        res.json({ success: true, message: 'Product added to cart successfully' });
    }
    catch (error) {
        console.error('Error adding product to cart:', error);
        res.status(500).json({ success: false, message: 'Error adding product to cart' });
    }
});

export default router;