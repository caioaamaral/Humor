import mongoose from 'mongoose';

const MONGO_URI = process.env.HUMOR_DATABASE_URI;

export async function connectDB(): Promise<void | number> {
    if (!MONGO_URI) {
        console.error('Error connecting to MongoDB: URI is undefined');
        return -1;
    }

    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');
}
