const models = require('../models')
const Comment = models.Comment

// 通过文章id筛选所有评论
exports.getCommentByArticleId = (id, callback) => {
    Comment.find({ArticleId: id}).populate('commentUser', ['username', 'avatar']).exec(callback)
}