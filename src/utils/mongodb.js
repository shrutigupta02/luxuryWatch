import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://20bcs5178:20bcs5178@userinfo.h0h04.mongodb.net/userInfo?retryWrites=true&w=majority&appName=userInfo";
const client = new MongoClient(uri);

export async function connectToDatabase() {
    try {
        await client.connect();
        return client.db("userInfo");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
} 