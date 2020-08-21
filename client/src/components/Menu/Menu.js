import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";


const useStyles = makeStyles({
  root: {
    backgroundColor: "#2E8B57",
  },

  bigAvatar: {
    height: 100,
    width: 100,
    marginRight: 10,
  },
  aboutMe: {
    color: "white",
  },
});

export default function Menu() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Card className={classes.root}>
        <CardContent>
          <Avatar
            src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
            className={classes.bigAvatar}
            alt="Profile avatar"
          />
        </CardContent>
        <CardContent>
          <AccountCircle />
          <TextField
            label="About Me"
            multiline
            rows={4}
            className={classes.aboutMe}
            placeholder="Ex. (An experienced electrician that was recently let go of work due to COVID-19.)"
          />
        </CardContent>
      </Card>
    </Container>
  );
}
