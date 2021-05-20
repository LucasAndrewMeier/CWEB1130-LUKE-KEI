var express = require('express');
var router = express.Router();
var fs = require('fs');
var logon = require('../model/logonstructure.js');



//creating logon
router.post('/', function(req, res, next) {


  logon.Email = req.body.Email;
  logon.Password= req.body.password;

  console.log(logon);

  let logonData = fs.readFileSync('./logon.json');

  let sitelogon = JSON.parse(logonData);

 
  sitelogon.push(logon);

  const logonString = JSON.stringify(sitelogon)
  fs.writeFile('./logon.json', logonString, err => {
     
      if (err) {
          console.log('Error writing file', err)
      } else {
          console.log('Successfully wrote file')
      }
  })

  res.render('display', logon)
});

module.exports = router;
