const mongoose = require('mongoose')
var sproScheme = new mongoose.Schema({
    title: String,
    avatar: String,
    time: String,
    show: String
})
var Spro = mongoose.model('spro', sproScheme)
module.exports = Spro;