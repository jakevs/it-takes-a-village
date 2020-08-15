const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project3");

const userSeed = [
  {
    name: "Wesley Slifer",
    email: "wesleyslifer@ymail.com",
    password: "password",
  },
  {
    name: "Bob",
    email: "bob@test.com",
    password: "bobly",
  },
];

const postSeed = [
  {
    title: "Test 1",
    content: "Testing post",
    name: "Wesley Slifer",
  },
  {
    title: "Test 2",
    content: "Testing 2nd post",
    name: "Wesley Slifer",
  },
  {
    title: "Test 3",
    content: "Does this post appear where it is supposed to?",
    name: "Wesley Slifer",
  },
  {
    title: "Test 4",
    content: "This post should work too :)",
    name: "Wesley Slifer",
  },
  {
    title: "Test 5",
    content: "This post should work too :):)",
    name: "Wesley Slifer",
  },
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(`Users inserted`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Post.remove({})
  .then(() => db.Post.collection.insertMany(postSeed))
  .then((data) => {
    console.log(`Post inserted`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
