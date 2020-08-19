import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "sm",
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    margin: theme.spacing(0.5),
    color: "#FFFFFF",
    backgroundColor: "#2E8B57",
  },
  bigAvatar: {
    imageSize: "600 px",
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
    marginTop: 100,
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
  },
}));

export default function Menu() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" justify="center" alignItems="center">
      <Grid justify="center" alignItems="center">
        <Avatar
          src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
          className={classes.bigAvatar}
        />

        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid>
            <div>
              <TextField
                id="filled-multiline-static"
                label="About Me"
                multiline
                rows={4}
                placeholder="Ex. (An experienced electrician that was recently let go of work due to COVID-19.)"
              />
            </div>
          </Grid>
          {/*  <div className={classes.section2}>
            <Typography gutterBottom variant="body1">
              SKILLS
            </Typography>
            <div>
              <Chip className={classes.chip} label="Landscaping" />
              <Chip className={classes.chip} label="Electronics" />
              <Chip className={classes.chip} label="Plumbing" />
              <Chip className={classes.chip} label="Coding" />
            </div>
          </div> */}
        </Grid>
      </Grid>
    </Container>
  );
}
