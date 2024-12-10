import express from 'express';
import product_detailService from '../services/buyer/product_detail.service.js';
import product_listService from '../services/buyer/product_list.service.js';

const router = express.Router();

router.get('/list', async function(req, res) {
    const categories = await product_listService.findAllCategories();
    const products = await product_listService.findAllProducts();
    res.render('vwProduct/list', {
        categories: categories,
        products: products,
    });
});

router.get('/list/byCat', async function(req, res) {
    const catId = +req.query.id || 0;
    const categories = await product_listService.findAllCategories();
    const products = await product_listService.findProductsByCategoryId(catId);
    res.render('vwProduct/list', {
        categories: categories,
        products: products,
    });
});

router.post('/list/byName', async function(req, res) {
    const text = req.body.text;
    const categories = await product_listService.findAllCategories();
    const products = await product_listService.findProductsByName(text);
    res.render('vwProduct/list', {
        categories: categories,
        products: products,
    });
});



router.get('/detail', async function(req, res) {
    const product_id = req.query.id;
    const product = await product_detailService.findProductByID(product_id);
    res.render('vwProduct/detail', {
        product: product,
    });
});


export default router;