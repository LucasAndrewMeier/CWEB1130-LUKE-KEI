var express = require('express');
var router = express.Router();
var fs = require('fs');
var user = require('../model/user-structure.js');


router.post('/', function(req,res,next){
    //reading users from users.json file and assigning user to userData var
    let userData = fs.readFileSync('./users.json')
   
   //user authentication
    var username = req.query.user_name;
    var userpass = req.query.password;

    for(var x = 0; x < userData.length; x++){
        if(username == userData.user_name && userpass == userData.password){
            res.render('/user', user.user_name);
        }
    }
})
