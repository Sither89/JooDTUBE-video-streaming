const {MongoClient} = require('mongodb');
var url = "mongodb://localhost:27017/JoodTubeDB";
const client = new MongoClient(url);

// mongoose.connect(url, { useNewUrlParser: true });
// var connection = mongoose.connection;
// connection.on('error', console.error.bind(console, 'CONNECTION ERROR'));
// connection.once('open', async function () {
//   var { Contact } = require('./models/User');
//   var { contractVideo } = require('./models/Video');
//   var { courseContact } = require('./models/Course');
//   console.log('Connected')

//   const Admin = new Contact({
//     fname: "Admin",
//     lname: "Admin",
//     Username: "Admin",
//     Email: "admin@gmail.com",
//     password: "$2a$10$93obybBMKt9XWaiXZ7GmJeXpcuyeVgWcLK7CRoUEZxCXGwRYlu70O",
//     Role: "Admin"
//   });

//   Admin.save(function (err , admin){
//     if (err) return console.error(err);
//     console.log("Save admin to database")
//   })

//   const User = new Contact({
//     fname: "User",
//     lname: "User",
//     Username: "User",
//     Email: "user@gmail.com",
//     password: "$2a$10$Yv2T0rLxvbWxHSDPLHBWduIvQlEte8lhgvFInKP9W8TtcpOPhHl9O",
//     Role: "User"
//   });

//   User.save(function (err , user){
//     if (err) return console.error(err);
//     console.log("Save User to database")
//   })

//   // const course = [{
//   //   id_course: "1",
//   //   name: "Data_Structure",
//   //   description: "Guide",
//   //   Teacher: "GAB",
//   // }, {
//   //   id_course: "2",
//   //   name: "HCI",
//   //   description: "Guide",
//   //   Teacher: "KANOM",
//   // }, {
//   //   id_course: "3",
//   //   name: "AWS_DEPOLY&CLOUD",
//   //   description: "Guide",
//   //   Teacher: "NOON",
//   // }, {
//   //   id_course: "4",
//   //   name: "Require",
//   //   description: "Guide",
//   //   Teacher: "9Arm",
//   // }];





//   // const videos = [{
//   //   Title: "Overview Course",
//   //   Describe: "About AWS session",
//   //   Tags: "AWS",
//   //   Course: "AWS_DEPOLY&CLOUD",
//   //   EP: "1",
//   //   filePathVideo: "videos\ pexels-cottonbro-5532774.mp4"
//   // }, {
//   //   Title: "Start&Overview",
//   //   Describe: "About AWS seesion",
//   //   Tags: "AWS",
//   //   Course: "AWS_DEPOLY&CLOUD",
//   //   EP: "2",
//   //   filePathVideo: "videos\ production ID_4114797.mp4"
//   // }, {
//   //   Title: "EC2 101",
//   //   Describe: "About EC2",
//   //   Tags: "AWS",
//   //   Course: "AWS_DEPOLY&CLOUD",
//   //   EP: "3",
//   //   filePathVideo: "videos\ production ID_4124024.mp4"
//   // }];

//   // dbo.collection("customers").insertOne(Admin, function (err, res) {
//   //   if (err) throw err;
//   // });
//   // dbo.collection("customers").insertOne(User, function (err, res) {
//   //   if (err) throw err;
//   // });
//   // dbo.collection("courses").insertMany(course, function (err, res) {
//   //   if (err) throw err;
//   //   db.close();
//   // });
//   // dbo.collection("videos").insertMany(videos, function (err, res) {
//   //   if (err) throw err;
//   //   db.close();
//   // });

//   console.log("setup database success!");
// });

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
  }, {
    id_course: "2",
    name: "HCI",
    description: "Guide",
    Teacher: "KANOM",
  }, {
    id_course: "3",
    name: "AWS_DEPOLY&CLOUD",
    description: "Guide",
    Teacher: "NOON",
  }, {
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
    EP: "1",
    filePathVideo: "videos\ pexels-cottonbro-5532774.mp4"
  }, {
    Title: "Start&Overview",
    Describe: "About AWS seesion",
    Tags: "AWS",
    Course: "AWS_DEPOLY&CLOUD",
    EP: "2",
    filePathVideo: "videos\ production ID_4114797.mp4"
  }, {
    Title: "EC2 101",
    Describe: "About EC2",
    Tags: "AWS",
    Course: "AWS_DEPOLY&CLOUD",
    EP: "3",
    filePathVideo: "videos\ production ID_4124024.mp4"
  }];

  dbo.collection("customers").insertOne(Admin, function (err, res) {
    if (err) throw err;
  });
  dbo.collection("customers").insertOne(User, function (err, res) {
    if (err) throw err;
  });
  dbo.collection("courses").insertMany(course, function (err, res) {
    if (err) throw err;
    db.close();
  });
  dbo.collection("videos").insertMany(videos, function (err, res) {
    if (err) throw err;
    db.close();
  });

  console.log("setup database success!");
});
