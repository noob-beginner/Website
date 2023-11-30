const express = require("express");
const hbs = require("hbs");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const routes = require("./routes/main");
const Detail = require("./models/detail");
const Slider = require("./models/Slider");
const Service = require("./models/Service");
const Banner1 = require("./models/Banner-1");
const Banner2 = require("./models/Banner-2");
const Banner3 = require("./models/Banner-3");
// const BAboutUs = require("./models/AboutUs");x`
const AboutUs = require("./models/AboutUs");
const admin = require("./models/admin");

app.use(bodyParser.urlencoded({
  extended:true
}))

app.use('/static',express.static("public"));
app.use('',routes);

// HBS....Template Engine

app.set("view engine","hbs");
app.set("views","views");
hbs.registerPartials("views/partials");

//DB connections
mongoose.connect("mongodb://127.0.0.1/website")
  .then(() => {
    console.log("Db Connected");
    
    // admin.create({
    //   username: "Admin",
    //   password: "pass@123"  
    // });


    // AboutUs.create({
    //   content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    // });


    // Banner3.create({
    //   title: "We work for people, not for money",
    //   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //   buttonText: "Click Here",
    //   imgURL:"/static/images/img7.jpg"
    // });


    // Banner2.create({
    //   title: "We work for people, not for money",
    //   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //   buttonText: "Click Here",
    //   imgURL:"/static/images/img6.jpg"
    // });


  // Banner1.create({
  //   title: "Start learning new technology here!!",
  //   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   buttonText: "Start Learning"
  // });
  //   Service.create([{
  //     icon:"fa-brands fa-servicestack",
  //     title: "Provide Best Courses",
  //     description: "We provide best courses that helps us students in placement and learning coding.",
  //     linkText: "#!",
  //     link:"Check"
  //   },
  //   {
  //     icon:"fa-brands fa-wordpress",
  //     title: "Learn Prioject",
  //     description: "We provide best courses that helps us students in placement and learning coding.",
  //     linkText: "#!",
  //     link:"Learn"
  //   },
  //   {
  //     icon:"fa-solid fa-face-smile",
  //     title: "Provide Best Courses",
  //     description: "We provide best courses that helps us students in placement and learning coding.",
  //     linkText: "#!",
  //     link:"Check"
  //   }
  // ])
  //   Slider.create([{
  //     title: "Learn Java in very easy Manner!",
  //     subTitle: "Java is one of the most important programming language.",
  //     imageURL: "/static/images/img3.png"
  //   },
  //   {
  //     title: "What is Django in Python?",
  //     subTitle: "Django is the most famous web framework of pyhton programming.",
  //     imageURL: "/static/images/img4.jpg"
  //   },
  //   {
  //     title: "What about Node Js?",
  //     subTitle: "Node js is runtime enviroment to execute javascript outside browser.",
  //     imageURL: "/static/images/img5.jpg"
  //   }
  // ])


    // Detail.create({
    //   brandName: "Techolutions",
    //   brandIconURL: "https://i.pinimg.com/736x/ef/7f/39/ef7f39f98f6aaf2248d8db7ccbdff346.jpg",
    //   links: [
    //     {
    //       label: "Home",
    //       url: "/"
    //     },
    //     {
    //       label: "Services",
    //       url: "/#services_section"
    //     },
    //     {
    //       label: "Gallery",
    //       url: "/gallery"
    //     },
    //     {
    //       label: "About",
    //       url: "/#about_section"
    //     },
    //     {
    //       label: "Contact Us",
    //       url: "/#contact_us_section"
    //     },
    //     {
    //       label: "Admin Panel",
    //       url: "/admin"
    //     }
    //   ]
    // })
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error.message);
  });


app.listen(process.env.PORT | 5556,()=>{
    console.log("Server Started");
})