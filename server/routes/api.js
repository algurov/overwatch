const express = require('express');
const router = express.Router();
var url = require('url');
const Client = require('pg').Client;

var client = new Client({
  user: "agdtjnpjehxzre",
  password: "3e2cb955a94d89f9068687e63f39a4c9de33f01a1341d195ec7be4c90a63bb5b",
  database: "dfc0r4s920uliv",
  port: 5432,
  host: "ec2-50-16-231-2.compute-1.amazonaws.com",
  ssl: true
});

client.connect()

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
  var q = 'SELECT * from hero OFFSET ' + (page * 5) +'  LIMIT 5;';
  client.query(q, (err, result) => {
  if (result) {
    res.json(result);
  }

});
});


module.exports = router;
