import express from 'express';
import cartService from '../services/buyer/cart.service.js';
import bodyParser from 'body-parser';
import check from '../middlewares/auth.route.js'

const router = express.Router();

router.get('/', check, async function (req, res) {
    const user_id = req.session.user_id;
    const cart_items = await cartService.getCartItems(user_id);
    res.render('vwBuyer/cart', {
        cart_items: cart_items,
    });
});

router.use(bodyParser.json());
router.post('/add', async function (req, res) {
    const product_id = req.body.product_id; 
    try {
        await cartService.addItemToCart(req.session.user_id, product_id);
        res.json({ success: true, message: 'Product added to cart successfully' });
    } catch (error) {
        console.error('Error adding product to cart:', error);
        res.status(500).json({ success: false, message: 'Error adding product to cart' });
    }
});

router.post('/plus', async function (req, res) {
    const cart_id = req.body.cart_id; 
    const cart_item = await cartService.getCartItemByID(cart_id);
    const quantity = cart_item.quantity;
    if (quantity) {
        cart_item.quantity = quantity + 1;
        await cartService.updateCartItem(cart_item);
    }
    res.redirect('/cart');
});

router.post('/minus', async function (req, res) {
    const cart_id = req.body.cart_id; 
    const cart_item = await cartService.getCartItemByID(cart_id);
    const quantity = cart_item.quantity;
    if (quantity > 1) {
        cart_item.quantity = quantity - 1;
        await cartService.updateCartItem(cart_item);
    }
    res.redirect('/cart');
});



export default router;