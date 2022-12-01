mysql = require('mysql2')
import dotenv from 'dotenv'
dotenv.config()

const pool =  mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'hjsadjkl',
    database: 'webwork'
}).promise()

export async function getTable(){
    const [rows] = await pool.query("SELECT * FROM Article");
    return rows;
};

export async function articleSearch(search){
    const [rows]= await pool.query(`
    SELECT * FROM article
    WHERE title = ? OR adress = ?
    `, [search], [search]);
    return rows;
}

module.exports = {
    getTable,
    articleSearch
}

