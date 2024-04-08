import { MongoClient } from 'mongodb';
const client = await MongoClient.connect('mongodb://localhost:27017');
const db = client.db('mockdata');
const collection = db.collection('mockdatas');


const queryOR = await collection.find({
    $or: [
        { "bugAssignment.developer.developerName": "Karlens" },
        { "bugAssignment.developer.developerName": "Vlad" },
    ]
}).toArray();

console.log("Search using $or:");
console.log(queryOR);


// search using $and
const queryAND = await collection.find({
    $and: [
        { "bugAssignment.developer.developerName": "Karlens" },
        { "bugAssignment.developer.developerName": "Vlad" },
    ]
}).toArray();

console.log("Search using $and:");
console.log(queryAND);


await client.close();