const express = require('express');
const router = express.Router();


//actual path starts with "/skills"


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Skills' });
});

module.exports = router;
