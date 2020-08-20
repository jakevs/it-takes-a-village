import axios from "axios";

export default {
  getSkills: function () {
    return axios.get("/api/skills");
  },
  addSkill: function (skillData) {
    return axios.post("/api/skill", skillData);
  },
  /* deleteSkill: function () {
    return axios.delete("api/skill" + id);
  }, */
};
