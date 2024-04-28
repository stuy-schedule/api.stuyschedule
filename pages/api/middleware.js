import { MongoClient } from "mongodb";

const TIMEOUT = 3000;
const uri = process.env.MONGODB_URI;

async function getClient() {
  if (!uri) {
    throw new Error("MONGODB_URI environment variable is not defined.");
  }

  try {
    const client = new MongoClient(uri);

    const connectionPromise = client.connect();

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("MongoDB connection timed out"));
      }, TIMEOUT);
    });

    await Promise.race([connectionPromise, timeoutPromise]);
    return client;
  } catch (e) {
    console.error("Error getting MongoDB client:", e);
    throw e;
  }
}

export async function logRequest(req) {
  let client;
  try {
    client = await getClient();

    const db = client.db("stuy_schedule_db");
    const collection = db.collection("logs");

    const timestamp = new Date();
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const method = req.method;
    const endpoint = req.url;
    const userAgent = req.headers["user-agent"];
    const referer = req.headers["referer"];

    const logData = {
      timestamp,
      ip,
      method,
      endpoint,
      userAgent,
      referer,
    };

    const insertPromise = collection.insertOne(logData);

    const insertTimeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("MongoDB insert operation timed out"));
      }, TIMEOUT);
    });

    await Promise.race([insertPromise, insertTimeoutPromise]);
  } catch (e) {
    console.error("Error in logRequest:", e);
    throw e;
  } finally {
    if (client) {
      await client.close(); // Close the client if it was opened
    }
  }
}
