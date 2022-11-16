const mongoose = require("mongoose");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const client = new MongoClient(url);
await client.connect();
const Course = await client.db("JoodTubeDB").collection("course").find({}).toArray();
// console.log(Course)

function showCourse() {
    alert("Page is loaded");
    var resultBox = document.getElementById("demo");
    if (textA) {  // <= you can put your condition here
        resultBox.innerHTML = textA;
    } else {
        resultBox.innerHTML = textB;
    }
    // OR you can use ternary operator
    // resultBox.innerHTML =  (textA) ? textA : textB;
}