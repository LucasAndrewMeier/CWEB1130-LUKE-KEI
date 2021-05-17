var express = require('express');
var router = express.Router();
var apiDATA = require('../APIconnection/api');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
  
});

module.exports = router;
