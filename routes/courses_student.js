const Contact = require('../models/User');
const courseContact = require('../models/Course');

module.exports = async function (req, res) {
    let user_query = req.query.user;
    const Course = await courseContact.find();
    const userDB = await Contact.find();
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
  }