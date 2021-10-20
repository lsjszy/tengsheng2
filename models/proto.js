const mongoose = require("mongoose");

var protoSchema = new mongoose.Schema({
    avatar: String,
    title: String,
    dio: String,
    alink: String,
    display: Number
})

var Proto = mongoose.model("Proto", protoSchema);

module.exports = Proto;