const mongoose = require("mongoose");

var projectScheme = new mongoose.Schema({
    link:{
        type:String,
    },
    picture:{
        type:String,
    },
    barText:{
        type:String,
    },
});
var Project = mongoose.model('project',projectScheme)
module.exports = Project
