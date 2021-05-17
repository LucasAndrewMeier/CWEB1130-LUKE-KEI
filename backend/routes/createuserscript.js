var express = require('express');
var router = express.Router();
var fs = require('fs');
var user = require('../model/user-structure.js');

let userData = fs.readFileSync('./users.json');
let siteUsers = JSON.parse(userData);
const usersString = JSON.stringify(siteUsers);

// Create user
router.post('/', function(req, res, next) {

    var x;
    user.id = userData.forEach(user => {
        for( x = 0; x < userData.length; x++){
            user.id = x+1;
        }
    });
    user.name = req.body.name;
    user.password = req.body.password;
    console.log(user);
    siteUsers.push(user);


        fs.writeFile('./users.json', usersString, err => {
            //error handling if, issue arises with file, else output to successfully wrote file
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
            }
        })
    res.render('display', user)
    });



module.exports = router;
