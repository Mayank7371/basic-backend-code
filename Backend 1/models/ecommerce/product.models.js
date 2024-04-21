import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    description: {
      required: true,
      type: String,
      //order does not mattter in object only in array
    },
    name: {
      required: true,
      type: String,
    },
    productImage: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      default: 0,
    },
    //now i want mera har ek product ek category ko belong kare.
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.objectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
export const Product = mongoose.model("Product", productSchema);
