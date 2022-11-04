const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/JoodTubeDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});