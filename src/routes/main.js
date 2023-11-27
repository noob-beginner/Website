const express = require("express");
const { route } = require('express/lib/application');

const Detail = require("../models/detail");
const async = require("hbs/lib/async");
const Slider = require("../models/Slider");
const Service = require("../models/Service");
const Contact = require("../models/Contact");
const Banner1 = require("../models/Banner-1");
const Banner2 = require("../models/Banner-2");
const Banner3 = require("../models/Banner-3");
const AboutUs = require("../models/AboutUs");


const routes = express.Router();

routes.get("/", async(req,res) => {
    const details = await Detail.findOne({
        "_id":"65643c5c6772b4598ca81f5d"
    });
    const Slides = await Slider.find();
    // console.log(Slides);
    // console.log(details);
    const services = await Service.find();
    const banner1 = await Banner1.find();
    const banner2 = await Banner2.find();
    const banner3 = await Banner3.find();
    const abou = await AboutUs.find();

    res.render("index", {
        details: details,
        Slides:Slides,
        services:services,
        banner1:banner1,
        banner2:banner2,
        banner3:banner3,
        abou:abou
    })
})

routes.get("/gallery", async(req,res) => {
    const details = await Detail.findOne({
        "_id":"65643c5c6772b4598ca81f5d"
    })
    res.render("gallery", {
        details: details
    })
})
routes.get("/admin", async(req,res) => {
    const details = await Detail.findOne({
        "_id":"65643c5c6772b4598ca81f5d"
    })
    res.render("admin", {
        details: details
    })
})

//Process contact form!!
routes.post("/process-contact-form",async(req,res) => {
    console.log("Form Is submitted!");
    // console.log(req.body);
    // save the data to db
    try {

        const data = await Contact.create(req.body);
        console.log(data);
        res.redirect("/");
        
    } catch (error) {
        console.log(error);
        res.redirect("/");
    }
})

module.exports = routes