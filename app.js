const { MongoClient } = require('mongodb');

const URI = 'mongodb+srv://etcclark:S1nPcJiD2StrCTFP@cluster0.qev0ygz.mongodb.net/';
const client = new MongoClient(URI);

async function fetchDb() {
    try {
        await client.connect();
        console.log('Connected to MongoDB successfully');

        const database = client.db('MedLevels');
        const collection = database.collection('entry');

        const catCollection = await collection.find({}).toArray();
        
        console.log(catCollection);
    } catch (err) {
        console.error('Error occurred:', err);
    } finally {
        await client.close();
        console.log('Connection to MongoDB closed');
    }
}

fetchDb()

  
async function saveItem(obj) {
    try {
        await client.connect();
        console.log('Connected to MongoDB successfully');

        const database = client.db('MedLevels');
        const collection = database.collection('entry');

        const result = await collection.insertOne(obj);
        console.log("New item added");
    } catch (err) {
        console.error('Error occurred:', err);
    } finally {
        await client.close();
        console.log('Connection to MongoDB closed');
    }
}


const obj = {
    id: '1',
    location: { lat: 40, lng: -74 },
    name: 'Whiskers',
    type: 'Persian',
    personality: 'Playful',
    indoor: true,
    outdoor: false
};

saveItem(obj);
