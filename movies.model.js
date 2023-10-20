const mongoose = require("mongoose");
const demoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required!"],
    minlength: [5, "Please provide valid Name"],
  },
  location: {
    type: String,
    required: [true, "Location is required!"],
  },
  email: {
    type: String,
    required: [true, "Email is required!"],
    minlength: [8, "Please provide valid email"],
  },
  number: {
    type: Number,
    required: [true, "Number is required!"],
  },
  message: {
    type: String,
  },
  date: {
    type: String
  }
});

const model = mongoose.model("contact", demoSchema);

module.exports = model;
