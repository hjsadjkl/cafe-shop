var express = require('express');
var router = express.Router();
const CaseName = "CaseName"

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: CaseName, 
    TestList: '<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>'
  });
  next();
})
router.get('/search', function(req, res, next){
  const id = req.query.search
  console.log(id);
  res.render('index',{
      title: id, 
      TestList: id
  });
})




module.exports = router;
