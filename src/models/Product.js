import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    productSKU: { type: String, required: true, unique: true },
    // image: [String],
    image: { type: String, required: true },
    name: { type: String, required: true },
    num1: { type: Number, default: 0 },
    price: { type: Number, default: 0 },
    num2: { type: Number, default: 0 },
    spec: { type: String, required: true },
    date1: { type: Date, required: true },
    date2: { type: Date, required: true },
    building: { type: String, required: true },
    method: { type: String, required: true },
    budget: { type: Number, required: true },
    category: { type: String, required: true },
    group: { type: String, required: true },
    statdata: { type: String, required: true },
    respondent: { type: String, required: true },
    qrcode: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
