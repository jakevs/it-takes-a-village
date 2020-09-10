import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import API from "../../utils/userAPI";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#2E8B57"
  },

  bigAvatar: {
    height: 100,
    width: 100,
    marginRight: 10
  },
  aboutMe: {
    color: "white",
    display: "flex",
    flexWrap: "wrap"
  },
  button: {
    color: "white",
    paddingTop: 10
  }
});

export default function Menu() {
  const classes = useStyles();
  const [about, setAbout] = useState([]);
  const [formObject, setFormObject] = useState({});

  useEffect(() => {
    loadAbout();
  }, []);

  const loadAbout = () => {
    API.getUser()
      .then((res) => setAbout(res.data))
      .catch((err) => console.log(err));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormObject({ ...formObject, [name]: value });
  };

  const handleSubmit = () => {
    // API.updateUser({
    //   about: formObject.about,
    // }).then((res) => {
    //   console.log(about);
    //   loadAbout();
    // });
  };

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
          {/* <AccountCircle /> */}
          <TextField
            label="About Me"
            labelColor="white"
            multiline
            rows={4}
            className={classes.aboutMe}
            name="about"
            placeholder="Ex. (An experienced electrician that was recently let go of work due to COVID-19.)"
            color="white"
            onChange={handleInputChange}
          />
          <Button onClick={handleSubmit} className={classes.button}>
            Update
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}
