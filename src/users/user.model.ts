import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

export interface User extends mongoose.Document {
    name: string;
    email: string;
    password: string;
}