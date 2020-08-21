const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  /* name: {
    type: String,
    trim: true,
    required: "Username is required.",
  }, */
  title: {
    type: String,
    required: "Post title is required.",
  },
  content: {
    type: String,
    required: "Post must not be empty.",
  },
  /* location: {
    type: String,
    trim: true,
    required: "Location is required.",
  }, */
  /* category: {
    type: String,
    trim: true,
    default: "General",
  }, */
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
