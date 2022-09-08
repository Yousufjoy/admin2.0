const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: {
    type: String,
    reuire: true,
  },
  name: {
    type: String,
    reuire: true,
  },

  phonenumber: {
    type: String,
    reuire: true,
  },
  email: {
    type: String,
    reuire: true,
  },
  address: {
    type: String,
    reuire: true,
  },
  location: {
    type: String,
    reuire: true,
  },
  bed: {
    type: String,
    reuire: true,
  },
  bath: {
    type: String,
    reuire: true,
  },
  area: {
    type: String,
    reuire: true,
  },
  status: {
    type: String,
    reuire: true,
  },
  price: {
    type: String,
    reuire: true,
  },
  type: {
    type: String,
    reuire: true,
  },
  description: {
    type: String,
    reuire: true,
  },
  approval_status: {
    type: String,
    reuire: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("post", userSchema);
