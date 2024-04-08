import { MongoClient } from 'mongodb';
const client = await MongoClient.connect('mongodb://localhost:27017');
const db = client.db('mockdata');
const collection = db.collection('mockdatas');

//counting the number of documents where the developer name is Ofilia

const count = await collection.countDocuments({ "bugAssignment.developer.developerName": "Ofilia" });

console.log(count);

client.close();
