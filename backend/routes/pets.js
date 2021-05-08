var express = require('express');
var router = express.Router();
var fs = require('fs');

let userData = fs.readFileSync('./users.json');
var userSite = JSON.parse(userData);


/* GET users listing. */
router.get('/', function(req, res, next) {
  var createdUsers = userSite
  res.render('user', {createdUsers})
});


module.exports = router;
