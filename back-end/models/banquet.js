const mongoose = require("mongoose");

const banquetSchema = new mongoose.Schema({
  banquet_name: {
    type: String,
    trim: true,
    required: [true, "Please provide name"],
  },
  banquet_description: {
    type: String,
    trim: true,
    required: [true, "Please provide email"],
  },
  image_location: {
    type: String,
    trim: true,
    required: [true, "Please provide number"],
  },
});

module.exports = mongoose.model("banquet", banquetSchema);
