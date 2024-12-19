import express from 'express';
import dashboardService from '../services/admin/dashboard.service.js';

const router = express.Router();

router.use((req, res, next) => {
    res.locals.layout = 'admin';
    next();
});

router.get('/', async function(req, res) {
    const statistic = await dashboardService.find_dashboard_info();
    res.render('vwAdmin/dashboard', {
        statistic: statistic,
    });
});

import manage_productRouter from '../routes/admin/manage_product.route.js';
router.use('/product', manage_productRouter);

import manage_categoryRouter from '../routes/admin/manage_category.route.js';
router.use('/category', manage_categoryRouter);

import manage_orderRouter from '../routes/admin/manage_order.route.js';
router.use('/order', manage_orderRouter);

import statisticRouter from '../routes/admin/statistic.route.js';
router.use('/statistic', statisticRouter);


export default router;