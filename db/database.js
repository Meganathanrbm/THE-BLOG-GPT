import mongoose from "mongoose";

let isConnect = false;
const uri = process.env.MONGODB_URI;
const options = {
  dbName: "blog",
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

export const  connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnect) {
    console.log("MongoDB is already connected!");
    return;
  }
  try {
    await mongoose.connect(uri, options);
    isConnect = true;
    console.log("Mongodb connected");
  } catch (error) {
    console.log(`unable to connect to database ${error}`);
  }
  mongoose.connect(uri, options);
};
