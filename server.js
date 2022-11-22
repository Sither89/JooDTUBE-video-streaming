var express = require("express");
var app = express();
var http = require('http').createServer(app);


////////////////////////////////////////////
const bp = require('body-parser')
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
require('./db');
const mongoose = require("mongoose");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var bcrypt = require('bcryptjs');
////////////////////////////////////////////



var formidable = require('formidable');
var fs = require('fs');
var { getVideoDurationInSeconds } = require("get-video-duration");
var multer = require("multer");

app.use('/views', express.static('views'));
app.set('views', './views');
app.set("view engine", "ejs");

const session = require('express-session');
const flash = require('connect-flash');
const { Int32 } = require("mongodb");

const filePath = "videos\2022-11-09 00-10-33.mp4";


http.listen(9090, function (req, res) {
  console.log("server is start. On http://localhost:9090/");

  app.get("/", function (req, res) {
    res.render("index");
  });



  const contactSchema = {
    fname: String,
    lname: String,
    Username: String,
    Email: String,
    password: String,
    Role: String
  };



  const Contact = mongoose.model("customers", contactSchema);



  app.get("/login", function (req, res) {
    res.render("login");
  });


  app.post("/login", async function (req, res) {
    //console.log(req.body)
    MongoClient.connect(url, async function (err, db) {
      var val = 0;
      const client = new MongoClient(url);
      await client.connect();
      const item = await Contact.find({})
      const salt = 10;
      const hashpass = bcrypt.hashSync(req.body.password, salt);
      item.forEach(item => {
        check = bcrypt.compareSync(req.body.password, item.password);
        if (req.body.username === item.Email && val === 0) {
          if (check == true) {

            if (item.Role == "Admin") {
              res.redirect('/course?' + "user=" + item._id)
              val = 1;
            }
            if (item.Role == "User") {
              res.redirect('/course_student?' + "user=" + item._id)
              val = 1;
            }
          } else {
            val = 0;
          }
        } else {
          val = 0;
        }
      });
      if (val === 0) {
        res.render("login");
      }
    });
  });


  app.get("/watch_vdo", async function (req, res) {
    const client = new MongoClient(url);
    await client.connect();
    let user_query = req.query.user;
    const userDB = await client.db("JoodTubeDB").collection("customers").find({}).toArray();
    check = 0
    userDB.forEach(user => {
      if (user._id == user_query) {
        if (user.Role == "Admin") {
          res.render("Watch-page", { user: user_query, course: "course" });
          check = 1;
        }
        if (user.Role == "User") {
          res.render("Watch-page", { user: user_query, course: "course_student" });
          check = 1;
        }
      }
    });
    if (check == 0) {
      res.render("login");
    }
  });



  app.get("/register", function (req, res) {
    res.render("Register");
  });


  app.post("/register", async function (req, res) {
    const saltRounds = 10;
    const hashp = bcrypt.hashSync(req.body.password, saltRounds);
    const contact = new Contact({
      fname: req.body.fname,
      lname: req.body.lname,
      Username: req.body.Username,
      Email: req.body.Email,
      password: hashp,
      Role: "User"
    });
    contact.save(function (err) {
      if (err) {
        throw err;
      } else {
        res.render("login");
      }
    });
  });



  app.get("/works-in-chrome", async (req, res) => {
    res.setHeader("content-type", "video/mp4");

    const client = new MongoClient(url);
    await client.connect();
    const video = await client.db("JoodTubeDB").collection("videos").find({}).toArray();

    fs.stat(filePath, (err, stat) => {
      if (err) {
        console.error(`File stat error for ${filePath}.`);
        console.error(err);
        res.sendStatus(500);
        return;
      }

      res.setHeader("content-length", stat.size);

      const fileStream = fs.createReadStream(filePath);
      fileStream.on("error", error => {
        console.log(`Error reading file ${filePath}.`);
        console.log(error);
        res.sendStatus(500);
      });

      fileStream.pipe(res)
    });
  });


  app.get("/upload_vdo", async function (req, res) {
    const client = new MongoClient(url);
    await client.connect();
    let user_query = req.query.user;
    const userDB = await client.db("JoodTubeDB").collection("customers").find({}).toArray();
    const courseDB = await client.db("JoodTubeDB").collection("course").find({}).toArray();
    check = 0
    userDB.forEach(user => {
      if (user._id == user_query) {
        res.render("Upload_video", { user: user_query, success: '' ,course : courseDB}); 
        check = 1;
      }
    });
    if (check == 0) {
      res.redirect("/login");
    }
  });


  const contactVideoSchema = {
    Title: String,
    Describe: String,
    Tags: String,
    Course: String,
    EP: String,
    filePathVideo: String
  };

  const contractVideo = mongoose.model("videos", contactVideoSchema);

  app.post('/upload-vdo', function (req, res) {
    upload(req, res, async function (err) {
      const client = new MongoClient(url);
      await client.connect();
      const userDB = await client.db("JoodTubeDB").collection("customers").find({}).toArray();
      const video = await client.db("JoodTubeDB").collection("videos").find({}).toArray();
      const course = await client.db("JoodTubeDB").collection("course").find({}).toArray();
      var count = 0;
      course.forEach(course => {
        console.log(count);
        video.forEach(video => {
          if (video.course == course.name) { 
            console.log(count);
            count++;
          }
        });
      });

      const contactVideo = new contractVideo({
        Title: req.body.title,
        Describe: req.body.describe,
        Tags: req.body.tags,
        Course: req.body.course,
        EP: count.toString(),
        filePathVideo: req.file.path
      });
      contactVideo.save(function (err) {
        if (err) {
          throw err;
        } else {
          // res.redirect('/upload_vdo?' + 'user=' + userDB._id ,{ success: 'Uploaded Video Successfully' ,course : course});
          res.render('Upload_video', { success: 'Uploaded Video Successfully' ,course : course, user : userDB._id});
        }
      });
    });
  });


  app.use(session({
    secret: 'upload',
    saveUninitialized: true,
    resave: true
  }));

  app.use(flash());

  var storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './videos/');
    },
    fileFilter: (req, file, cb) => {
      if (file.mimetype == "video/mp4") {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error('Only .mp4 format allowed!'));
      }
    },
    filename: function (req, file, callback) {
      callback(null, file.originalname);
    }
  });

  var upload = multer({ storage: storage }).single('video');


  app.get("/course", async function (req, res) {
    const client = new MongoClient(url);
    await client.connect();
    let user_query = req.query.user;
    const Course = await client.db("JoodTubeDB").collection("course").find({}).toArray();
    const userDB = await client.db("JoodTubeDB").collection("customers").find({}).toArray();
    check = 0
    userDB.forEach(user => {
      if (user._id == user_query) {
        if (user.Role == "Admin") {
          res.render("Course", { Course: Course, user: user_query });
          check = 1;
        }
      }
    });
    if (check == 0) {
      res.redirect("/login");
    }
  });

  app.get("/course_student", async function (req, res) {
    const client = new MongoClient(url);
    await client.connect();
    let user_query = req.query.user;
    const Course = await client.db("JoodTubeDB").collection("course").find({}).toArray();
    const userDB = await client.db("JoodTubeDB").collection("customers").find({}).toArray();
    check = 0
    userDB.forEach(user => {
      if (user._id == user_query) {
        res.render("Course_student", { Course: Course, user: user_query });
        check = 1;
      }
    });
    if (check == 0) {
      res.redirect("/login");
    }
  });

  app.get("/course_guest", async function (req, res) {
    const client = new MongoClient(url);
    await client.connect();
    const Course = await client.db("JoodTubeDB").collection("course").find({}).toArray();
    res.render("Course_guest", { Course: Course });
  });



});

