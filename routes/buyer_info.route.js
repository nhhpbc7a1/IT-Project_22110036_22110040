import express from 'express';

const router = express.Router();

router.get('/', async function(req, res) {
    res.render('vwBuyer_info/profile', {
        layout: 'buyer_info'
    });
});

export default router;
