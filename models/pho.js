const mongoose = require("mongoose");

var photScheme = new mongoose.Schema({
    title:{
        type:String,
    },
    time:{
        type:String,
    },
    show:String,
    ph:String,
    pho:String,
    phot:String,
    photo:String,
    name:String,
    address:String,
    display:String,
});
var  Pho= mongoose.model('pho',photScheme);
module.exports = Pho