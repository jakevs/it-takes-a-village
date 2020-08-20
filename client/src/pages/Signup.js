import React, { useState, useRef } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import API from "../utils/userAPI";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "#2E8B57",
        "&:hover": {
            backgroundColor: "#349E63",
        },
    },
}));

export default function Signup() {
    const classes = useStyles();

    const [user, setUser] = useState([]);
    const [formObject, setFormObject] = useState({});
    let firstInput = useRef(null);
    let lastInput = useRef(null);
    let emailInput = useRef(null);
    let passwordInput = useRef(null);
    let zipInput = useRef(null);

    function handleSubmit(e) {
        e.preventDefault()
        API.saveUser({
            firstName: formObject.firstName,
            lastName: formObject.lastName,
            email: formObject.email,
            password: formObject.password,
            zip: formObject.zip,
        })
            .then(
                setTimeout(() => {
                    firstInput.current.value = "";
                    lastInput.current.value = "";
                    emailInput.current.value = "";
                    passwordInput.current.value = "";
                    zipInput.current.value = "";
                }, 100)
            )
            .then(console.log("user added"))
            .catch((err) => console.log(err));
    }

    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormObject({ ...formObject, [name]: value });
    }


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
        </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange={handleInputChange}
                                inputRef={firstInput}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                onChange={handleInputChange}
                                inputRef={lastInput}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={handleInputChange}
                                inputRef={emailInput}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={handleInputChange}
                                inputRef={passwordInput}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="zip"
                                name="zip"
                                variant="outlined"
                                required
                                fullWidth
                                id="zip"
                                label="Zip-Code"
                                onChange={handleInputChange}
                                inputRef={zipInput}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSubmit}
                    >
                        Sign Up
          </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="./Login.js" variant="body2">
                                Already have an account? Log in
              </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}