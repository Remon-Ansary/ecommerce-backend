const express = require('express');
const request = require("request");
const router = express.Router();
const fetch = require('node-fetch');
router.get('/tweets', (req, res) => {
    const str = [{
        "name": "Remon",
        "message": "This is my first tweet",
        "username": "remonansary"
    }];

    res.end(JSON.stringify(str));
});



router.get('/addTweet', (req, res) => {
    request
    (
        "https://www.breakingbadapi.com/api/characters/",
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
             JSON.parse(body);
              

            }
            res.end((body));
          
        }
    );
});

     



module.exports = router;