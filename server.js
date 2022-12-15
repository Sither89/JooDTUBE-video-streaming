const app = require("./app");

const mongoose = require("mongoose");
//Url for localhost
// var url = "mongodb://localhost:27017/JoodTubeDB"; 
//Url for docker
var url = "mongodb://mongo:27017/JoodTubeDB";
mongoose.connect(url, { useNewUrlParser: true });
var connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'CONNECTION ERROR'));
connection.once('open', async function () {
  console.log('Connected')
  await mongoose.connect(url);
});

const port = 9090 ;

app.listen(port, () => {
  console.log("Server is up listening on port: " + port); 
});

