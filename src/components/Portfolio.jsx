// rsf
import React from "react";
import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

function Portfolio(props) {
  return (
    <React-Fragment>
      <div class="portfolio">
        {/* Page Heading */}
        <h1 class="my-4">Projects</h1>

        <hr />

        {/* Project Two */}
        <div class="row">
          <div class="col-md-5">
            <a href="/">
              <img
                class="img-fluid rounded mb-3 mb-md-0"
                src="http://placehold.it/700x300"
                alt=""
              />
            </a>
          </div>
          <div class="col-md-5">
            <h3>Project Two</h3>
            <p>Project 2.</p>
            <a class="btn btn-dark" href="/">
              <FontAwesomeIcon icon={faCode} />
              <b> Code</b>
            </a>
          </div>
        </div>

        <hr />

        {/* Project Three */}
        <div class="row">
          <div class="col-md-5">
            <a href="/">
              <img
                class="img-fluid rounded mb-3 mb-md-0"
                src="http://placehold.it/700x300"
                alt=""
              />
            </a>
          </div>
          <div class="col-md-5">
            <h3>Project Three</h3>
            <p>Project 3.</p>
            <a class="btn btn-dark" href="/">
              <FontAwesomeIcon icon={faCode} />
              <b> Code</b>
            </a>
          </div>
        </div>
      </div>
    </React-Fragment>
  );
}

export default Portfolio;
