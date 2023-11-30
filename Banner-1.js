const mongoose = require("mongoose");

const Banner1 = mongoose.Schema({
    title: String,
    description:String,
    buttonText:String
})

module.exports = mongoose.model('Banner1',Banner1);