import React, { useState } from "react";
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Nav from "./components/Nav/Header";
import Footer from "./components/Footer/Footer";
import Post from "./pages/Postpage";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

import { Helmet } from "react-helmet";
import FaviconSvg from "./assets/villageLogo.png";
import FaviconPng from "./assets/villageLogo.png";

function App() {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    zip: "",
    about: "",
    skills: [],
    messages: []
  });

  return (
    <div className="App">
      <Helmet>
        <link rel="icon" type="image/svg+xml" href={FaviconSvg} />
        <link rel="icon" type="image/png" href={FaviconPng} />
        <title>It Takes a Village</title>
        <meta name="author" content="It Takes a Village" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/login">
            <Login user={user} setUser={setUser} />
          </Route>
          {user.email === "" && <Redirect to={"/login"} />}
          <Route exact path="/profile">
            <Profile user={user} setUser={setUser} />
          </Route>
          <Route exact path="/">
            <Post />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
