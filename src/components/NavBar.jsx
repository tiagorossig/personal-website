import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
      <div class="container">
        <a class="navbar-brand" href="/">
          Tiago Grimaldi Rossi
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                Home
                <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/my-work">
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
