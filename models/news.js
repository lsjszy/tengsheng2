const mongoose = require("mongoose");
var newsShame = new mongoose.Schema({
    title: {
        type: String,
    },
    content: {
        type: String,

    },
    data: {
        type: String,
    },
    _id: {
        type: String,
    },
    name: {
        type: String,
    },
    inco: {
        type: String
    },
    head: {
        type: String
    }
});
var News = mongoose.model("news", newsShame);
module.exports = News;