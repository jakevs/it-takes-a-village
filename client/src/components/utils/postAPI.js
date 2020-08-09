import axios from "axios";

export default {
    // Gets all posts
    gePost: function () {
        return axios.get("/api/post");
    },
    // Gets the post with the given id
    getPost: function (id) {
        return axios.get("/api/post/" + id);
    },
    // Deletes the post with the given id
    deletePost: function (id) {
        return axios.delete("/api/post/" + id);
    },
    // Saves a post to the database
    savePost: function (postData) {
        return axios.post("/api/post", postData);
    }
};