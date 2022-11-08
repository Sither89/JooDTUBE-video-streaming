var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("JoodTubeDB");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
   // console.log("Collection created!");
    db.close();
  });

  const Admin = {
    fname: "Admin",
    lname: "Admin",
    Username: "Admin",
    Email: "admin",
    password: "admin12345",
    Role: "Admin"
    };
    
  const User = { 
    fname: "User",
    lname: "User",
    Username: "User",
    Email: "user",
    password: "user12345",
    Role: "User"
    };

  dbo.collection("customers").insertOne(Admin, function(err, res) {
    if (err) throw err;
   // console.log("1 document inserted");
    db.close();
  });
  dbo.collection("customers").insertOne(User, function(err, res) {
    if (err) throw err;
  // console.log("1 document inserted");
    db.close();
  });
});