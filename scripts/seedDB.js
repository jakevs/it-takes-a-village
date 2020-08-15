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
    title: "Test needs",
    content: "Testing post",
    name: "Wesley Slifer",
  },
  {
    title: "Test 2",
    content: "Testing 2nd post",
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
