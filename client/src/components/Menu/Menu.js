import React, { useStyles } from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
// import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToApp from "@material-ui/icons/ExitToApp";
import Container from "@material-ui/core/Container";

// const useStyles = makeStyles({
//   drawer: {
//     maxWidth: 345
//   },
//   //   bigAvatar: {
//   //     img: ""
//   //   },
//   drawerPaper: {
//     height: 140
//   }
// });

export default function Menu() {
  //   const classes = useStyles();

  return (
    <Container
      justify="center"
      alignItems="center"
      //   open={true}
      //   variant="permanent"
      //   anchor="left"
      //   className={classes.drawer}
      //   classes={{
      //     paper: classes.drawerPaper
      //   }}
    >
      <Grid justify="center" alignItems="center">
        <Avatar
          src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
          //   className={classes.bigAvatar}
        />
      </Grid>
      <List>
        {["Profile", "Sign Out"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <AccountCircle /> : <ExitToApp />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
