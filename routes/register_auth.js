const bcrypt = require('bcryptjs');
const Contact = require('../models/User')

module.exports = async (req, res) => {
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
            res.redirect("/login");
        }
    });
}