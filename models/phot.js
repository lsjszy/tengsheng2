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
var  Phot= mongoose.model('phot',photScheme);
module.exports = Phot