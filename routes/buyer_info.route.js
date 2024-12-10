import express, { request } from 'express';
import buyer_infoService from '../services/buyer/buyer_info.service.js';
import moment from 'moment';

const router = express.Router();

router.get('/', async function(req, res) {
    const user_id = req.session.user_id;
    const userInfo = await buyer_infoService.getUserInfoByID(user_id);

    res.render('vwBuyer_info/profile', {
        layout: 'buyer_info',
        userInfo: userInfo
    });
});

router.post('/patch', async function(req, res) {
    try {
        const user_id = req.session.user_id;
        const ymd_dob = moment(req.body.raw_dob, 'DD/MM/YYYY').format('YYYY-MM-DD');
        const userInfo = {
            full_name: req.body.full_name,
            phone_number: req.body.phone_number,
            address: req.body.address,
            email: req.body.email,
            birthday: ymd_dob,
            gender: req.body.gender
        }
        await buyer_infoService.updateUsername(user_id, req.body.username);
        await buyer_infoService.patch(user_id, userInfo);
        res.json({ success: true, message: 'Update profile successfully' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error to update profile' });
    }
    // res.redirect('/buyer_info');
});

router.get('/order', async function(req, res) {
    const user_id = req.session.user_id;
    const status_id = req.query.status_id || 0;
    const orders = await buyer_infoService.getOrdersByUserID(user_id, status_id);

    console.log(orders);
    res.render('vwBuyer_info/order', {
        layout: 'buyer_info',
        orders: orders,
        status_id: status_id
    });
});

export default router;
