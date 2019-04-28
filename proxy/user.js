const models = require('../models')
const User = models.User

// 通过用户名搜索
exports.getUserByName = (name, callback) => {
    User.findOne({'username': new RegExp(`^${name}$`, "i")}, callback)
}
// 判断是否可以登陆
exports.login = (name, password, callback) => {
    console.log(`用户${name}尝试登陆-------->`)
    User.findOne({'loginname': name, 'password': password}, callback)
}

exports.getUserByLoginName = (name, callback) => {
    User.findOne({'loginname': name}, callback)
}

exports.register = (userInfo, callback) => {
    let user = new User()
    user.username = userInfo.username
    user.password = userInfo.password
    user.sex = userInfo.sex
    user.loginname = userInfo.loginname
    user.email = userInfo.email
    user.save(callback)
}