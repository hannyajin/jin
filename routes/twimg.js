var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {

  var img = '<img src="' + 'http://192.227.234.154:40000/' + '"">'

  res.send( img );
  res.end();
});

module.exports = router;
