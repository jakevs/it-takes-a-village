import React from "react";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import { FormHelperText } from "@material-ui/core";

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: "absolute",
        width: theme.spacing.unit * 50,
        backgroundColor: "#2E8B57",
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: "none",
    },
});

class SUModal extends React.Component {
    state = {
        error: false,
        helper: "",
    };

    saveUser = event => {
        event.preventDefault();
        if (!this.validEmail(event.target.email.value)) {
            console.log("Invalid Email!");
            return;
        } else if (this.validEmail(event.target.email.value)) {
            let data = {
                email: event.target.email.value.toLowerCase(),
                password: event.target.password.value,
                name: event.target.name.value,
                zip: event.target.zipcode.value,
            };

            fetch("/api/users", {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json"
                },
                redirect: "follow",
                referrer: "no-referrer",
                body: JSON.stringify(data),
            })
                .then(response => {
                    if (response.status === 401) {
                        this.setState({
                            error: true,
                            helper: "A user with this email already exists!",
                        });
                    } else {
                        this.props.saveEmail(data.email);
                        this.props.changeSISU();
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            console.log("ERROR!");
        }
    };

    render() {
        const { classes } = this.props;

        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.props.SUOpen}
                onClose={this.props.SUClose}
            >
                <div style={getModalStyle()} className={classes.paper}>
                    <Typography component="h1" variant="h5" align="center">
                        Create an account with Neighborly
          </Typography>
                    <form className={classes.form} onSubmit={this.saveUser}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input
                                id="email"
                                name="email"
                                autoComplete="email"
                                error={this.state.error}
                                autoFocus
                            />
                            <FormHelperText error={this.state.error}>
                                {this.state.helper}
                            </FormHelperText>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input
                                name="password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="name">Name</InputLabel>
                            <Input name="name" id="name" autoComplete="name" />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="zipcode">Zipcode</InputLabel>
                            <Input name="zipcode" id="zipcode" autoComplete="zipcode" />
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Create account
            </Button>
                    </form>
                </div>
            </Modal>
        );
    }
}

export default withStyles(styles)(SUModal);