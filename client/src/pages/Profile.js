import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MediaCard from "../components/ProfileContent/Content";
import Menu from "../components/Menu/Menu";

function Profile() {
  const useStyles = makeStyles((theme) => ({
    root: {
      paddingRight: 0,
      paddingLeft: 0,
      paddingTop: 25,
      display: "flex",
      justifyContent: "center",
    },
  }));
  function Skills() {
    // Setting our component's initial state
    const [formObject, setFormObject] = useState({});

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({ ...formObject, [name]: value });
    }
  }
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container position="static" spacing={3}>
        <Grid item xs={5}>
          {" "}
          <Menu />
        </Grid>
        <Grid item xs={7}>
          {" "}
          <MediaCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;
