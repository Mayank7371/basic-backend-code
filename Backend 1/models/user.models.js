import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true, // it means ye field to hona hi chaiye.
      unique: true, // username should be unique
      lowercase: true, //all username should be lowercase
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      //aise define bhi kr skte hai jo bolta hai agar true ni ho to message likh do password is required
      // it means we can give custom messages
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
