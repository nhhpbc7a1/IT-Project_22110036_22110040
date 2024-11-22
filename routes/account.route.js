import express from 'express';

const router = express.Router();

router.get('/register', async function(req, res) {
    res.render('vwAccount/register');
});



export default router;