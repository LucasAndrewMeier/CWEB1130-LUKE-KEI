var express = require('express');
var router = express.Router();
var fs = require('fs');
let userData = fs.readFileSync('./users.json');
let siteUsers = JSON.parse(userData);

router.put('/edituser',function(req,res){
    user.name = req.body.name;
    user.password = req.body.password;
    console.log(user);
    siteUsers.push(user);
  
        const usersString = JSON.stringify(siteUsers)
        fs.writeFile('./users.json', usersString, err => {
            //error handling if, issue arises with file, else output to successfully wrote file
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully overwrote file')
            }
        })
    res.render('edituser', user)
})


module.exports = router;