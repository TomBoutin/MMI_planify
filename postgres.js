import { Pool } from 'pg';

const pool = new Pool({
    host: 'db',
    port: 5432,
    user: 'user',
    password: 'drowssap',
    database: 'projet'
});

export default pool;