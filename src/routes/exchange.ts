import express from 'express';
import { cacheMiddleware } from './apicache';
import SteamAuth from 'node-steam-openid';
import { connection } from '../utils/database';

const exchangePages = express.Router()

exchangePages.get('/', cacheMiddleware(15), (req, res) => {
    res.render('exchange/exchange.ejs', { title: 'AbsentSkins - Exchange', req: req, res: res });
});


const steam = new SteamAuth({
    realm: "http://localhost:8080/exchange/auth/steam",
    returnUrl: "http://localhost:8080/exchange/auth/steam/authenticate",
    apiKey: "6FF6188889C40E2AB2406469920989FB" 
});

exchangePages.get("/auth/steam", async (req, res) => {
    const redirectUrl = await steam.getRedirectUrl();
    return res.redirect(
        redirectUrl
    );
})

exchangePages.get("/auth/steam/authenticate", async (req, res) => {
    // @ts-ignore
    if (req.session.logged) return;
    try {
        const user = await steam.authenticate(req);
    
        //   @ts-ignore
        req.session.logged = true;
        //   @ts-ignore
        req.session.steamid = user.steamid;
        //   @ts-ignore
        req.session.username = user.username;
        //   @ts-ignore
        req.session.profileurl = user.profileurl;
        //   @ts-ignore
        req.session.avatar = user.avatar.large;
        
        const [rows] = await connection.promise().query('SELECT * FROM users WHERE steamId = ?', [user.steamid]);
        // @ts-ignore
        if (rows.length === 0) {
            await connection.promise().query('INSERT INTO users (steamId, balance) VALUES (?, ?)', [user.steamid, 0]);
            // @ts-ignore
            req.session.money = 0;
            res.redirect('/exchange')
        } else {
            // @ts-ignore
            req.session.money = rows[0].balance;
            res.redirect('/exchange')
        }
    } catch (error) {
      console.error(error);
    }
});

export default exchangePages;