const mongoose = require("mongoose");

const Banner2 = mongoose.Schema({
    title: String,
    description:String,
    buttonText:String,
    imgURL:String
})

module.exports = mongoose.model('Banner2',Banner2);