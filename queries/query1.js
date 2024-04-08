import { MongoClient } from 'mongodb';
const client = await MongoClient.connect('mongodb://localhost:27017');
const db = client.db('mockdata');
const collection = db.collection('mockdatas');

//aggregation query

//aggregation query
const result = await collection.aggregate([
    {
        $group: {
            _id: null,
            averageSubmissionYear: { $avg: { $toInt: { $substr: ["$submissionDate", -4, 4] } } }
        }
    }
]).toArray();

console.log(result);


await client.close();