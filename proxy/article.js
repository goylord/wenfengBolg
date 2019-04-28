const models = require('../models')
const Article = models.Article
const User = models.User

exports.publish = (article, callback) => {
    let art = new Article()
    art.title = article.title
    art.content = article.content
    art.createTime = article.createTime
    art.user = article.user
    art.desc = article.desc
    art.img = article.img
    art.save(callback)
}
exports.getList = (callback) => {
    Article.find({}).populate('user', ['avatar', 'username']).sort([['createTime', -1]]).exec(callback)
}
exports.getArticleById = (id, callback) => {
    Article.findOne({_id: id}).populate('user', 'username').exec(callback)
}