import mongoose, { Schema, type InferSchemaType } from "mongoose";

const SpecSchema = new Schema(
  {
    key: { type: String, required: true, trim: true },
    value: { type: String, required: true, trim: true },
  },
  { _id: false },
);

const ProductSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    unit: { type: String, required: true, trim: true },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    description: { type: String, default: "" },
    images: { type: [String], default: [] },
    specs: { type: [SpecSchema], default: [] },
  },
  { timestamps: true },
);

export type Product = InferSchemaType<typeof ProductSchema> & {
  _id: mongoose.Types.ObjectId;
};

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
