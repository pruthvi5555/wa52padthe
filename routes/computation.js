var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  val = Math.floor(Math.random() * Math.floor(500));
  if (req.query.val)
    val = req.query.val;
  res.send(`Math.ceil applied to ${val} is ${Math.ceil(val)}`)
});

module.exports = router;
