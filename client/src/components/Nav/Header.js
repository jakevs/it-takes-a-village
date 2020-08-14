import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    backgroundColor: "#2E8B57",
    paddingRight: 0,
    paddingLeft: 0,
    display: "flex",
    justifyContent: "center",
  },
  title: {
    flexGrow: 1,
    border: 0,
    borderRadius: 3,
    fontFamily: "Lemonada",
    color: "white",
    padding: "0 30px",
  },
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton className="image">
            <img src="https://img.icons8.com/ios/50/FFFFFF/neighbour.png" />{" "}
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          ></IconButton>
          <Typography
            className={classes.title}
            variant="h5"
            fontFamily="Lemonada"
            align="center"
            noWrap
          >
            It Takes a... <h4>Village</h4>
          </Typography>
          <Link to="/profile">
            <IconButton aria-label="search" color="inherit">
              <AccountCircle />
            </IconButton>
          </Link>
          <IconButton aria-label="search" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
