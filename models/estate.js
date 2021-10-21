const mongoose = require("mongoose");

var estateScheme = new mongoose.Schema({
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
var Estate = mongoose.model('estate',estateScheme);
module.exports = Estate