const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
    lowerCase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is not correct!");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age can't have a negative value!");
      }
    },
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
})

//making mongoose query to be used in user router
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({email});
  if(!user){
    throw new Error("Unable to login")
  }
  const isValidPassword = await bcrypt.compare(password, user.password);
  if(!isValidPassword){
    throw new Error("Unable to login")
  }
  return user
}

//Hash the plain text password before saving
userSchema.pre('save', async function(next){
  const user = this;

  if(user.isModified('password')){
    user.password = await bcrypt.hash(user.password, 8);
  }

  next()
})

const User = mongoose.model("User", userSchema);

module.exports = User;
