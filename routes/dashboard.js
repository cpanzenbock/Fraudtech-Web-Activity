var express = require('express');
var router = express.Router();

let dashboard = require('../controllers/dashboard');

/* GET dash page. */
router.get('/', dashboard.getDash);

module.exports = router;
