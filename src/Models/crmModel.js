import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstname: {
        type: String,
        required: 'Entrer un prénom'
    },
    lastname: {
        type: String,
        required: 'Entrer un nom'
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})