const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;

async function getClient() {
    let client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    await client.connect();

    return client;
}

export async function logRequest(req) {
    const client = await getClient();

    const db = client.db("stuy_schedule_db");
    const collection = db.collection("logs");

    const timestamp = new Date().toISOString();
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const method = req.method;
    const endpoint = req.url;
    const userAgent = req.headers['user-agent'];
    const referer = req.headers['referer'];
    

    const logData = {
        timestamp,
        ip,
        method,
        endpoint,
        userAgent,
        referer,
    }

    await collection.insertOne(logData);

    await client.close();
}