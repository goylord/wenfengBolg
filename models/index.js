const mongoose =  require('mongoose')
mongoose.connect('更改为自己的mongodb数据库', {
    poolSize: 20,
    useCreateIndex: true,
    useNewUrlParser: true
  }, function (err) {
    if (err) {
      console.error('connect to %s error: ', err.message);
      process.exit(1);
    }
  })
console.log('数据库应该连接成功------------>')
require('./user')
require('./article')
require('./comment')
exports.User = mongoose.model('User')
exports.Article = mongoose.model('Article')
exports.Comment = mongoose.model('Comment')
