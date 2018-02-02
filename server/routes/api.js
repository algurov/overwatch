const express = require('express');
const router = express.Router();
const https = require('https');



// Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};

// Response handling
var response = {
  status: 200,
  data: [],
  message: null
};

// Get users
router.get('/users', function(req, res) {
  https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', function (resp) {
    var data = '';

    // A chunk of data has been recieved.
    resp.on('data', function (chunk) {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', function () {
      //console.log(JSON.parse(data).explanation);
      res.json(data);
    });
    //res.json({id: 1});
  });
});


module.exports = router;
