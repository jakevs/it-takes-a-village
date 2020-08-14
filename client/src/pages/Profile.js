import React, { useState, useEffect } from "react";
import API from "../utils/postAPI";
import { Link } from "react-router-dom";

function Profile() {
  function Skills() {
    // Setting our component's initial state
    const [formObject, setFormObject] = useState({});

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({ ...formObject, [name]: value });
    }
  }
  return <div className="App">test</div>;
}

export default Profile;
