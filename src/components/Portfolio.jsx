import React from "react";
import "../App.css";

import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

function Portfolio(props) {
  return (
    <header className="masthead">
      <div className="center" id="padding-notHome">
        <div className="row">
          <div className="col-lg-6 project-container" id="tester">
            <p className="project-title">Spectrum Intern</p>
            <p className="project-des">
              - I did this and that and this and that and this and that and this
              and that and this and that and this and that and this and that and
              this and that and this and that and that and this and that and
              that and this and that
            </p>
            <a href="/">
              <div className="overlay"></div>
            </a>
          </div>

          <div className="col-lg-6 project-container" id="project-one">
            <p className="project-title">Cloud Care</p>
            <p className="project-des">
              - I did this and that and this and that and this and that and this
              and that and this and that and this and that and this and that and
              this and that and this and that and that and this and that and
              that and this and that
            </p>
            <a href="/">
              <div className="overlay"></div>
              <div className="project-button">
                <a className="btn btn-dark disabled" href="/">
                  <FontAwesomeIcon icon={faCode} />
                  <b className="button-text"> Code</b>
                </a>
              </div>
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 project-container" id="project-two">
            <p className="project-title">de;graded</p>
            <p className="project-des">
              - I did this and that and this and that and this and that and this
              and that and this and that and this and that and this and that and
              this and that and this and that and that and this and that and
              that and this and that
            </p>
            <a href="https://tiagoros.itch.io/degraded">
              <div className="overlay"></div>
              <div className="project-button">
                <a
                  className="btn btn-dark"
                  href="https://github.com/tiagorossig/repairRobot-"
                >
                  <FontAwesomeIcon icon={faCode} />
                  <b className="button-text"> Code</b>
                </a>
              </div>
            </a>
          </div>

          <div className="col-lg-6 project-container" id="project-three">
            <p className="project-title">Fledgeling</p>
            <p className="project-des">
              - I did this and that and this and that and this and that and this
              and that and this and that and this and that and this and that and
              this and that and this and that and that and this and that and
              that and this and that
            </p>

            <a href="https://pingwoh.itch.io/fledgeling">
              <div className="overlay"></div>
              <div className="project-button">
                <a
                  className="btn btn-dark"
                  href="https://github.com/tiagorossig/flyingHome"
                >
                  <FontAwesomeIcon icon={faCode} />
                  <b className="button-text"> Code</b>
                </a>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Portfolio;
