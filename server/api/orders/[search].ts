

import conn from '../database'

export default defineEventHandler(async event => {
    const text = getQuery(event).id
    const [rows] = await (await conn).execute("SELECT * FROM orders INNER JOIN orderdetails ON orders.orderNumber= orderdetails.orderNumber  where orders.orderNumber = "+text)
    //const [row2] = await (await conn).execute("")
    //console.log(getQuery(event).id)
    return {
        rows
    }
   // .then(conn => conn.query("SELECT * FROM `customers` Limit 0,2"))
    //.then(([rows,fields])=> console.log(rows[0]);)

})