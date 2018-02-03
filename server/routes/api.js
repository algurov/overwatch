const express = require('express');
const router = express.Router();
const https = require('https');
var url = require('url');


const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};


var response = {
  status: 200,
  data: [],
  message: null
};

router.get('/heroes', function(req, res) {
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  var page = req.query.page;
  https.get('https://dojo-madness-challenge.herokuapp.com/api/heroes?page=' + page + '&perPage=5', function (resp) {
    var data = '';

    resp.on('data', function (chunk) {
      data += chunk;
    });

    resp.on('end', function () {
      res.json(data);
    });
  });
});


module.exports = router;
