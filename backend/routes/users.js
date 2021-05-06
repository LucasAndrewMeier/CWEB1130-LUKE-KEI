var express = require('express');
var router = express.Router();
var users = require('../users.json');


/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.json(users);
});


module.exports = router;
