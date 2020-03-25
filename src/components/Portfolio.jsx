// rsf
import React from "react";
import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import projectOne from "../assets/cloudCare.jpg";
import projectTwo from "../assets/degraded.jpg";
import "../App.css";

function Portfolio(props) {
  return (
    <React-Fragment>
      <div className="center">
        <div className="portfolio">
          {/* Page Heading */}
          <h1 className="my-4">Projects</h1>

          <hr />

          {/* Project Two */}
          <div className="row">
            <div className="col-md-5">
              <a href="/">
                <img
                  className="img-fluid rounded mb-3 mb-md-0 project-size"
                  src={projectOne}
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-5">
              <h3>CloudCare</h3>
              <p>Project 1.</p>
              <a className="btn btn-dark disabled" href="/">
                <FontAwesomeIcon icon={faCode} />
                <b> Code</b>
              </a>
            </div>
          </div>

          <hr />

          {/* Project Two */}
          <div className="row">
            <div className="col-md-5">
              <a href="/">
                <img
                  className="img-fluid rounded mb-3 mb-md-0 project-size"
                  src={projectTwo}
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-5">
              <h3>de;graded</h3>
              <p>Project 2.</p>
              <a className="btn btn-dark" href="/">
                <FontAwesomeIcon icon={faCode} />
                <b> Code</b>
              </a>
            </div>
          </div>

          <hr />

          {/* Project Three */}
          <div className="row">
            <div className="col-md-5">
              <a href="/">
                <img
                  className="img-fluid rounded mb-3 mb-md-0 project-size"
                  src="http://placehold.it/350x350"
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-5">
              <h3>Fledgling</h3>
              <p>Project 3.</p>
              <a className="btn btn-dark" href="/">
                <FontAwesomeIcon icon={faCode} />
                <b> Code</b>
              </a>
            </div>
          </div>
        </div>
      </div>
    </React-Fragment>
  );
}

export default Portfolio;
