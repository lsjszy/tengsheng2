const mongoose = require('mongoose')
var snewScheme = new mongoose.Schema({
    day: String,
    month: String,
    alink: String,
    name: String,
    cont: String
})
var Snew = mongoose.model('snew', snewScheme)
module.exports = Snew;