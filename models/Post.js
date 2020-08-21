const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
