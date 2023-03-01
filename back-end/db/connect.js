//Importing mongoose from package.json.
const mongoose = require("mongoose");

//Connecting to the cloud mongoDB.
const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose.connect(url, {
    useNewUrlParser: true,
  });
};

//Exporting the connectDB function.
module.exports = connectDB;
