const mongoose = require("mongoose");
var imgShame = new mongoose.Schema({
    _id: {
        type: String,
    },
    src1: {
        type: String,

    },
    src2: {
        type: String,

    },
    src3: {
        type: String,

    },
    src4: {
        type: String,

    },
    src5: {
        type: String,

    },
    src6: {
        type: String,

    },
    src7: {
        type: String,

    },
    nid: {
        type: String,
    }
});
var Imgs = mongoose.model("imgs", imgShame);
module.exports = Imgs;