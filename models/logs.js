const mongoose = require('mongoose')
const logSchema = new mongoose.Schema({
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
})
module.exports = mongoose.model('Log', logSchema)