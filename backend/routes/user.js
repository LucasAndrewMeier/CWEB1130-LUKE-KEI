var express = require('express');
var router = express.Router();
var fs = require('fs');

let userData = fs.readFileSync('./users.json');
var siteUsers = JSON.parse(userData);

/* GET users listing. */
router.get('/', function(req, res, next) {
  //Assigning the parsed array of objects read-in from boxers.json to a variable called createdBoxers
var createduser = siteUsers;
res.render('user', {createduser});
});

module.exports = router;
