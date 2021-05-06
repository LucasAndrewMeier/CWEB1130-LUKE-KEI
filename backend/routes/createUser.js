var express = require('express');
var router =express.Router();

/* User Listings*/
router.get('/createUser', function(req,res,next){
    res.render('createUser', {title: 'Create User'});
});

module.exports = router;