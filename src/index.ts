import express from 'express';
import path from 'path';
import session from 'express-session';
import { connection } from './utils/database';
import expressLayouts from 'express-ejs-layouts';
import cors from 'cors';
import WebSocket from 'ws';

connection.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
});

const port = 8080;
const app = express();

app.use(cors({ origin: '*', credentials: true, optionSuccessStatus: 200 }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(expressLayouts);
app.set('layout', 'layouts/main');

const secret = Math.random().toString(36).substring(7);

app.use(session({
    secret: secret,
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 21600000,
        httpOnly: true,
    }
}));

const routes = ['/exchange', '/payments', '/api', '/money', '/mines', '/lastDrops']

for (const route of routes) {
    const router = require(`./routes/${route}`).default;
    app.use(route, router);
}

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
    res.render('index', { title: 'AbsentSkins - Strona główna', req: req, res: res });
});

const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

const wss = new WebSocket.Server({ server });

const multipliers = {
    1: [0.88, 0.93, 0.96, 1.02, 1.07, 1.12, 1.17, 1.26, 1.33, 1.43, 1.53, 1.66, 1.79, 1.93, 2.10, 2.29, 2.51, 2.75, 3.02, 3.35, 3.72, 4.13, 5.49, 7.32],
    2: [0.93, 1.00, 1.08, 1.17, 1.27, 1.37, 1.49, 1.63, 1.77, 1.94, 2.13, 2.34, 2.57, 2.83, 3.12, 3.44, 3.79, 4.18, 4.61, 5.08, 6.48, 7.92, 8.53, 17.13],
    3: [0.98, 1.08, 1.17, 1.28, 1.40, 1.54, 1.68, 1.84, 2.02, 2.21, 2.42, 2.67, 2.93, 3.22, 3.54, 3.90, 4.30, 4.73, 5.21, 5.73, 8.02, 8.79, 9.67, 10.65],
    4: [1.08, 1.17, 1.28, 1.40, 1.54, 1.68, 1.84, 2.02, 2.21, 2.42, 2.67, 2.93, 3.22, 3.54, 3.90, 4.30, 4.73, 5.21, 5.73, 6.30, 6.93, 7.62, 8.38, 9.23],
    5: [1.17, 1.28, 1.40, 1.54, 1.68, 1.84, 2.02, 2.21, 2.42, 2.67, 2.93, 3.22, 3.54, 3.90, 4.30, 4.73, 5.21, 5.73, 6.30, 6.93, 7.62, 8.38, 9.23, 10.16],
    6: [1.28, 1.40, 1.54, 1.68, 1.84, 2.02, 2.21, 2.42, 2.67, 2.93, 3.22, 3.54, 3.90, 4.30, 4.73, 5.21, 5.73, 6.30, 6.93, 7.62, 8.38, 9.23, 10.16, 11.18],
    7: [1.40, 1.54, 1.68, 1.84, 2.02, 2.21, 2.42, 2.67, 2.93, 3.22, 3.54, 3.90, 4.30, 4.73, 5.21, 5.73, 6.30, 6.93, 7.62, 8.38, 9.23, 10.16, 11.18, 12.31],
    8: [1.54, 1.68, 1.84, 2.02, 2.21, 2.42, 2.67, 2.93, 3.22, 3.54, 3.90, 4.30, 4.73, 5.21, 5.73, 6.30, 6.93, 7.62, 8.38, 9.23, 10.16, 11.18, 12.31, 13.54],
    9: [1.68, 1.84, 2.02, 2.21, 2.42, 2.67, 2.93, 3.22, 3.54, 3.90, 4.30, 4.73, 5.21, 5.73, 6.30, 6.93, 7.62, 8.38, 9.23, 10.16, 11.18, 12.31, 13.54, 14.88],
    10: [1.84, 2.02, 2.21, 2.42, 2.67, 2.93, 3.22, 3.54, 3.90, 4.30, 4.73, 5.21, 5.73, 6.30, 6.93, 7.62, 8.38, 9.23, 10.16, 11.18, 12.31, 13.54, 14.88, 16.42],
    11: [2.21, 2.42, 2.67, 2.95, 3.25, 3.58, 3.94, 4.34, 4.78, 5.26, 5.79, 6.37, 7.00, 7.69, 8.45, 9.27, 10.17, 11.15, 12.21, 13.36, 14.60, 16.06, 17.66, 19.43],
    12: [2.42, 2.67, 2.95, 3.25, 3.58, 3.94, 4.34, 4.78, 5.26, 5.79, 6.37, 7.00, 7.69, 8.45, 9.27, 10.17, 11.15, 12.21, 13.36, 14.60, 16.06, 17.66, 19.43, 21.37],
    13: [2.67, 2.95, 3.25, 3.58, 3.94, 4.34, 4.78, 5.26, 5.79, 6.37, 7.00, 7.69, 8.45, 9.27, 10.17, 11.15, 12.21, 13.36, 14.60, 16.06, 17.66, 19.43, 21.37, 23.52],
    14: [2.95, 3.25, 3.58, 3.94, 4.34, 4.78, 5.26, 5.79, 6.37, 7.00, 7.69, 8.45, 9.27, 10.17, 11.15, 12.21, 13.36, 14.60, 16.06, 17.66, 19.43, 21.37, 23.52, 25.87],
    15: [3.25, 3.58, 3.94, 4.34, 4.78, 5.26, 5.79, 6.37, 7.00, 7.69, 8.45, 9.27, 10.17, 11.15, 12.21, 13.36, 14.60, 16.06, 17.66, 19.43, 21.37, 23.52, 25.87, 28.45],
    16: [3.58, 3.94, 4.34, 4.78, 5.26, 5.79, 6.37, 7.00, 7.69, 8.45, 9.27, 10.17, 11.15, 12.21, 13.36, 14.60, 16.06, 17.66, 19.43, 21.37, 23.52, 25.87, 28.45, 31.29],
    17: [3.94, 4.34, 4.78, 5.26, 5.79, 6.37, 7.00, 7.69, 8.45, 9.27, 10.17, 11.15, 12.21, 13.36, 14.60, 16.06, 17.66, 19.43, 21.37, 23.52, 25.87, 28.45, 31.29, 34.43],
    18: [4.34, 4.78, 5.26, 5.79, 6.37, 7.00, 7.69, 8.45, 9.27, 10.17, 11.15, 12.21, 13.36, 14.60, 16.06, 17.66, 19.43, 21.37, 23.52, 25.87, 28.45, 31.29, 34.43, 37.91],
    19: [4.78, 5.26, 5.79, 6.37, 7.00, 7.69, 8.45, 9.27, 10.17, 11.15, 12.21, 13.36, 14.60, 16.06, 17.66, 19.43, 21.37, 23.52, 25.87, 28.45, 31.29, 34.43, 37.91, 41.75],
    20: [5.26, 5.79, 6.37, 7.00, 7.69, 8.45, 9.27, 10.17, 11.15, 12.21, 13.36, 14.60, 16.06, 17.66, 19.43, 21.37, 23.52, 25.87, 28.45, 31.29, 34.43, 37.91, 41.75, 45.96],
    21: [5.79, 6.37, 7.00, 7.69, 8.45, 9.27, 10.17, 11.15, 12.21, 13.36, 14.60, 16.06, 17.66, 19.43, 21.37, 23.52, 25.87, 28.45, 31.29, 34.43, 37.91, 41.75, 45.96, 50.56],
    22: [6.37, 7.00, 7.69, 8.45, 9.27, 10.17, 11.15, 12.21, 13.36, 14.60, 16.06, 17.66, 19.43, 21.37, 23.52, 25.87, 28.45, 31.29, 34.43, 37.91, 41.75, 45.96, 50.56, 55.61],
    23: [18, 19, 7.69, 8.45, 9.27, 10.17, 11.15, 12.21, 13.36, 14.60, 16.06, 17.66, 19.43, 21.37, 23.52, 25.87, 28.45, 31.29, 34.43, 37.91, 41.75, 45.96, 50.56, 55.61, 61.17],
    24: [24.91, 7.69, 8.45, 9.27, 10.17, 11.15, 12.21, 13.36, 14.60, 16.06, 17.66, 19.43, 21.37, 23.52, 25.87, 28.45, 31.29, 34.43, 37.91, 41.75, 45.96, 50.56, 55.61, 61.17, 67.29]
}




wss.on('connection', (ws) => {
    ws.on('message', async (message) => {
        // @ts-ignore
        const data = JSON.parse(message);
        if (data.type == 'jebanierevenomacwelajebanego') {
            const randomString = Math.random().toString(36).substring(7) + Math.random().toString(36).substring(7);
            connection.promise().query('INSERT INTO payments (id, price, userID, paid, paymentMethod, cashoutMultiplier, cashout) VALUES (?, ?, ?, ?, ?, ?, ?)', [randomString, data.amount, data.userID, 1, data.paymentMethod, 1, 0]);

            const bonus = data.amount * 0.05;
            // @ts-ignore
            const total = parseFloat(data.amount) + parseFloat(bonus);

            connection.promise().query('UPDATE users SET balance = balance + ? WHERE steamId = ?', [total, data.userID]);
            ws.send(JSON.stringify({ type: 'deposit', id: randomString, cashoutMultiplier: 1, cashout: 0 }));
        } else if (data.type == 'minesStart') {
            const user = data.userID;

            const [rows2] = await connection.promise().query('SELECT * FROM mines WHERE userID = ? AND finished = 0', [user]);
            // @ts-ignore
            if (rows2.length > 0) {
                ws.send(JSON.stringify({ type: 'minesError', message: 'Masz już aktywną grę.' }));
                return;
            }

            const bet = data.bet;
            if (bet < 0.2) {
                ws.send(JSON.stringify({ type: 'minesError', message: 'Minimalna wartość zakładu to 0.2.' }));
                return;
            }

            if (bet.includes('<') || bet.includes('>') || bet.includes('/') || bet.includes('script') || bet.includes('alert') || bet.includes('-')) {
                ws.send(JSON.stringify({ type: 'minesError', message: 'Niepoprawna wartość zakładu.' }));
                return;
            }

            const mines = data.mines;
            
            const fieldsData = []
            for (let i = 0; i < mines; i++) {
                let mine = Math.floor(Math.random() * 25)
                while (fieldsData.includes(mine)) {
                    mine = Math.floor(Math.random() * 25)
                }
    
                fieldsData.push(mine)
            }

            const [rows] = await connection.promise().query('SELECT balance FROM users WHERE steamId = ?', [user]);
            if (rows[0].balance < bet) {
                ws.send(JSON.stringify({ type: 'minesError', message: 'Nie masz wystarczająco środków na koncie.' }));
                return;
            }

            connection.promise().query('INSERT INTO mines (userID, bet, mines, fields, selectedFields) VALUES (?, ?, ?, ?, ?)', [user, bet, mines, fieldsData.join(','), '']);
            connection.promise().query('UPDATE users SET balance = balance - ? WHERE steamId = ?', [bet, user]);
            ws.send(JSON.stringify({ type: 'minesStart', fields: fieldsData, cashoutMultiplier: 1, cashout: 0 }));
        } else if (data.type == 'minesConnect') {
            const user = data.userID;
            const [rows] = await connection.promise().query('SELECT * FROM mines WHERE userID = ? AND finished = 0', [user]);

            // @ts-ignore
            if (rows.length == 0) {
                return;
            }

            ws.send(JSON.stringify({ type: 'minesConnect', fields: rows[0].fields.split(','), bet: rows[0].bet, selectedFields: rows[0].selectedFields.split(','), cashoutMultiplier: rows[0].cashoutMultiplier, cashout: rows[0].cashout }));
        } else if (data.type == 'minesSelect') {
            const user = data.userID;
            const field = data.field;
            const [rows] = await connection.promise().query('SELECT * FROM mines WHERE userID = ? AND finished = 0', [user]);

            // @ts-ignore
            if (rows.length == 0) {
                return;
            }

            const mines = rows[0].fields.split(',');
            const selectedFields = rows[0].selectedFields.split(',');

            if (mines.includes(field.toString())) {
                ws.send(JSON.stringify({ type: 'minesSelect', field: field, result: 'mine', mines: mines }));
                connection.promise().query('UPDATE mines SET finished = 1 WHERE userID = ? AND finished = 0', [user]);
                return;
            }

            if (selectedFields.includes(field.toString())) {
                ws.send(JSON.stringify({ type: 'minesSelect', field: field, result: 'selected' }));
                return;
            }

            selectedFields.push(field);
            const selectedMines = mines.filter((mine) => selectedFields.includes(mine));
            const cashout = multipliers[Number(rows[0].mines)][selectedFields.length] || 1;
            const cashoutMoney = rows[0].bet * cashout;
            connection.promise().query('UPDATE mines SET selectedFields = ?, cashout = ?, cashoutMultiplier = ? WHERE userID = ? AND finished = 0', [selectedFields.join(','), cashoutMoney, cashout, user]);
            ws.send(JSON.stringify({ type: 'minesSelect', field: field, result: 'empty', cashout: cashoutMoney, cashoutMultiplier: cashout, selectedMines: selectedMines }));
        } else if (data.type == 'minesRandom') {
            const user = data.userID;
            const [rows] = await connection.promise().query('SELECT * FROM mines WHERE userID = ? AND finished = 0', [user]);

            // @ts-ignore
            if (rows.length == 0) {
                return;
            }

            const mines = rows[0].fields.split(',');
            const selectedFields = rows[0].selectedFields.split(',');

            const randomField = Math.floor(Math.random() * 24);
            if (mines.includes(randomField.toString())) {
                ws.send(JSON.stringify({ type: 'minesSelect', field: randomField, result: 'mine', mines: mines }));
                connection.promise().query('UPDATE mines SET finished = 1 WHERE userID = ? AND finished = 0', [user]);
                return;
            }

            if (selectedFields.includes(randomField.toString())) {
                ws.send(JSON.stringify({ type: 'minesSelect', field: randomField, result: 'selected' }));
                return;
            }

            selectedFields.push(randomField);
            connection.promise().query('UPDATE mines SET selectedFields = ? WHERE userID = ? AND finished = 0', [selectedFields.join(','), user]);
            ws.send(JSON.stringify({ type: 'minesSelect', field: randomField, result: 'empty' }));
        } else if (data.type == 'minesCashout') {
            const user = data.userID;
            const [rows] = await connection.promise().query('SELECT * FROM mines WHERE userID = ? AND finished = 0', [user]);

            // @ts-ignore
            if (rows.length == 0) {
                return;
            }

            const cashout = rows[0].cashout;
            connection.promise().query('UPDATE users SET balance = balance + ? WHERE steamId = ?', [Math.floor(cashout), user]);
            connection.promise().query('UPDATE mines SET finished = 1 WHERE userID = ? AND finished = 0', [user]);
            ws.send(JSON.stringify({ type: 'minesCashout', cashout: Math.floor(cashout) }));
        }
    });
});

app.use((req, res, next) => {
    let lastSessionUpdate = 0;
    const now = Date.now();
    const fifteenSeconds = 15 * 1000;
    res.locals.req = req;
    
    // @ts-ignore
    if (req.session.logged === true) {
        if (req.url === '/logout') {
            next();
            return;
        }

        // @ts-ignore
        if (req.session.lastSessionUpdate) {
            // @ts-ignore
            lastSessionUpdate = req.session.lastSessionUpdate;
            console.log('Last session update: ' + lastSessionUpdate);
        }
    }
    next();
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception thrown', err);
    process.exit(1);
});
