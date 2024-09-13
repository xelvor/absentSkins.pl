import { createConnection } from 'mysql2';
import { config } from '../config';

export const connection = createConnection({
    host: config.mysql.host,
    user: config.mysql.user,
    database: config.mysql.db,
    password: config.mysql.password
});