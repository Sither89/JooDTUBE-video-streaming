const bcrypt = require('bcryptjs');
const Contact = require('../models/User')
var assert = require('assert')

module.exports = async (req, res) => {
  var val = 0;
  Contact.find({}, function (err, resDB) {
    assert.equal(err, null);
    // console.log(resDB);
    const item = resDB;
    const salt = 10;
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
      res.render("login", { incorrect: "Email or password is incorrect" });
    }
  });
}