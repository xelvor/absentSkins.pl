import { connection } from "./database";

export const states = {
    '0': 'Factory New',
    '1': 'Minimal Wear',
    '2': 'Field-Tested',
    '3': 'Well-Worn',
    '4': 'Battle-Scarred'
};

export async function addPlayerItem(steamID: string, item: string) {
    const [rows] = await connection.promise().query('SELECT * FROM users WHERE steamId = ?', [steamID]);

    // @ts-ignore
    if (rows.length == 0) return;

    const inventory = JSON.parse(rows[0].inventory);
    const randomState = Math.floor(Math.random() * 5);
    inventory.push({ item: item, state: randomState });

    await connection.promise().query('UPDATE users SET inventory = ? WHERE steamId = ?', [JSON.stringify(inventory), steamID]);
}

export async function getPlayerItems(steamID: string): Promise<string[]> {
    const [rows] = await connection.promise().query('SELECT * FROM users WHERE steamId = ?', [steamID]);

    // @ts-ignore
    if (rows.length == 0) return [];

    return JSON.parse(rows[0].inventory);
}