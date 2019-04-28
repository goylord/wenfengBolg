var express = require('express');
var router = express.Router();

const uploads = require('../controller/fileUpload')
router.post('/upload', uploads.uploadWare, uploads.uploadFile)

module.exports = router