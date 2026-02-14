import mongoose from "mongoose";

export default async function dbConnect() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not defined");
  }

  return mongoose.connect(uri, {
    bufferCommands: false,
    serverSelectionTimeoutMS: 5000,
  });
}
