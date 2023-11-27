const mongoose = require("mongoose");

const Slider = mongoose.Schema({
    title: String,
    subTitle:String,
    imageURL: String,
    Class: String
})

module.exports = mongoose.model('slider',Slider);