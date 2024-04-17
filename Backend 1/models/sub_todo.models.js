import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema(
  {
    content: {
      type: Syring,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    // now i want to track ki ye field kisne banaya hai
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const SubTodo = mongoose.model("SubTodo", subTodoSchema);

