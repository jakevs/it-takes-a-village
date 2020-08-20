import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#2E8B57",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9,
    marginTop: "30",
  },
  title: {
    fontFamily: "'Antic Slab', serif",
    color: "white",
    textAlign: "center",
  },
  chip: {
    color: "#FFFFFF",
    backgroundColor: "#2E8B57",
  },
});

export default function MediaCard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Container maxWidth="md">
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              className={classes.title}
              variant="h5"
              component="h2"
            >
              My Skills
            </Typography>
            <Typography variant="body2" className={classes.title} component="p">
              What skills can I offer to my community during this time of
              crisis? While many people are stuck at home, or out of work, we
              still have many skills that we can contribute to our community.
              Here you can add skills so other members of the community will
              know what you can do to help!
            </Typography>
          </CardContent>
          <CardMedia
            className={classes.media}
            image="https://www.impact.upenn.edu/wp-content/uploads/2020/04/covid-graphic_640x400_acf_cropped.png"
            title="Covid Help"
          />
        </CardActionArea>
        <CardActions>
          <Button className={classes.title} onClick={handleClickOpen}>
            Add Skill
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">
              Add Skills to your Profile!
            </DialogTitle>
            <DialogContent>
              <DialogContentText>Add your skills here</DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Skill"
                type="email"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={(handleClose, handleSubmit)} color="primary">
                Add{" "}
              </Button>
            </DialogActions>
          </Dialog>
          <div>
            <Chip className={classes.chip} label="Landscaping" />
            <Chip className={classes.chip} label="Electronics" />
            <Chip className={classes.chip} label="Plumbing" />
            <Chip className={classes.chip} label="Coding" />
          </div>
        </CardActions>
      </Card>
    </Container>
  );
}
