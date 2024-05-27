import mongoose from "mongoose";

export const contactFormSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
        minLength: 1
    },
    lastName: {
        type: String,
        required: true,
        minLength: 1
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    country: {
        type: String,
        minLength: 3
    },
    phone: {
        type: Number,
        min: 10
    },
    about: {
        type: String
    }
});