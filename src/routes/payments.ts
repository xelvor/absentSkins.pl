import express from 'express';
import { cacheMiddleware } from './apicache';
import SteamAuth from 'node-steam-openid';
import { connection } from '../utils/database';

const payments = express.Router()

payments.get('/', cacheMiddleware(15), (req, res) => {
    // @ts-ignore
    if (req.session.logged) {
        res.render('payments/payments.ejs', { title: 'AbsentSkins - Payments', req: req, res: res });
    } else {
        res.redirect('/exchange/auth/steam')
    }
});

payments.get('/deposit', cacheMiddleware(15), (req, res) => {
    // @ts-ignore
    if (req.session.logged) {
        res.render('payments/deposit.ejs', { title: 'AbsentSkins - Deposit', req: req, res: res });
    } else {
        res.redirect('/exchange/auth/steam')
    }
});

export default payments;