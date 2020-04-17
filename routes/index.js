var express = require('express');
var router = express.Router();

let landing = require('../controllers/landing');
let dashboard = require('../controllers/dashboard');

/* GET home page. */
router.get('/', landing.getLanding);
router.get('/2', landing.getNextPage);
router.get('/3', landing.getLastPage);
/* POST home page form submission */
router.post('/2', landing.nextPage);
router.post('/3', landing.lastPage);
router.post('/submit', landing.submitEnhancement);
/* GET dash page. */
router.get('/status', dashboard.getDash);

module.exports = router;
