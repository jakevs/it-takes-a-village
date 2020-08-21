const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SkillSchema = new Schema({
  skillName: {
    type: String,
    required: "Cannot add empty skill",
  },
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Skill = mongoose.model("Skill", SkillSchema);

module.exports = Skill;
