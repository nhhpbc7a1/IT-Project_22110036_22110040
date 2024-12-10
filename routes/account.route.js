import express from 'express';
import accountService from '../services/buyer/account.service.js';

const router = express.Router();

router.get('/register', async function(req, res) {
    res.render('vwAccount/register');
});

router.get('/login', async function(req, res) {
    res.render('vwAccount/login');
});

router.get('/is-available', async function(req, res) {
    const username = req.query.username;
    const user = await accountService.findByUsername(username);
    if (user) {
      return res.json(true);
    }
  
    res.json(false);
  
});



export default router;