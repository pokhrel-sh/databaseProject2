import { MongoClient } from 'mongodb';
const client = await MongoClient.connect('mongodb://localhost:27017');
const db = client.db('mockdata');
const collection = db.collection('mockdatas');