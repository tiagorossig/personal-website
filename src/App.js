import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <NavBar />
      <div className="content">
        <Switch>
          <Route path="/my-work" component={Portfolio} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
