import { MongoClient } from 'mongodb';
const client = await MongoClient.connect('mongodb://localhost:27017');
const db = client.db('mockdata');
const collection = db.collection('mockdatas');

const result = await collection.find({
    "submissionDate": { $gt: "3/1/2023" },
    "bugAssignment.developer.developerName": "Antonia"
}).toArray();

console.log('Documents submitted after March 1, 2023, and assigned to Antonia:', result);

await client.close();