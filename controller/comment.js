const Comment = require('../proxy').Comment

exports.getArticleComment = (req, res, next) => {
    let id = req.body.id
    if (!id) {
        res.status(404)
        res.json({
            error: '404',
            message: '没有文章id'
        })
        return
    }
    Comment.getCommentByArticleId(id, (err, commentList) => {
        if (err) {
            console.log('请求出错了')
        }
        res.json(commentList)
    })
}
