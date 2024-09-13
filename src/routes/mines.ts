import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
        // @ts-ignore
    if (req.session.logged) {
        res.render('mines/main.ejs', { title: 'AbsentSkins - Mines', req: req, res: res });
    } else {
        res.redirect('/exchange/auth/steam')
    }
});

export default router;