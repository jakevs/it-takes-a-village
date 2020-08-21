import React from "react";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import BackspaceIcon from "@material-ui/icons/Backspace";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  toolbar: {
    backgroundColor: "#2E8B57",
    paddingRight: 0,
    paddingLeft: 0,
    display: "flex",
    justifyContent: "center"
  },
  title: {
    flexGrow: 1,
    border: 0,
    borderRadius: 3,
    fontFamily: "'Playfair Display', serif",
    color: "white",
    padding: "0 30px"
  },
  name: {
    fontSize: "80px",
    margin: "0"
  },
  h6: {
    margin: "0"
  }
}));

export default function Nav() {
  const classes = useStyles();

  const history = useHistory();

  const logout = () => {
    sessionStorage.clear();
    history.push("/login");
  };

  return (
    <Grid container>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <Button size="large" color="inherit" to="/" component={Link}>
              <img
                src="https://img.icons8.com/ios/50/FFFFFF/neighbour.png"
                alt="Neighbour Logo"
              />{" "}
            </Button>
            <IconButton></IconButton>
            <Typography
              className={classes.title}
              variant="h4"
              align="center"
              noWrap
            >
              <h6 className={classes.h6}>It Takes a...</h6>{" "}
              <h1 className={classes.name}>Village</h1>
            </Typography>
            <Button color="inherit" to="/profile" component={Link}>
              <AccountCircle />
            </Button>

            <IconButton color="inherit" onClick={logout}>
              <BackspaceIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    </Grid>
  );
}
