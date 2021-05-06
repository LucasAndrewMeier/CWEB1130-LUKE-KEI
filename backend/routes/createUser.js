var express = require('express');
var router =express.Router();

/* User Listings*/
router.get('/', function(req,res,next){
    res.render('createuser', {title: 'Create User'});
});

module.exports = router;