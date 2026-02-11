import mongoose, { Schema, type InferSchemaType } from "mongoose";

const LeadSchema = new Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, default: "", trim: true },
    phone: { type: String, required: true, trim: true },
    company: { type: String, default: "", trim: true },
    product: { type: String, default: "", trim: true },
    quantity: { type: String, default: "", trim: true },
    message: { type: String, default: "", trim: true },
    source: { type: String, default: "", trim: true },
    pageUrl: { type: String, default: "", trim: true },
  },
  { timestamps: true },
);

export type Lead = InferSchemaType<typeof LeadSchema> & {
  _id: mongoose.Types.ObjectId;
};

export default mongoose.models.Lead || mongoose.model("Lead", LeadSchema);
