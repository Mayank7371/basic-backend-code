import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, 
    unique: true, // username should be unique
    lowercase: true, //all username should be lowercase
  },

export const User = mongoose.model("User", userSchema);
