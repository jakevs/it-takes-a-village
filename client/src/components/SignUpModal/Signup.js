import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const Signup = ({ setUser }) => {
    const [error, setError] = useState(false);
    const [signupInfo, setSignupInfo] = useState({
        email: "",
        password: ""
    });
    const history = useHistory();
    const useStyles = makeStyles((theme) => ({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));

    function TransitionsModal() {
        const classes = useStyles();
        const sessionUser = sessionStorage.getItem("user");
        console.log(sessionUser);
        const [open, setOpen] = React.useState(false);

        const handleOpen = () => {
            setOpen(true);
        };
        const handleClose = () => {
            setOpen(false);
        };

        const handleSubmit = () => {
            API.getUserByEmail({
                ...signupInfo
            })
                .then((res) => {
                    if (res?.data) {
                        setUser(res.data);
                        setError(false);
                        sessionStorage.setItem("user", {
                            _id: res.data._id,
                            email: res.data.email
                        });
                        history.push("/profile");
                    } else {
                        setError(true);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    setError(true);
                })

        };

        return (
            <div>
                <button type="button" onClick={handleOpen}>
                    react-transition-group
      </button>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className={classes.paper}>
                            <h2 id="transition-modal-title">SignUp</h2>
                            <Grid item xs={3} sm={3}>
                                <form noValidate autoComplete="off" className={classes.form}>
                                    <div>
                                        <TextField
                                            id="standard"
                                            label="Email"
                                            defaultValue=""
                                            onChange={(e) => {
                                                setSignupInfo({ ...signupInfo, email: e.target.value });
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            id="standard"
                                            label="Password"
                                            defaultValue=""
                                            onChange={(e) => {
                                                setSignupInfo({ ...signupInfo, password: e.target.value });
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            id="standard"
                                            label="Zipcode"
                                            defaultValue=""
                                            onChange={(e) => {
                                                setSignupInfo({ ...signupInfo, zipcode: e.target.value });
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            id="standard"
                                            label="Skills"
                                            defaultValue=""
                                            onChange={(e) => {
                                                setSignupInfo({ ...signupInfo, skills: e.target.value });
                                            }}
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

                        </div>
                    </Fade>
                </Modal>
            </div>
        );
    }
}
export default Signup;