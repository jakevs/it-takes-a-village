import React, { useState, useEffect } from "react";
import API from "../utils/postAPI";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  form: {
    float: "right",
    marginTop: 20,
    marginRight: 20,
  },
  postText: {
    width: 300,
    marginTop: 20,
  },
}));

function Posts() {
  // Setting our component's initial state
  const [posts, setPosts] = useState([]);
  const [formObject, setFormObject] = useState({});

  useEffect(() => {
    loadPosts();
  }, []);

  function loadPosts() {
    API.getPosts()
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }

  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <h1>Recent Posts</h1>
        {posts.length ? (
          <List>
            <Paper className={classes.root}>
              <Grid container wrap="nowrap" spacing={2}></Grid>
              {posts.map((post) => (
                <ListItem key={post._id}>
                  <a href={"/post/" + post._id}>
                    <strong>
                      {post.title} by {post.name}
                    </strong>
                  </a>
                  <Button onClick={() => {}} />
                </ListItem>
              ))}
            </Paper>
          </List>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </Grid>
      <Grid item xs={12} sm={6}>
        <form noValidate autoComplete="off" className={classes.form}>
          <div>
            <TextField
              required
              id="standard-required"
              placeholder="Post subject"
            />
          </div>
          <div>
            <TextField
              label="Description"
              placeholder="Tell us what you need"
              multiline
              rows={4}
              variant="outlined"
              className={classes.postText}
            />
          </div>
        </form>
      </Grid>
    </Grid>
  );
}

export default Posts;
