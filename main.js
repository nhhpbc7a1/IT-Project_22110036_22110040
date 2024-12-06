import express from  'express';
import numeral from 'numeral';
import { engine } from 'express-handlebars';
import hbs_sections from 'express-handlebars-sections';

import categoryService from './services/category.service.js';
const app = express();

app.use(express.urlencoded({
    extended: true,
}));

// test
app.engine('hbs', engine({
    extname: 'hbs',
    defaultLayout: 'buyer',
    helpers: {
        format_number(value){
            return numeral(value).format('0,0') + ' đ';
        },
        section: hbs_sections(),
    }
}));
app.set('view engine', 'hbs');
app.set('views', './views');

app.use('/public',express.static('public'));

// app.use(async function(req, res, next) {
//     const categories = await categoryService.findAll();
//     res.locals.lcCategories = categories;
//     next();
// })

app.get('/', function (req, res) {
    // res.send('hello world');
    res.render('vwBuyer/homepage');
});

import productRouter from './routes/product.route.js';
app.use('/product', productRouter);

import accountRouter from './routes/account.route.js';
app.use('/account', accountRouter);

import cartRouter from './routes/cart.route.js';
app.use('/cart', cartRouter);

import checkoutRouter from './routes/checkout.route.js';
app.use('/checkout', checkoutRouter);


app.listen(3000, function() {
    console.log('app is running at http://localhost:3000');
})


