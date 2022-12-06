var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
const config = require('dotenv').config()

const pool =  mysql.createPool({
  port: process.env.PORT,
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
  const [rows] = await pool.query(`
  select *
  FROM Article
  where title like '%` + id + `%' OR adress like '%`+id +`%';`);
  return rows;
}

router.get('/', async function(req, res, next){
  if(req.query.search === ''){
    let database = await getTable();
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
  }else{
    let database = await getTableId(req.query.search);
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
  }

})





module.exports = router;