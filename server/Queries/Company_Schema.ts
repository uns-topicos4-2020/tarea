// const db = require("../setting/init_db");
import { default as db } from '../setting/init_db'
export const Create = (obj) => {
    return db.query(`INSERT INTO autogestion."Company" (company_id, user_id, name, web, rubro, admanager_order_id)
    VALUES ('${obj.company_id}', '${obj.user_id}', '${obj.name}',  '${obj.web}', '${obj.rubro}', '${obj.admanager_order_id}' )`)
}
export const Read = () => {
    return db.query(`SELECT * FROM autogestion."Company" `)
}
export const Update = (obj, company_id) => {
    return db.query(`UPDATE autogestion."Company" SET company_id = '${obj.company_id}', user_id = '${obj.user_id}', 
    name = '${obj.name}', web = '${obj.web}', rubro = '${obj.rubro}', admanager_order_id = NULL WHERE company_id = '${company_id}' `)
}
export const Delete = (company_id) => {
    return db.query(`DELETE FROM autogestion."Company" WHERE company_id = '${company_id}'`)
}