import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

import CardContent from "@material-ui/core/CardContent";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import MediaCard from "../components/ProfileContent/Content";
import Menu from "../components/Menu/Menu";

function Login() {
  const useStyles = makeStyles((theme) => ({
    root: {
      paddingRight: 0,
      paddingLeft: 0,
      paddingTop: 25,
      display: "flex",
      alignItems: "center",
      flexDirection: "column"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    },
    action: {
      justifyContent: "center"
    }
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
    <Card className={classes.root}>
      <CardContent>
        <form noValidate autoComplete="off">
          <TextField id="standard" label="Email" defaultValue="" />
        </form>
        <form noValidate autoComplete="off">
          <TextField
            error
            id="standard-error-helper-text"
            label="Password"
            defaultValue=""
            helperText="Incorrect email or password."
          />
        </form>
      </CardContent>
      <br />
      <CardActions className={classes.action}>
        <Button size="medium">Login</Button>
      </CardActions>
    </Card>
  );
}

export default Login;
