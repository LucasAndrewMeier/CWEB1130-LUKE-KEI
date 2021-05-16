var express = require('express');
var router = express.Router();
var fs = require('fs');
let userData = fs.readFileSync('./users.json');
let siteUsers = JSON.parse(userData);

router.get('/listofusrs',function(req,res){
    user.name = req.body.name;
    console.log(user);
    siteUsers.push(user);

      
    const usersString = JSON.stringify(siteUsers);
    for(var x = 0; x < usersString.length; x++){
        if(user.name != usersString[x].name){
            siteUsers.push(user)
            x = usersString.length;

        }else{
            usersString[x].name = user.name;
            x = usersString.length;
        }
    }
  
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