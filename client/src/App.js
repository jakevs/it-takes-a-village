import React from "react";
import Nav from "./components/Nav/Header";
import Footer from "./components/Footer/Footer";
import Post from "./pages/Postpage";

function App() {
  return (
    <div className="App">
      <Nav />
      <Post />
      <Footer />
    </div>
  );
}

export default App;
