const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: { type: String },
    content: { type: String },
    desc: { type: String },
    img: { type: String, default: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png' },
    createTime: { type: String },
    like: { type: Number, default: 0 },
    comment: { type: Number, default: 0},
    collect: { type: Number, default: 0},


})
mongoose.model('Article', ArticleSchema)