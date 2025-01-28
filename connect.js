import mongoose from "mongoose";
import "dotenv/config";

const connectMongoDB = async () => {
  return mongoose.connect(process.env.MONGODB_URI);
};

export default connectMongoDB;