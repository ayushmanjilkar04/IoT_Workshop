const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const response = await mongoose.connect(process.env.db_url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error Connecting DB: ", error);
  }
};

module.exports = connectDB;
