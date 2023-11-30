const mongoose = require("mongoose");

const Banner3 = mongoose.Schema({
    title: String,
    description:String,
    buttonText:String,
    imgURL:String
})

module.exports = mongoose.model('Banner3',Banner3);