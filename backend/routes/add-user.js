var express = require('express');
var router = express.Router();
var fs = require('fs');
var user = require('../model/user-structure.js');

/* CREATE USER PROFILE */
router.post('/add-user', function(req,res,next){
    //USE DATA MODEL STRUCT FROM USER-STRUCT
    user.user_name = req.body.user_name;
    user.first_name = req.body.first_name;
    user.last_name = req.body.last_name;
    user.password = req.body.password;

    //console output to confirm user creation
    console.log(user);

    //reading users from users.json file and assigning user to userData var
    let userData = fs.readFileSync('./users.json')

    //convert string to js  objects
    let userSite = JSON.parse(userData);

    //add user to array in users.json
    userSite.push(user);

    /*the user is added to the array, the JSON.stringify() method converts the JS array
    into a string to overide users.json and write the updated array of objects to users.json*/
    const userString = JSON.stringify(userSite)
    fs.writeFile('./users.json', userString, err => {
        //error handling
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Succesfully wrote file')
        }
    })
})

module.exports = router;