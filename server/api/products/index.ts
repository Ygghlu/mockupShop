import conn from '../database'

export default defineEventHandler(async() => {

    const [rows, fields] = await (await conn).execute("SELECT * FROM products")
    
    //console.log(rows)
    return {
        rows
    }
   // .then(conn => conn.query("SELECT * FROM `customers` Limit 0,2"))
    //.then(([rows,fields])=> console.log(rows[0]);)

})
    

    

