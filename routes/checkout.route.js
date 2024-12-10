import express from 'express';
import checkoutService from '../services/buyer/checkout.service.js';
import bodyParser from 'body-parser';


const router = express.Router();

router.post('/', async function (req, res) {
    const cart_id_list = req.body.cart_ids;
    const checkout_list = await checkoutService.getCheckoutItems(cart_id_list);

    const user_id = req.session.user_id;
    const userInfo = await checkoutService.getUserInfoByID(user_id);

    const shipping_fee = 30;
    let product_total = 0;
    for (let item of checkout_list) {
        item.item_total_price = item.selling_price * item.quantity;
        product_total += item.item_total_price;
    }
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
        await checkoutService.createOrder(user_id, req.body);
        res.json({ success: true, message: 'Product added to cart successfully' });
    }
    catch (error) {
        console.error('Error adding product to cart:', error);
        res.status(500).json({ success: false, message: 'Error adding product to cart' });
    }
});

export default router;