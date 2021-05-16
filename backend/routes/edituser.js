var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('edituser', { title: 'edituser' });
});

module.exports = router;
