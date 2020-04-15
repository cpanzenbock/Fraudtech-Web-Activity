var express = require('express');
var router = express.Router();

let admin = require('../controllers/admin');

/* GET secret admin page. */
router.get(admin.secret_url, admin.getInterface);
router.get(admin.secret_url + ':reqID', admin.view);
router.get(admin.secret_url + ':reqID/update', admin.showUpdate);
router.post(admin.secret_url + ':reqID/update', admin.update);
router.get(admin.secret_url + ':reqID/delete', admin.delete);
router.post(admin.secret_url + ':reqID/delete', admin.delete);

module.exports = router;
