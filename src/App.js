import React from "react";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Home />
    </React.Fragment>
  );
}

export default App;
