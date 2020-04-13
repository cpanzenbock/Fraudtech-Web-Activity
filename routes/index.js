var express = require('express');
var router = express.Router();

let landing = require('../controllers/landing');
let dashboard = require('../controllers/dashboard');

/* GET home page. */
router.get('/', landing.getLanding);
/* POST home page form submission */
router.post('/', landing.submitEnhancement);
/* GET dash page. */
router.get('/status', dashboard.getDash);

module.exports = router;
