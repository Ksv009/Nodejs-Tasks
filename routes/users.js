var express = require('express');
var router = express.Router();
const employee = require('../controllers/employee');
const auth = require("../CheckToken");

router.post('/signup', employee.signup);
router.post('/accesslogin',employee.accesslogin);
router.get('/referred', employee.ReferredAccounts);
router.get('/welcome', auth, employee.tokencheck);

module.exports = router;