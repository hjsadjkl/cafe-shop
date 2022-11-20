var express = require('express');
var router = express.Router();
const CaseName = "CaseName"

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: CaseName, 
    TestList: '<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>QQ'

  });
});



module.exports = router;
