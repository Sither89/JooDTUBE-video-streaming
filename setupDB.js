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
    Email: "admin@gmail.com",
    password: "$2a$10$93obybBMKt9XWaiXZ7GmJeXpcuyeVgWcLK7CRoUEZxCXGwRYlu70O",
    Role: "Admin"
  };

  const User = {
    fname: "User",
    lname: "User",
    Username: "User",
    Email: "user@gmail.com",
    password: "$2a$10$Yv2T0rLxvbWxHSDPLHBWduIvQlEte8lhgvFInKP9W8TtcpOPhHl9O",
    Role: "User"
  };

   const course = [{
    id_course: "1",
    name: "Data_Structure",
    description: "Guide",
    Teacher: "GAB",
  },{
    id_course: "2",
    name: "HCI",
    description: "Guide",
    Teacher: "KANOM",
  },{
    id_course: "3",
    name: "AWS_DEPOLY&CLOUD",
    description: "Guide",
    Teacher: "NOON",
  },{
    id_course: "4",
    name: "Require",
    description: "Guide",
    Teacher: "9Arm",
  }];

  



  const videos = [{
    Title: "Overview Course",
    Describe: "About AWS session",
    Tags: "AWS",
    Course: "AWS_DEPOLY&CLOUD",
    EP : "1",
    filePathVideo : "videos\ pexels-cottonbro-5532774.mp4"
  },{
    Title: "Start&Overview",
    Describe: "About AWS seesion",
    Tags: "AWS",
    Course: "AWS_DEPOLY&CLOUD",
    EP : "2",
    filePathVideo : "videos\ production ID_4114797.mp4"
  },{
    Title: "EC2 101",
    Describe: "About EC2",
    Tags: "AWS",
    Course: "AWS_DEPOLY&CLOUD",
    EP : "3",
    filePathVideo : "videos\ production ID_4124024.mp4"
  }];

  dbo.collection("customers").insertOne(Admin, function (err, res) {
    if (err) throw err;
  });
  dbo.collection("customers").insertOne(User, function (err, res) {
    if (err) throw err;
  });
  dbo.collection("course").insertMany(course, function (err, res) {
    if (err) throw err;
    db.close();
  });
  dbo.collection("videos").insertMany(videos, function (err, res) {
    if (err) throw err;
    db.close();
  });

  console.log("setup database success!");
});