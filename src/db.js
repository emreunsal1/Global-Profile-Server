import mongoose from "mongoose";

export const connectDB = () => {
  try {
    mongoose.connect(process.env.API_URL);
  } catch (error) {
    console.log("error :>> ", error);
  }
};
