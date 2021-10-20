const mongoose = require("mongoose");

var erjiSchema = new mongoose.Schema({
    title: String,
    time: String,
    show: String,
    texts: String,

})

var Erji = mongoose.model("erji", erjiSchema);

module.exports = Erji;