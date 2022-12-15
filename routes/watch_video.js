const Contact = require('../models/User')
const contactVideo = require('../models/Video');
var course_name;
module.exports = async (req, res) => {
    let check = 0;
    let user_query = req.query.user;
    course_name = req.query.course;
    var ep = req.query.EP;
    const userDB = await Contact.find();
    const video = await contactVideo.find();

    var video_ep = new Array();
    var video_name;
    let i = 0;
    video.forEach(video => {
      if (video.Course == course_name) {
        video_ep[i] = video;
        i++;
      }
      if (video.EP == ep) {
        video_name = video.Title;
      }
    });

    userDB.forEach(user => {
      if (user._id == user_query) {
        if (user.Role == "Admin") {
          res.render("Watch-page", { user: user_query, course: "course", course_name: course_name, video: video_ep, EP: ep, video_name: video_name, role: "Admin" });
          check = 1;
        }
        if (user.Role == "User") {
          res.render("Watch-page", { user: user_query, course: "course_student", course_name: course_name, video: video_ep, EP: ep, video_name: video_name, role: "User" });
          check = 1;
        }
      }
    });
    if (check == 0) {
      res.render("login");
    }
}

module.exports.course_name = course_name;