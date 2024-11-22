import express from 'express';

const router = express.Router();

router.get('/list', async function(req, res) {
    res.render('vwProduct/list');
});

router.get('/detail', async function(req, res) {
    res.render('vwProduct/detail');
});


export default router;