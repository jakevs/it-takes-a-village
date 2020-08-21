const db = require("../models");

module.exports = {
  findAll: async (req, res) => {
    let allUsers = await db.User.find();
    res.json(allUsers);
  },
  findByEmail: async (req, res) => {
    foundUser = await db.User.find({ name: req.params.email });
    res.json(foundUser);
  },
  findOne: async (req, res) => {
    console.log(req.body);
    db.User.findOne({ email: req.body.email, password: req.body.password })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  getSkills: async (req, res) => {
    let foundUser = await db.User.find({ name: req.params.email }).populate(
      "skills"
    );
    res.json(foundUser);
  },
  create: async (req, res) => {
    let newUser = await db.User.create(req.body);
    res.json(newUser);
  },
};
