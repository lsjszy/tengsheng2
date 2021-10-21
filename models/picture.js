const mongoose = require("mongoose");

var picScheme = new mongoose.Schema({
    title:{
        type:String,
    },
    time:{
        type:String,
    },
    show:String,
    pic:String,
    pict:String,
    pictu:String,
    pictur:String,
    
});
var Pic = mongoose.model('Pic',picScheme);
module.exports = Pic