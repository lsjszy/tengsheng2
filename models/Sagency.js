const mongoose = require('mongoose')
var sagencyScheme = new mongoose.Schema({
    nickname: String,
    avatar: String,
    alink: String,
    itemname: String,
    barndalink: String
})
var Sagency = mongoose.model('sagency', sagencyScheme)
module.exports = Sagency;