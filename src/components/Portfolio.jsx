import React from "react";
import "../App.css";
import projectOne from "../assets/cloudCare.png";
import projectTwo from "../assets/deg.jpg";
import projectThree from "../assets/fledge.png";
import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

function Home(props) {
  return (
    <header className="masthead">
      <div className="center" id="padding-notHome">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div class="project-container">
              <img className="card-img-top project-img" src="" alt="" />
              <p class="project-title">Spectrum Internship</p>
              <div class="overlay"></div>
              <div class="project-button">
                <a className="btn btn-dark" href="/">
                  <FontAwesomeIcon icon={faCode} />
                  <b class="button-text"> Code</b>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-4">
            <div class="project-container">
              <a href="/">
                <img
                  className="card-img-top project-img"
                  src={projectOne}
                  alt=""
                />
                <p class="project-title">Cloud Care</p>
                <div class="overlay"></div>
                <div class="project-button">
                  <a className="btn btn-dark disabled" href="/">
                    <FontAwesomeIcon icon={faCode} />
                    <b class="button-text"> Code</b>
                  </a>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 mb-4">
            <div class="project-container">
              <a href="https://tiagoros.itch.io/degraded">
                <img
                  className="card-img-top project-img"
                  src={projectTwo}
                  alt=""
                />
                <p class="project-title">de;graded</p>
                <div class="overlay"></div>
                <div class="project-button">
                  <a
                    className="btn btn-dark"
                    href="https://github.com/tiagorossig/repairRobot-"
                  >
                    <FontAwesomeIcon icon={faCode} />
                    <b class="button-text"> Code</b>
                  </a>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-6 mb-4">
            <div class="project-container">
              <a href="https://pingwoh.itch.io/fledgeling">
                <img
                  className="card-img-top project-img"
                  src={projectThree}
                  alt=""
                />
                <p class="project-title">Fledgeling</p>
                <div class="overlay"></div>
                <div class="project-button">
                  <a
                    className="btn btn-dark"
                    href="https://github.com/tiagorossig/flyingHome"
                  >
                    <FontAwesomeIcon icon={faCode} />
                    <b class="button-text"> Code</b>
                  </a>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Home;
