const mongoose = require('mongoose')
var sprojScheme = new mongoose.Schema({
    avatar: String,
    alink: String
})
var Sproj = mongoose.model('sproj', sprojScheme)
module.exports = Sproj;