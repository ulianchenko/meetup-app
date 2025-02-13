import { MongoClient } from 'mongodb';

async function handler (req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect("mongodb+srv://ulianchenko:a1b2c3d4e5@cluster0.nzybwy4.mongodb.net/dbMeetups?retryWrites=true&w=majority");

    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data);

    client.close();

    res.status(201).json({message: 'Meetup inserted!'});

    return;
  }
}

export default handler;
