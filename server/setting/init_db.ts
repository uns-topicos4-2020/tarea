import { Pool, Client } from 'pg'

const pool = new Pool({
    user: 'normal_user',
    host: 'autogestion-dev.c66d2rypdwyt.us-east-2.rds.amazonaws.com',
    database: 'postgres',
    password: 'ya|no|me|acuerdo',
    port: 5432,
})

export const result = pool.query('SELECT * FROM pg_catalog.pg_user')



