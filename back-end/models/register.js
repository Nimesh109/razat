const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please provide name"],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Please provide email"],
  },
  number: {
    type: Number,
    trim: true,
    required: [true, "Please provide number"],
  },
  password: {
    type: String,
    trim: true,
    minlength: 6,
    required: [true, "Please provide password"],
  },
});

module.exports = mongoose.model("register", registerSchema);
