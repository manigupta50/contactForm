import mongoose from "mongoose";

const baseUrl = process.env.MONGODB || '0.0.0.0:27017';

export const connectUsingMongoose = async () => {
    try {
        await mongoose.connect(`mongodb://${baseUrl}/contactForm`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("MongoDB connected using mongoose");
    } catch (err) {
        console.log("Error connecting mongoDB");
    }
}