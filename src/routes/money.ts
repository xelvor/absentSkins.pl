import express from 'express';

import { addCommas, getUserBalance, removeUserBalance } from '../utils/money';

const router = express.Router();

router.get('/update-money', async (req, res) => {
    res.set({
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });

    // @ts-ignore
    let money = req.session.money;
    if (!money) return;

    async function sendMoney() {
        await res.write(`data: ${JSON.stringify({ money })}\n\n`);
    }

    await sendMoney();

    const interval = setInterval(async () => {
        // @ts-ignore
        money = await getUserBalance(req.session.steamid);
        await sendMoney();
    }, 1000);

    req.on('close', () => {
        clearInterval(interval);
    });
})

export default router;