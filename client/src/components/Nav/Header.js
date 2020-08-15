import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  toolbar: {
    backgroundColor: "#65C295",
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
    padding: "0 30px",
  },
  name: {
    fontSize: "90px",
    marginTop: "0"
  },
  h6: {
    marginBottom: "0"
  }
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Button size="large" color="inherit" to="/" component={Link}>
            <img src="https://img.icons8.com/ios/50/FFFFFF/neighbour.png" />{" "}
          </Button>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          ></IconButton>
          <Typography
            className={classes.title}
            variant="h4"
            align="center"
            noWrap
          >
            <h6 className={classes.h6}>It Takes a...</h6> <h1 className={classes.name}>Village</h1>
          </Typography>
          <Button color="inherit" to="/profile" component={Link}>
            <AccountCircle />
          </Button>

          <IconButton aria-label="search" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
