import express from 'express';
import manage_productService from '../../services/admin/manage_product.service.js';

import multer from 'multer';
import handleFileUpload from '../../services/handleFileUpload.service.js';
const upload = multer({ dest: 'public/images/uploads/' });

const router = express.Router();
router.get('/', async function (req, res) {
    const products = await manage_productService.findAll();

    res.locals.title = 'List Products';
    res.render('vwAdmin/product/list', {
        products: products,
    });
});

router.get('/list', async function (req, res) {
    const products = await manage_productService.findAll();

    res.locals.title = 'List Products';
    res.render('vwAdmin/product/list', {
        products: products,
    });
});


router.get('/add', async function (req, res) {
    const categories = await manage_productService.findAllCategories();

    res.locals.title = 'Add Product';
    res.render('vwAdmin/product/add', {
        categories: categories,
    });
});

router.get('/edit', async function (req, res) {
    const id = +req.query.id || 0;
    const categories = await manage_productService.findAllCategories();
    const product = await manage_productService.findById(id);

    res.locals.title = 'Edit Product';
    res.render('vwAdmin/product/edit', {
        product: product,
        categories: categories,
    });
});

router.post('/del', upload.single('image'), async function (req, res) {
    const id = req.body.product_id || 0;
    await manage_productService.del(id);
    console.log('id');
    res.redirect('/admin/product');
});

router.post('/add', upload.single('image'), async function (req, res) {
    const image = req.file; // Ảnh tải lên
    const newProduct = {
        name: req.body.name,
        description: req.body.description,
        cost_price: req.body.cost_price,
        selling_price: req.body.selling_price,
        category_id: req.body.category_id,
        quantity: req.body.quantity,
        created_at: new Date(),
    };
    const new_product_id = await manage_productService.add(newProduct);

    // Xử lý ảnh tải lên nếu có
    const imagePath = await handleFileUpload(req, 'products', new_product_id);

    if (image) {
        newProduct.image_url = imagePath;
        await manage_productService.patch(new_product_id, newProduct);
    }


    res.redirect('/admin/product');
});

router.post('/patch', upload.single('image'), async function (req, res) {
    const id = req.body.product_id;
    const image = req.file; // Ảnh tải lên
    const newProduct = {
        name: req.body.name,
        description: req.body.description,
        cost_price: req.body.cost_price,
        selling_price: req.body.selling_price,
        category_id: req.body.category_id,
        quantity: req.body.quantity,
    };
    await manage_productService.patch(id, newProduct);

    const imagePath = await handleFileUpload(req, 'products', id);
    // Xử lý ảnh tải lên nếu có

    if (image) {
        newProduct.image_url = imagePath;
        await manage_productService.patch(id, newProduct);
    }


    res.redirect(`/admin/product/edit?id=${id}`);
});



export default router;