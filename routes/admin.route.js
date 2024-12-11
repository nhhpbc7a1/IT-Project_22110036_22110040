import express from 'express';
import manage_productService from '../services/admin/manage_product.service.js';

const router = express.Router();

router.use((req, res, next) => {
    res.locals.layout = 'admin';
    next();
});

router.get('/', async function(req, res) {
    res.render('vwAdmin/dashboard');
});

import manage_productRouter from '../routes/admin/manage_product.route.js';
router.use('/product', manage_productRouter);

import manage_categoryRouter from '../routes/admin/manage_category.route.js';
router.use('/category', manage_categoryRouter);

import manage_orderRouter from '../routes/admin/manage_order.route.js';
router.use('/order', manage_orderRouter);


export default router;