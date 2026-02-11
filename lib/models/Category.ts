import mongoose, { Schema, type InferSchemaType } from "mongoose";

const CategorySchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    displayOrder: { type: Number, default: 0 },
    description: { type: String, default: "" },
    imageUrl: { type: String, default: "" },
  },
  { timestamps: true },
);

export type Category = InferSchemaType<typeof CategorySchema> & {
  _id: mongoose.Types.ObjectId;
};

export default mongoose.models.Category ||
  mongoose.model("Category", CategorySchema);
