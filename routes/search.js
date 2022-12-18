var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
const config = require('dotenv').config()

const pool =  mysql.createPool({
  port: process.env.MYSQLPORT,
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE
}).promise()

async function getTable(){
  const [rows] = await pool.query("SELECT * FROM Article");
    return rows;
}
async function getTableId(id){
  const [rows] = await pool.query(`
  select *
  FROM Article
  where title like '%` + id + `%' OR adress like '%`+id +`%';`);
  return rows;
}

router.get('/', async function(req, res, next){
  let title=[], adress=[], content=[], link=[];
  if(req.query.search === ''){
    let database = await getTable();
    for(let i=0; i<database.length; i++){
      title.push(database[i].title);
      adress.push(database[i].adress);
      content.push(database[i].content);
      link.push(database[i].link);
    }
  }else{
    let database = await getTableId(req.query.search);
    for(let i=0; i<database.length; i++){
      title.push(database[i].title);
      adress.push(database[i].adress);
      content.push(database[i].content);
      link.push(database[i].link);
    }
  }
  res.render('search',{ 
    title: title,
    adress:adress ,
    content:content,
    link: link
  })

})





module.exports = router;