var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("JoodTubeDB");
  dbo.createCollection("customers", function (err, res) {
    if (err) throw err;
    // console.log("Collection created!");
    db.close();
  });

  const Admin = {
    fname: "Admin",
    lname: "Admin",
    Username: "Admin",
    Email: "admin",
    password: "$2a$10$93obybBMKt9XWaiXZ7GmJeXpcuyeVgWcLK7CRoUEZxCXGwRYlu70O",
    Role: "Admin"
  };

  const User = {
    fname: "User",
    lname: "User",
    Username: "User",
    Email: "user",
    password: "$2a$10$Yv2T0rLxvbWxHSDPLHBWduIvQlEte8lhgvFInKP9W8TtcpOPhHl9O",
    Role: "User"
  };

  const course = {
    id_course: "String",
    name: "AWS_DEPOLY&CLOUD",
    description: "Guide",
    Teacher: "9Arm",
  };

  const videos = {
    Title: "CS360 Clip #1",
    Describe: "About AWS seesion",
    Tags: "AWS",
    Course: "AWS_DEPOLY&CLOUD"
  };


  dbo.collection("customers").insertOne(Admin, function (err, res) {
    if (err) throw err;
    // console.log("1 document inserted");
    db.close();
  });
  dbo.collection("customers").insertOne(User, function (err, res) {
    if (err) throw err;
    // console.log("1 document inserted");
    db.close();
  });
  dbo.collection("course").insertOne(course, function (err, res) {
    if (err) throw err;
    // console.log("1 document inserted");
    db.close();
  });
  dbo.collection("videos").insertOne(videos, function (err, res) {
    if (err) throw err;
    // console.log("1 document inserted");
    db.close();
  });
});