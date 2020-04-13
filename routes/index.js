var express = require('express');
var router = express.Router();

let landing = require('../controllers/landing');

/* GET home page. */
router.get('/', landing.getLanding);
/* POST home page form submission */
router.post('/', landing.submitEnhancement);

module.exports = router;
