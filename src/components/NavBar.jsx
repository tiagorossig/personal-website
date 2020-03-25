import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function Home(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          Tiago Grimaldi Rossi
        </a>
        {/* Toggler button */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="#navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/my-work">
                My Work
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Home;
