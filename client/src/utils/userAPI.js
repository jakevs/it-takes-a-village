import axios from "axios";

export default {
  // Gets the user with the given id
  getUser: function (id) {
    return axios.get("/api/user/" + id);
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
  }
  // // Updates a user in the database
  // updateUser: function (userData) {
  //   return axios.put("/api/user" + userData);
  // }
};
