const mongoose = require("mongoose");

var designScheme = new mongoose.Schema({
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
var Design = mongoose.model('design',designScheme)
module.exports = Design