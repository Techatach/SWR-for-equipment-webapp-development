import mongoose from "mongoose";

export default async function mongodbConnect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await mongoose.connection.syncIndexes();
    console.log("Database Connected");
  } catch (error) {
    console.error(error.message);
  }
}
