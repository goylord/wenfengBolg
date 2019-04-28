const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = Schema({
    username: { type: String },
    loginname: { type: String },
    password: { type: String },
    avatar: { type: String, default: '/images/top.svg' },
    sex: { type: Number, default: 0},
    signTime: { type: String },
    email: { type: String }
})
mongoose.model('User', UserSchema)