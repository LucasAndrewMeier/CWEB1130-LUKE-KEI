var express = require('express');
var router = express.Router();

/* API */
router.get('/', function(req, res, next) {
        //USE DATA MODEL STRUCT FROM API-STRUCT
        pet.species= req.body.species;
        pet.name = req.body.name;
        pet.breed = req.body.breed;
        pet.gender = req.body.gender;
    //url from api
    const url = 'https://www.petrescue.com.au/api/listings/:id';
    
    const request = https.request(url,(response) => {
        let data = '';
        response.on('data', (chunk) => {
            data = data + chunk.toString();
        });

        response.on('end', () => {
            const body = JSON.parse(data);
            console.log(body);
            res.render('apidata', {body});
        });
    });

    request.on('error', (error) => {
        console.log('An error', error);
    });

    res.render("pets", pet)
    request.end()


});

module.exports = router;
