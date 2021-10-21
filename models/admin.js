 const mongoose = require("mongoose")
 var adminScheme = new mongoose.Schema({
     number: Number,
     date:  String,
     admin: String,
     text: String,
     browse: String,
     link:String

 });
 var Admin = mongoose.model('admin', adminScheme)
 module.exports = Admin