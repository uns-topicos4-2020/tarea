// const db = require("../setting/init_db");
import { default as db } from '../setting/init_db'
export const Read = (user, password) => {
    if(user && password) {
        // return db.query(`SELECT table_name FROM information_schema.tables `)
        return db.query(`SELECT * FROM pg_user WHERE usename = '${user}' LIMIT 1`)
    } else {
        return db.query(`SELECT * FROM pg_user `)
    }
}
export const Update = () => {
    return db.query(`UPDATE pg_user SET (company_id = '24500389-0ff4-4be7-96dc-409340539', user_id = '38b582e6-9322-40fa-965e-d8b7897e2', name = 'testing', web = 'www.jassgroup.com', rubro = '4', admanager_order_id = '2757569259')`)
}
export const Delete = () => {
    return db.query(`INSERT INTO pg_user (company_id, user_id, name, web, rubro, admanager_order_id)
    VALUES ('24500389-0ff4-4be7-96dc-409340539', '38b582e6-9322-40fa-965e-d8b7897e2', 'testing',  'www.jassgroup.com', '4', '2757569259' )`)
}
export const Create = (id) => {
    return db.query(`DELETE FROM pg_user WHERE company_id = ${id}`)
}