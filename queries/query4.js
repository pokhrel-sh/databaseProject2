import { MongoClient } from 'mongodb';
const client = await MongoClient.connect('mongodb://localhost:27017');
const db = client.db('mockdata');
const collection = db.collection('mockdatas');


//update the document where the budID is 7 and set it to boolean true
const result = await collection.updateOne(
    { "budID": 7 },
    { $set: { 
        "description": "Updated Description",
        "submissionDate": "Updated Submission Date",
        "dateOpened": "Updated Date Opened"
    } }
);

console.log(result);

await client.close();