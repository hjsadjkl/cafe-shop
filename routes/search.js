var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.send("QQ")
})

router.get('/:id', function(req, res, next){
    const id = req.params.id
    console.log(id);
    res.render('index',{
        title: id, 
        TestList: id
    });
})




module.exports = router;