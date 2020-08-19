const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SkillSchema = new Schema({
  name: {
    type: String,
    required: "Cannot add empty skill",
  },
});

const Skill = mongoose.model("Skill", SkillSchema);

module.exports = Skill;
