const Contact = require('../models/User')
const contactCourse = require('../models/Course')

module.exports = async (req, res) => {
    let user_query = req.query.user;
    const userDB = await Contact.find();
    const courseDB = await contactCourse.find();
    check = 0
    userDB.forEach(user => {
      if (user._id == user_query) {
        res.render("Upload_video", { user: user_query, success: '', course: courseDB });
        check = 1;
      }
    });
    if (check == 0) {
      res.redirect("/login");
    }
  };
