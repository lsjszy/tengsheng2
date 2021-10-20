const mongoose = require("mongoose");

var erji4Schema = new mongoose.Schema({
    title: String,
    time: String,
    show: String,

})

var Erji4 = mongoose.model("erji4", erji4Schema);

module.exports = Erji4;