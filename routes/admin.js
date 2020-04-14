var express = require('express');
var router = express.Router();

let admin = require('../controllers/admin');

/* GET secret admin page. */
router.get('/', admin.getInterface);

module.exports = router;
