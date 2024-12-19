import express from 'express';
import statisticService from '../../services/admin/statistic.service.js';

const router = express.Router();

router.get('/order_item', async function(req, res) {
    const statistic = await statisticService.findByProduct();
    console.log(statistic);
    res.locals.title = 'Statistics - By Product';
    res.render('vwAdmin/statistic/order_item', {
        statistic: statistic,
    });
});

router.get('/user', async function(req, res) {
    const statistic = await statisticService.findByUser();
    // console.log(statistic);
    res.locals.title = 'Statistics - By User';
    res.render('vwAdmin/statistic/user', {
        statistic: statistic,
    });
});


export default router;