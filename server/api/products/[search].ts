

import conn from '../database'

export default defineEventHandler(async event => {
    const text = getQuery(event).productCode
    const [rows] = await (await conn).execute("SELECT * FROM products  where productCode ="+text)
    //const [row2] = await (await conn).execute("")
    console.log(getQuery(event).productCode)
    return {
        rows
    }
   // .then(conn => conn.query("SELECT * FROM `customers` Limit 0,2"))
    //.then(([rows,fields])=> console.log(rows[0]);)

})