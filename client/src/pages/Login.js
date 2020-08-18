import React, { useState } from "react";
import API from "../utils/userAPI";
import { useHistory } from "react-router-dom";
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

const Login = ({ user, setUser }) => {
  const [error, setError] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  });
  const history = useHistory();
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
  const classes = useStyles();

  const handleSubmit = () => {
    API.getUserByEmail({
      ...loginInfo
    })
      .then((res) => {
        if (res?.body) {
          setUser(res.data);
          setError(false);
          return;
        }
        setError(true);
        history.push("/profile");
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <form noValidate autoComplete="off">
          <TextField
            id="standard"
            label="Email"
            defaultValue=""
            onChange={(e) => {
              setLoginInfo({ ...loginInfo, email: e.target.value });
            }}
          />
        </form>
        <form noValidate autoComplete="off">
          {error ? (
            <TextField
              error
              id="standard-error-helper-text"
              label="Password"
              defaultValue=""
              helperText="Incorrect email or password."
              onChange={(e) => {
                setLoginInfo({ ...loginInfo, password: e.target.value });
              }}
            />
          ) : (
            <TextField
              id="standard"
              label="Password"
              defaultValue=""
              onChange={(e) => {
                setLoginInfo({ ...loginInfo, password: e.target.value });
              }}
            />
          )}
        </form>
      </CardContent>
      <br />
      <CardActions className={classes.action}>
        <Button size="medium" onClick={handleSubmit}>
          Login
        </Button>
      </CardActions>
    </Card>
  );
};

export default Login;
