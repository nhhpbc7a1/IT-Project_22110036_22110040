import express from 'express';
import manage_categoryService from '../../services/admin/manage_category.service.js';

const router = express.Router();
router.get('/list', async function(req, res) {
    const categories = await manage_categoryService.findAll();

    res.locals.title = 'List categories';
    res.render('vwAdmin/category/list', {
        categories: categories,
    });
});

router.get('/add', async function(req, res) {
    res.locals.title = 'Add category';
    res.render('vwAdmin/category/add');
});

router.get('/edit', async function(req, res) {
    const id = +req.query.id || 0;
    const category = await manage_categoryService.findById(id);

    res.locals.title = 'Edit category';
    res.render('vwAdmin/category/edit', {
        category: category,
    });
});

router.post('/add', async function (req, res) {
    await manage_categoryService.add({
        category_name: req.body.category_name,
    });
    res.redirect('/admin/category/list');
});

router.post('/patch', async function (req, res) {
    const id = +req.body.category_id || 0;
    await manage_categoryService.patch(id, {
        category_name: req.body.category_name,
    });
    res.redirect(`/admin/category`);
});

router.post('/del', async function (req, res) {
    const id = +req.body.category_id || 0;
    await manage_categoryService.del(id);
    res.redirect('/admin/category/list');
});

export default router;