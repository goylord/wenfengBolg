const Article = require('../proxy').Article

exports.publish = (req, res, next) => {
    let message = ''
    let status = 200
    let createTime = new Date().valueOf()
    if (!req.body.title) {
        status = 403
        message = '请输入标题'
        res.send('出错')
        return
    }
    if (!req.body.content) {
        status = 403
        message = '请输入内容'
        res.send('出错')
        return
    }
    console.log(req.cookies.user_id)
    let content = req.body.content
    content = content.replace(/#+ /g, '').replace(/> /g, '').replace(/```[\r\n]/g, '').replace(/[\r\n]```/g, '').replace(/\*+ /g, '').replace(/\*+ /g, '').replace(/[\r\n]/g," ").replace(/(!\[).+\]\(.+\)/, '').replace(/\[.+\]\(.+\)/, '')
    let articleInfo = {
        title: req.body.title,
        content: req.body.content,
        user: req.cookies.user_id,
        desc: content.slice(0, 100) + "...",
        createTime: createTime,
        img: req.body.img
    }
    Article.publish(articleInfo, (err, art) => {
        res.json(art)
    })
}
exports.delect = (req, res, next) => {
    res.status(403)
    res.json({
        error: '403',
        message: '功能未实现'
    })
}
exports.getList = (req, res, next) => {
    Article.getList((err, arts) => {
        if (err) {
            console.log(err)
        }
        res.json(arts)
    }) 
}
exports.getArticleById = (req, res, next) => {
    Article.getArticleById(req.body.id, (err, arts) => {
        if (err) {
            console.log(err)
        }
        arts.username = arts.user.username
        res.json(arts)
    }) 
}