const mongoose = require("mongoose");

var erji5Schema = new mongoose.Schema({
    title: String,
    time: String,
    show: String,
    texts: String,
})

var Erji5 = mongoose.model("erji5", erji5Schema);

module.exports = Erji5;