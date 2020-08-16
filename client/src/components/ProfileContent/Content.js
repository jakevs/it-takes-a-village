import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.impact.upenn.edu/wp-content/uploads/2020/04/covid-graphic_640x400_acf_cropped.png"
          title="Covid Help"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            My Skills
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            What skills can I offer to my community during this time of crisis?
            While many people are stuck at home, or out of work, people still
            have many skills that they can contribute to their community. Here
            you can add skills so other members of the community will know what
            you can do to help!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add Skill
        </Button>
        <Button size="small" color="primary">
          Dashboard{" "}
        </Button>
      </CardActions>
    </Card>
  );
}
