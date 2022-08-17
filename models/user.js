const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  admin: {
    type: Boolean,
    default: false,
  },
  registerDate: {
    type: "date",
    default: Date.now,
  },
});

module.exports = mongoose.model("users", usersSchema);
