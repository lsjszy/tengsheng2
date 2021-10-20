const mongoose = require("mongoose");

var erji2Schema = new mongoose.Schema({
    title: String,
    time: String,
    show: String,

})

var Erji2 = mongoose.model("erji2", erji2Schema);

module.exports = Erji2;