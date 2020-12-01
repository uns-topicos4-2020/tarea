const { Pool, Client } = require('pg')

const pool = new Pool({
    user: 'sololectura',
    host: 'autogestion-dev.c66d2rypdwyt.us-east-2.rds.amazonaws.com',
    database: 'postgres',
    password: 'nomas|puedo|leer',
    port: 5432,
})

export const result = pool.query('SELECT * FROM pg_catalog.pg_user')



