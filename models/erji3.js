const mongoose = require("mongoose");

var erji3Schema = new mongoose.Schema({
    title: String,
    time: String,
    show: String,

})

var Erji3 = mongoose.model("erji3", erji3Schema);

module.exports = Erji3;