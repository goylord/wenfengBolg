var express = require('express');
var router = express.Router();
const Users = require('../controller/user')

/* GET users listing. */
router.post('/login', Users.login);
router.post('/reg', Users.greateUser)

module.exports = router;
