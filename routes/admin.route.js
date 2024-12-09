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

router.get('/product/list', async function(req, res) {
    const products = await manage_productService.findAll();
    console.log(products);
    res.render('vwAdmin/product/list', {
        products: products,
    });
});

router.get('/product/add', async function(req, res) {
    const products = await manage_productService.findAll();
    console.log(products);
    res.render('vwAdmin/product/add', {
        products: products,
    });
});


router.get('/category/list', async function(req, res) {
    res.render('vwAdmin//category/list');
});


export default router;