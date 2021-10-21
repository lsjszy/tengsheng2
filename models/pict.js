const mongoose = require("mongoose");

var pictScheme = new mongoose.Schema({
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
var Pict = mongoose.model('Pict',pictScheme);
module.exports = Pict