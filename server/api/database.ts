
import mysql from 'mysql2/promise'

const conn =  mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '159951',
    database: 'classicmodels'
})

export default conn