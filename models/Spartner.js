const mongoose = require('mongoose')
var spartnerScheme = new mongoose.Schema({
    avatar: String,
    alink: String
})
var Spartner = mongoose.model('spartner', spartnerScheme)
module.exports = Spartner;