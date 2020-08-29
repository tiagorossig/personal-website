import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import NotFound from "./components/NotFound";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="page">
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition timeout={450} classNames="fade" key={location.key}>
                <Switch location={location}>
                  <Route path="/about-me" component={AboutMe} />
                  <Route path="/not-found" component={NotFound} />
                  <Route path="/" exact component={Home} />
                  <Redirect to="/not-found" />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
