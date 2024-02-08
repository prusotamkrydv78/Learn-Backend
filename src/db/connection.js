import mongoose from "mongoose";
const DB_NAME = "watchHere";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `mongodb+srv://learnbackend_pk:1234567890@cluster0.wd9mxod.mongodb.net/${DB_NAME}`
    );
    console.log(
      `\n MongoDB Connected Successfully !! DB HOST : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("ERROR: MONGODB CONNECTION ERROR", error);
    process.exit(1);
  }
};

export default connectDB;
