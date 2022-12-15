const courseContact = require('../models/Course');

module.exports = async function (req, res) {
    const Course = await courseContact.find();
    res.render("Course_guest", { Course: Course });
  }