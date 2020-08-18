const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is required."
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: "Email is required."
  },
  about: {
    type: String,
    trim: true
  },
  zip: {
    type: String,
    trim: true,
    required: "Zip is required."
  },
  password: {
    type: String,
    trim: true,
    required: "Password is required."
  },
  skills: [
    {
      type: String,
      trim: true
    }
  ],
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "Message"
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
