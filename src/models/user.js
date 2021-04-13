const mongoose = require("mongoose");

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  password: {
    type: String,
    minLength: 6,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password should not contain password text");
      }
    },
  },
});

module.exports = User;
