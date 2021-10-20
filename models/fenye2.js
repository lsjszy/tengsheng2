const mongoose = require("mongoose");

var fenye2Schema = new mongoose.Schema({
    avatar: String,
    title: String,
    dio: String,
    alink: String,
    display: Number
})

var Fenye2 = mongoose.model("Fenye2", fenye2Schema);

module.exports = Fenye2;