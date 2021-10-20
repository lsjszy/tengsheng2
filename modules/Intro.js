const mongoose = require("mongoose");

var IntroSchema = new mongoose.Schema({
  texts: String,
  imgs:String,
});

var Intro = mongoose.model("Intro", IntroSchema);

module.exports = Intro
