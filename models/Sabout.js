const mongoose = require('mongoose')
var saboutScheme = new mongoose.Schema({
    nickname: String,
    Englishname: String,
    avatar: String,
    alink: String
})
var Sabout = mongoose.model('sabout', saboutScheme)
module.exports = Sabout;