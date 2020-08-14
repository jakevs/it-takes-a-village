import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Header";
import Footer from "./components/Footer/Footer";
import Post from "./pages/Postpage";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Post />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
