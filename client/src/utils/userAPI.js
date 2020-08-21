import axios from "axios";

export default {
  // Gets the user with the given email
  getUser: function (email) {
    return axios.get("/api/user/" + email);
  },
  getUserByEmail: function (userData) {
    return axios.put("/api/user", userData);
  },
  // Deletes the user with the given id
  deleteUser: function (id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a user to the database
  saveUser: function (userData) {
    return axios.post("/api/user", userData);
  },
  // Updates a user to the database
  updateUser: function (id, userData) {
    return axios.put("/api/user" + id, userData);
  },
  getSkills: function (userData) {
    return axios.get("/api/user/:email/skill");
  },
  addSkill: function (userData) {
    return axios.post("/api/user/:email/skill");
  },
};
