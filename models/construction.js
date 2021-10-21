const mongoose = require("mongoose");

var constructionScheme = new mongoose.Schema({
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
var Construction = mongoose.model('construction',constructionScheme)
module.exports = Construction