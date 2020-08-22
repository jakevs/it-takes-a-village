const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: "First name is required.",
  },
  lastName: {
    type: String,
    trim: true,
    required: "Last name is required.",
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: "Email is required.",
  },
  about: {
    type: String,
    trim: true,
  },
  zip: {
    type: String,
    trim: true,
    required: "Zip is required.",
  },
  password: {
    type: String,
    trim: true,
    required: "Password is required.",
  },
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  skills: [{ type: Schema.Types.ObjectId, ref: "Skill" }],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

//UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", UserSchema);

module.exports = User;
