const mongoose = require("mongoose");

var protoScheme = new mongoose.Schema({

})

var Proto = mongoose.model("Proto", protoScheme);

module.exports = Proto;