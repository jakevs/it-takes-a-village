import React, { useStyles } from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
// import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";

import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";

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
    <Container justify="center" alignItems="center">
      <Grid justify="center" alignItems="center">
        <Avatar
          src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
          //   className={classes.bigAvatar}
        />
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField
              id="standard-read-only-input"
              label="Username"
              InputProps={{
                readOnly: true
              }}
            />
          </Grid>
          <Divider variant="middle" />
          <TextField
            id="filled-multiline-static"
            label="About Me"
            multiline
            rows={4}
            defaultValue="Ex. (An experienced electrician that was recently let go of work due to COVID-19.)"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
