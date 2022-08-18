const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },

  registerDate: {
    type: "date",
    default: Date.now,
  },
});

module.exports = mongoose.model("users", usersSchema);
