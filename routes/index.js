var express = require('express');
var router = express.Router();

let landing = require('../controllers/landing');
let dashboard = require('../controllers/dashboard');

/* GET home page. */
router.get('/', landing.getLanding);
/* POST home page form submission */
router.post('/', landing.submitEnhancement);
/* GET dash page. */
router.get('/track', dashboard.getTracker);
router.get('/status', dashboard.getDash);
router.get('/status/:mon', dashboard.getDashMon);
router.get('/status/:mon1/:mon2', dashboard.getDashCompMons);

module.exports = router;
