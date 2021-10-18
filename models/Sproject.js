const mongoose = require('mongoose')
var sprojectScheme = new mongoose.Schema({
    nickname: String,
    avatar: String,
    alink: String
})
var Sproject = mongoose.model('sproject', sprojectScheme)
module.exports = Sproject;