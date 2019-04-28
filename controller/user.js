const User = require('../proxy').User
const md5 = require('md5')
exports.login = (req, res, next) => {
    console.log('查看参数信息', req.body.loginname)
    if (!req.body.loginname) {
        res.status(403)
        res.json({
            error: '403',
            message: '请输入用户名！'
        })
        return
    }
    if (!req.body.password) {
        res.status(403)
        res.json({
            error: '403',
            message: '请输入密码！'
        })
        return
    }
    console.log('还会执行吗')
    User.login(req.body.loginname, md5(req.body.password), (err, user) => {
        if (err) {
            console.log('出错了')
            return
        }
        if (user === null) {
            res.status(403)
            res.json({
                error: '403',
                message: '账号或密码错误！'
            })
        } else {
            res.cookie('user_id', user._id)
            res.json(user)
        }
    })
}
exports.greateUser = (req, res, next) => {
    let params = req.body
    let userInfo = {
        username: params.username,
        password: md5(params.password),
        sex: params.sex,
        loginname: params.loginname,
        email: params.email
    }
    if (!userInfo.username || !userInfo.password || !userInfo.sex || !userInfo.loginname || !userInfo.email) {
        res.status(403)
        res.send('信息不完整注册失败！')
        return
    }
    User.getUserByLoginName(userInfo.loginname, (err, hasUser) => {
        if (hasUser) {
            res.status(403)
            res.send('登陆名已被占用')
            return
        } 
        User.register(userInfo, (err, user) => {
            if (err) {
                console.log('出错了')
                return
            }
            res.json(user)
         })
    })
    
}