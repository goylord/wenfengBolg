const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = Schema({
    ArticleId: {
        type: Schema.Types.ObjectId,
        ref: 'Article'
    },
    replyUser: { type: String, default: '0'},
    commentUser:  {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    content: { type: String },
    createTime: { type: String },
})
mongoose.model('Comment', CommentSchema)