const mongoose = require("mongoose");
var activeShame = new mongoose.Schema({
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
    nid: {
        type: String,
    },
    herf: {
        type: String,
    },
    p1: {
        type: String,
    },
    p2: {
        type: String,
    },
    p3: {
        type: String,
    },
    p4: {
        type: String,
    },
    p5: {
        type: String,
    },
    p6: {
        type: String,
    },
    p7: {
        type: String,
    },
    p8: {
        type: String,
    },
    p9: {
        type: String,
    }
});
var Active = mongoose.model("active", activeShame);
module.exports = Active;