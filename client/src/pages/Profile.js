import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
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
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
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
          <Paper className={classes.paper}>
            {" "}
            <Menu />
          </Paper>
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
