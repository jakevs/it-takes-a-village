import React, { useState, useEffect, useRef } from "react";
import API from "../utils/postAPI";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  postCard: {
    overflow: "hidden",
    padding: theme.spacing(0, 3),
    backgroundColor: "#2E8B57",
    marginBottom: 30,
    marginLeft: 30,
    width: 275,
    height: 250,
    color: "white",
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  form: {
    //float: "right",
    justifyContent: "center",
    marginTop: 75,
  },
  postInput: {
    width: 300,
    marginTop: 20,
  },
  postTitle: {
    color: "white",
  },
  flexdiv: {
    display: "flex",
    flexWrap: "wrap",
  },
  submitBtn: {
    marginTop: 10,
    backgroundColor: "#2E8B57",
    "&:hover": {
      backgroundColor: "#349E63",
    },
  },
}));

function Posts() {
  // Setting our component's initial state
  const [posts, setPosts] = useState([]);
  const [formObject, setFormObject] = useState({});
  let titleInput = useRef(null);
  let contentInput = useRef(null);
  useEffect(() => {
    loadPosts();
  }, []);

  function loadPosts() {
    API.getPosts()
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    API.savePost({
      title: formObject.title,
      content: formObject.content,
    })
      .then((res) => loadPosts())
      .then(
        setTimeout(() => {
          titleInput.current.value = "";
          contentInput.current.value = "";
        }, 100)
      )
      .catch((err) => console.log(err));
  }

  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={9} sm={9}>
        <h1>Recent Posts</h1>
        {posts.length ? (
          <div className={classes.flexdiv}>
            {posts.map((post) => {
              return (
                <Paper className={classes.postCard}>
                  <ListItem key={post._id}>
                    <Link
                      href={"/post/" + post._id}
                      className={classes.postTitle}
                      target="_blank"
                    >
                      <strong>
                        {post.title} : {post.name}
                      </strong>
                    </Link>
                    <Button onClick={() => { }} />
                  </ListItem>
                  <hr />
                  <Typography className={classes.postContent}>
                    {post.content}
                  </Typography>
                </Paper>
              );
            })}
          </div>
        ) : (
            <h3>No Results to Display</h3>
          )}
      </Grid>
      <Grid item xs={3} sm={3}>
        <form noValidate autoComplete="off" className={classes.form}>
          <div>
            <TextField
              required
              onChange={handleInputChange}
              placeholder="Post subject"
              name="title"
              inputRef={titleInput}
            />
          </div>
          <div>
            <TextField
              label="Description"
              placeholder="Tell us what you need"
              multiline
              rows={4}
              variant="outlined"
              name="content"
              onChange={handleInputChange}
              className={classes.postInput}
              inputRef={contentInput}
            />
          </div>
          <Button
            onClick={handleFormSubmit}
            variant="contained"
            color="primary"
            className={classes.submitBtn}
          >
            Post
          </Button>
        </form>
      </Grid>
    </Grid>
  );
}

export default Posts;
