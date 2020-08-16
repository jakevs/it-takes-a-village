import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Header";
import Footer from "./components/Footer/Footer";
import Post from "./pages/Postpage";
import Profile from "./pages/Profile";
import { Helmet } from "react-helmet";
import FaviconSvg from "./assets/villageLogo.png";
import FaviconPng from "./assets/villageLogo.png";

function App() {
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
          <Route exact path="/profile">
            <Profile />
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
