var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
const config = require('dotenv').config()

const pool =  mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
}).promise()

async function getTable(){
  const [rows] = await pool.query("SELECT * FROM Article");
    return rows;
}
async function getTableId(id){
  const [rows] = await pool.query(`SELECT ? FROM Article`,id);
}

router.get('/', async function(req, res, next){
  let database = await getTable("title");
  let title=[], adress=[], content=[];
  for(let i=0; i<database.length; i++){
    title.push(database[i].title);
    adress.push(database[i].adress);
    content.push(database[i].content);
  }
  res.render('search',{ 
    title: title,
    adress:adress ,
    content:content
  })
})





module.exports = router;