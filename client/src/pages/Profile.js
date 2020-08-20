import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MediaCard from "../components/ProfileContent/Content";
import Menu from "../components/Menu/Menu";
import API from "../utils/";

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
