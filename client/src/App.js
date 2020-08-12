import React from "react";
import Nav from "./components/Nav/Header";
import Footer from "./components/Footer/Footer";
import Post from "./components/Posts/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <Post />
      <Footer />
    </div>
  );
}

export default App;
