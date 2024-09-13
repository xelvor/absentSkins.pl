import { connection } from "./database";

export function addCommas(n: number) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export async function getUserBalance(steamid: string) {
    const [rows] = await connection.promise().query('SELECT * FROM users WHERE steamId = ?', [steamid]);
    // @ts-ignore
    return rows[0].balance;
}

export async function addUserBalance(steamid: string, balance: number) {
    await connection.promise().query('UPDATE users SET balance = balance + ? WHERE steamId = ?', [balance, steamid]);
}

export async function removeUserBalance(steamid: string, balance: number) {
    await connection.promise().query('UPDATE users SET balance = balance - ? WHERE steamId = ?', [balance, steamid]);
}