const mongoose = require('mongoose');

const contactVideoSchema = new mongoose.Schema({
    Title: String,
    Describe: String,
    Tags: String,
    Course: String,
    EP: String,
    filePathVideo: String
});

module.exports = mongoose.model('videos', contactVideoSchema);
// module.exports = contactVideoSchema;
