const mongoose = require("mongoose");

var serviceScheme = new mongoose.Schema({
    link:{
        type:String,
    },
    picture:{
        type:String,
    },
    barText:{
        type:String,
    },
});
var Service = mongoose.model('service',serviceScheme)
module.exports = Service