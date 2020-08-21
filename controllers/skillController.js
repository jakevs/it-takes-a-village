const db = require("../models");

module.exports = {
  findAll: async (req, res) => {
    allSkills = await db.Skill.find();
    res.json(allSkills);
  },
  create: async (req, res) => {
    newSkill = await db.Skill.create(req.body);
    res.json(newSkill);
  },
  /*  remove:  (req, res) => {
   }, */
};
