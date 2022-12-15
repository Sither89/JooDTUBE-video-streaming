const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    id_course: String,
    name: String,
    description: String,
    Teacher: String
});

// module.exports.courseContact = mongoose.model('courses', courseSchema);
// module.exports = courseSchema;
module.exports = mongoose.model('courses', courseSchema);