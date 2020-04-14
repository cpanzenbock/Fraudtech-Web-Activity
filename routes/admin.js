var express = require('express');
var router = express.Router();

let admin = require('../controllers/admin');

/* GET secret admin page. */
router.get('/', admin.getInterface);
router.get('/:reqID', admin.view);
router.get('/:reqID/update', admin.showUpdate);
router.post('/:reqID/update', admin.update);

module.exports = router;
