import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import utils from '../utils/postAPI'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
    },
    paper: {
        maxWidth: 400,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
}));

function Post() {
    // Setting our component's initial state
    const [post, setPost] = useState([])
    const [formObject, setFormObject] = useState({})

    useEffect(() => {
        loadPost()
    }, [])

    function loadPost() {
        API.getPost()
            .then(res =>
                setPost(res.data)
            )
            .catch(err => console.log(err));
    };


    return (
        <Container fluid>
            <Row>
                <Col size="md-6 sm-12">
                    <Jumbotron>
                        <h1>Recent Posts</h1>
                    </Jumbotron>
                    {post.length ? (
                        <List>
                            <Paper className={classes.paper}>
                                <Grid container wrap="nowrap" spacing={2}></Grid>
                                {post.map(post => {
                                    return (
                                        <ListItem key={post._id}>
                                            <a href={"/post/" + post._id}>
                                                <strong>
                                                    {post.title} by {post.author}
                                                </strong>
                                            </a>
                                            <DeleteBtn onClick={() => { }} />
                                        </ListItem>
                                    );
                                })}
                            </Paper>
                        </List>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </Col>
            </Row>
        </Container >
    );
}


export default Posts;

export default function AutoGridNoWrap() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar>{post.username}</Avatar> // username
                    </Grid>
                    <Grid item m>
                        <Typography>{post.title}</Typography> //user post title
                    </Grid>
                    <Grid item s>
                        <Typography>{post.content}</Typography> //user post
                    </Grid>
                    <Grid item xs>
                        <Typography>{post.createdAt}</Typography> //date and time of post
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}