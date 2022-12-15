const Contact = require('../models/User');
const courseContact = require('../models/Course');
var assert = require('assert')

module.exports = async function (req, res) {
    let user_query = req.query.user;
    Contact.find({}, function (err, resDB) {
        assert.equal(err, null);
        // console.log(resDB);
        const userDB = resDB;
        courseContact.find({}, function (err, resDB) {
            assert.equal(err, null);
            // console.log(resDB);
            const Course = resDB;
            var check = 0
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
    });
}