var express = require("express");
var app = express();
var http = require('http').createServer(app);
var bodyParser = require("body-parser");

var formidable = require('formidable');
var fs = require('fs');
var { getVideoDurationInSeconds } = require("get-video-duration");
var multer = require("multer");

app.use('/views', express.static('views'));
app.set('views', './views');
app.set("view engine", "ejs");

const session = require('express-session');
const flash = require('connect-flash');

const filePath = "videos/SampleVideo_1280x720_1mb.mp4";


http.listen(9090, function (req, res) {
  console.log("server is start. On http://localhost:9090/");

  app.get("/", function (req, res) {
    res.render("index");
  });

  app.get("/login", function (req, res) {
    res.render("login");
  });

  app.get("/watch_vdo", function (req, res) {
    res.render("Watch_vdo");
  });

  app.get("/upload_vdo", function (req, res) {
    res.render("Upload_video", { success: '' });
  });

  app.get("/register", function (req, res) {
    res.render("Register");
  });


  app.get("/works-in-chrome", (req, res) => {
    res.setHeader("content-type", "video/mp4");

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

  app.use(session({
    secret: 'upload',
    saveUninitialized: true,
    resave: true
  }));

  app.use(flash());

  var storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './videos');
    },
    filename: function (req, file, callback) {
      callback(null, file.originalname);
    }
  });

  var upload = multer({ storage: storage }).single('video');

  app.post('/upload-vdo', function (req, res) {
    upload(req, res, function (err) {
      if (err) {
        console.log(err)
        return res.end("Error uploading file.");
      }
      res.render('Upload_video' , {success:'Uploaded Video Successfully'});
    });
  });

});