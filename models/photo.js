const mongoose = require("mongoose");

var photoScheme = new mongoose.Schema({
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
var  Photo= mongoose.model('photo',photoScheme);
module.exports = Photo