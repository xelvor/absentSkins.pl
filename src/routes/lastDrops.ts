import express from 'express';

const router = express.Router();

router.get('/update-drops', async (req, res) => {
    res.set({
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });


    const interval = setInterval(async () => {
        res.write(`data: ${JSON.stringify({
            user: 'IQ',
            drop: 'Drop 1',
            time: new Date().toISOString()
        })}\n\n`);
    }, 1000);

    req.on('close', () => {
        clearInterval(interval);
    });
})

export default router;