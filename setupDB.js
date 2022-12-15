// Requiring module
const mongoose = require('mongoose');
const Contact = require('./models/User');
const courseContact = require('./models/Course');
const contactVideo = require('./models/Video');
require('dotenv').config();
var host;
process.env.STATUS === 'production'
  ? (host = process.env.PROD_HOST)
  : (host = process.env.DEV_HOST);
// Connection URL
const url = 'mongodb://'+ host +':27017/JoodTubeDB';
// const url = 'mongodb://mongo:27017/JoodTubeDB';
console.log(url);
const connectDB = async () => {
  try {
      const conn = await mongoose.connect(url, {
          useNewUrlParser: true,
      });
      console.log(`MongoDB Connected: `,url);

        const User = [{
          fname: "Admin",
          lname: "Admin",
          Username: "Admin",
          Email: "admin@gmail.com",
          password: "$2a$10$93obybBMKt9XWaiXZ7GmJeXpcuyeVgWcLK7CRoUEZxCXGwRYlu70O",
          Role: "Admin"
        },{
          fname: "User",
          lname: "User",
          Username: "User",
          Email: "user@gmail.com",
          password: "$2a$10$Yv2T0rLxvbWxHSDPLHBWduIvQlEte8lhgvFInKP9W8TtcpOPhHl9O",
          Role: "User"
        }];


        const course = [{
          id_course: "1",
          name: "Data_Structure",
          description: "Guide",
          Teacher: "GAB"
        },{
          id_course: "2",
          name: "HCI",
          description: "Guide",
          Teacher: "KANOM"
        },{
          id_course: "3",
          name: "AWS_DEPLOY_CLOUD",
          description: "Guide",
          Teacher: "NOON"
        },{
          id_course: "4",
          name: "Require",
          description: "Guide",
          Teacher: "9Arm"
        }];

      const videos = [{
    Title: "Overview Course",
    Describe: "About AWS session",
    Tags: "AWS",
    Course: "AWS_DEPLOY_CLOUD",
    EP : "1",
    filePathVideo : "video/2022-12-16 02-13-59.mp4"
  },{
    Title: "Start&Overview",
    Describe: "About AWS seesion",
    Tags: "AWS",
    Course: "AWS_DEPLOY_CLOUD",
    EP : "2",
    filePathVideo : "video/2022-12-16 02-15-38.mp4"
  },{
    Title: "EC2 101",
    Describe: "About EC2",
    Tags: "AWS",
    Course: "AWS_DEPLOY_CLOUD",
    EP : "3",
    filePathVideo : "video/2022-12-16 02-15-48.mp4"
  }];
     


     
      //insert data to collection once only 
      if((await Contact.find()).length === 0){
          await Contact.insertMany(User);
          console.log("Data Inserted");
      }

      if((await contactVideo.find()).length === 0){
          await contactVideo.insertMany(videos);
          console.log("Data Inserted");
      }
      if((await courseContact.find()).length === 0){
          await courseContact.insertMany(course);
          console.log("Data Inserted");
      }

      //  const result = await Employees.insertMany(emp);
      // console.log(result);


  } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
  }



}


module.exports = connectDB;

