import express from 'express';
import numeral from 'numeral';
import { engine } from 'express-handlebars';
import hbs_sections from 'express-handlebars-sections';

import categoryService from './services/category.service.js';
const app = express();

app.use(express.urlencoded({
    extended: true,
}));

// test more
app.engine('hbs', engine({
    extname: 'hbs',
    defaultLayout: 'buyer',
    helpers: {
        format_price(value) {
            return numeral(value).format('0.000') + ' VNĐ';
        },
        json(context) {
            return JSON.stringify(context);
        },
        ifEquals(arg1, arg2, options) {
            return arg1 == arg2 ? options.fn(this) : options.inverse(this);
        },
        eq(arg1, arg2) {
            return arg1 === arg2; // Trả về true nếu 2 giá trị bằng nhau
        },
        section: hbs_sections(),
        containTopping(array, topping_id) {
            if (Array.isArray(array)) {
                return array.some(item => item.topping_id.toString() === topping_id.toString());
            }
            return false;
        },
        formatDate(date, format) {
            return moment(date).format(format);  // Định dạng ngày theo format
        }
    }
}));
app.set('view engine', 'hbs');
app.set('views', './views');

app.use('/public', express.static('public'));

app.use('/node_modules', express.static('node_modules'));

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

import buyer_infoRouter from './routes/buyer_info.route.js';
app.use('/buyer_info', buyer_infoRouter);

import adminRouter from './routes/admin.route.js';
app.use('/admin', adminRouter);


app.listen(3000, function () {
    console.log('app is running at http://localhost:3000');
})


