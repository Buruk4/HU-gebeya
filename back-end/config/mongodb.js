import mongoose from "mongoose";

const connectDb = async () => {
  mongoose.connection.on("connected", () => {
    console.log("DB Conecteed");
  });

  await mongoose.connect(`${process.env.MONGODB_URL}/e-commerce`);
};

export default connectDb;
