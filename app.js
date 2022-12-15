const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

// Configurations for "body-parser"
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/views', express.static('views'));
app.set('views', './views');
app.set("view engine", "ejs");
var multer = require("multer");
var flash = require('connect-flash');

const homeRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const login_authRouter = require('./routes/login_auth');
const courseRouter = require('./routes/courses');
const course_guestRouter = require('./routes/courses_guest');
const course_studentRouter = require('./routes/courses_student');
const registerRouter = require('./routes/register');
const register_authRouter = require('./routes/register_auth');
const watch_videoRouter = require('./routes/watch_video');
const upload_vdoRouter = require('./routes/upload_video');
const video_playerRouter = require('./routes/video_playRouter');

const Contact = require('./models/User');
const courseContact = require('./models/Course');
const contactVideo = require('./models/Video');



app.get("/", homeRouter);

app.get("/login", loginRouter);

app.post("/login", login_authRouter);

app.get("/register", registerRouter);

app.get("/course", courseRouter);

app.post("/register", register_authRouter);

app.get("/course_guest" , course_guestRouter);

app.get("/course_student" , course_studentRouter);

app.get("/watch_vdo", watch_videoRouter);

app.get("/works-in-chrome", video_playerRouter);

app.get("/upload_vdo", upload_vdoRouter);

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./video/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype == "video/mp4") {
    cb(null, true);
  } else {
    cb(null, false);
    return cb(new Error('Only .mp4 format allowed!'));
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

app.post('/upload_vdo', upload.single("video"), async (req, res) => {
  console.log(req.body.video);
  try {
    let user_query = req.query.user;
    const userDB = await Contact.find();
    const video = await contactVideo.find();
    const course = await courseContact.find();
    var count = 1;
    var check = 0;
    userDB.forEach(user => {
      if (user._id == user_query) {
        res.render("Upload_video", { user: user_query, success: '', course: course });
        check = 1;
      }
    });
    if (check == 0) {
      res.redirect("/login");
    }
    if (check == 1) {
      video.forEach(video => {
        if (video.Course == req.body.course) {
          count += 1;
        }
      });
      const contact = new contactVideo({
        Title: req.body.title,
        Describe: req.body.describe,
        Tags: req.body.tags,
        Course: req.body.course,
        EP: count.toString(),
        filePathVideo: "video/" + req.file.filename
      });
      contact.save(function (err) {
        if (err) {
          throw err;
        } else {
          res.render('Upload_video', { success: 'Uploaded Video Successfully', course: course, user: user_query });
        }
      });
    }
  } catch (error) {
    res.json({
      status: "Fail",
      error,
    });
  }
});

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
    filename = file.originalname;
  }
});




//Express server
module.exports = app;