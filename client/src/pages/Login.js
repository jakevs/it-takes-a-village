import React, { useState } from "react";
import API from "../utils/userAPI";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";

const Login = ({ setUser }) => {
  const [error, setError] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const useStyles = makeStyles((theme) => ({
    root: {
      paddingRight: 0,
      paddingLeft: 0,
      paddingTop: 25,
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    action: {
      justifyContent: "center",
    },
  }));
  const classes = useStyles();
  const sessionUser = sessionStorage.getItem("user");
  console.log(sessionUser);

  //   if (sessionUser.email) {
  //     history.push("/profile");
  //   }

  const handleSubmit = () => {
    API.getUserByEmail({
      ...loginInfo,
    })
      .then((res) => {
        if (res?.data) {
          setUser(res.data);
          setError(false);
          sessionStorage.setItem("user", {
            _id: res.data._id,
            email: res.data.email,
          });
          history.push("/profile");
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {});
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
