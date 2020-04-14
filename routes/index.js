var express = require('express');
var router = express.Router();

let landing = require('../controllers/landing');
let dashboard = require('../controllers/dashboard');
let admin = require('../controllers/admin');



/* GET home page. */
router.get('/', landing.getLanding);
/* POST home page form submission */
router.post('/', landing.submitEnhancement);
/* GET dash page. */
router.get('/status', dashboard.getDash);
/* GET secret admin page. */
router.get(admin.secret_url, admin.getInterface);
router.get(admin.secret_url + ':reqID', admin.view);
router.get(admin.secret_url + ':reqID/update', admin.showUpdate);
router.post(admin.secret_url + ':reqID/update', admin.update);

module.exports = router;
