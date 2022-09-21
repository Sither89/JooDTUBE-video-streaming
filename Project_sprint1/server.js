var express = require("express");
var app = express();
var http = require("http").createServer(app);



var bodyParser = require("body-parser");
//var bcrypt = require("bcrypt");


var formidable = require('formidable');
var fs = require('fs');
var { getVideoDurationInSeconds } = require("get-video-duration");

var multer = require("multer");

//app.use(express.bodyParser());
//app.use("/view", express.static(__dirname + "/view"));
app.use('/views', express.static('views'));
app.set('views', './views');
app.set("view engine", "ejs");

const filePath = "videos/SampleVideo_1280x720_1mb.mp4";


http.listen(9090, function (req, res) {
  console.log("server is start.");

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
    res.render("Upload_video");
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


  app.get("/upload", function (req, res) {
    res.render("upload");
  });


  app.post("/fileupload", (function (req, res) {
    if (req.url == '/fileupload') {
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {

        var tempFilePath = files.filetoupload.filepath;
        var projectFilePath = __dirname + '/public/videos' +
          files.filetoupload.originalFilename;
        fs.rename(tempFilePath, projectFilePath, function (err) {
          if (err) throw err;
          res.write('File has been successfully uploaded');
          res.end();
        });
      });
    }
    else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(
        '<form action="fileupload" method="post" enctype="multipart/form-data">');
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write('</form>');
      return res.end();
    }
  }));

  app.post("/upload-video", function uploadFiles(req, res) {

    //Create an instance of the form object
    let form = new formidable.IncomingForm();

    //Process the file upload in Node
    form.parse(req, function (error, fields, file) {
      console.log(fields);
      let title = fields.title;
      let description = fields.description;
      let tag = fields.tag;
      let course = fields.course;
      let filepath = file.fileupload.filepath;
      let newpath = 'videos/';
      newpath += file.fileupload.originalFilename;

      //Copy the uploaded file to a custom folder
      fs.rename(filepath, newpath, function () {
        //Send a NodeJS file upload confirmation message
        
        res.write('<script>     function myFunction() {          alert("Hello! I am an alert box!");      } </script>');
        res.end();
      }); 
    });
  });

});