var express = require('express');
var router = express.Router();
const Article = require('../controller/article')

/* GET users listing. */
router.post('/publish', Article.publish);
router.post('/delect', Article.delect)
router.get('/list', Article.getList)
router.post('/get', Article.getArticleById)

module.exports = router;
