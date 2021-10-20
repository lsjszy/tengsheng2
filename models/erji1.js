const mongoose = require("mongoose");

var erji1Schema = new mongoose.Schema({
    title: String,
    time: String,
    show: String,

})

var Erji1 = mongoose.model("erji1", erji1Schema);

module.exports = Erji1;