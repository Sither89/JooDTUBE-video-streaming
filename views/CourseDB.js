const mongoose = require("mongoose");
const { MongoClient } = require('mongodb');

async function connectDB() {
    var url = "mongodb://localhost:27017/";
    const client = new MongoClient(url);
    // await client.connect();
    // const Course = await client.db("JoodTubeDB").collection("course").find({}).toArray();

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
main().catch(console.error);