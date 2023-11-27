const mongoose = require("mongoose");

const AboutUs = mongoose.Schema({
    content:String,
})

module.exports = mongoose.model('AboutUs',AboutUs);