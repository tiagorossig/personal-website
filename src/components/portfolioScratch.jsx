// rsf
import React from "react";
import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import projectOne from "../assets/cloudCare.jpg";
import projectTwo from "../assets/degraded.jpg";
import projectThree from "../assets/fledge.jpg";
import "../App.css";

function Portfolio(props) {
  return (
    <header className="portfolioBG">
      <div className="center">
        <div className="portfolio">
          {/* Page Heading */}
          <h1 className="my-4">Projects</h1>

          <hr />

          {/* Project One*/}
          <div className="row">
            <div className="col-md-5">
              <a href="/">
                <div id="wrapper">
                  <img className="project-image" src={projectOne} alt="" />
                  <p className="text">View project</p>

                  <div className="text">
                    <h3>CloudCare</h3>
                    <p>Project 1.</p>
                    <a className="btn btn-dark disabled" href="/">
                      <FontAwesomeIcon icon={faCode} />
                      <b> Code</b>
                    </a>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Project Two */}
          <div className="row">
            <div className="col-md-5">
              <a href="https://tiagoros.itch.io/degraded">
                <div id="wrapper">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0 project hover"
                    src={projectTwo}
                    alt=""
                  />
                  <p className="text">View Project</p>
                  <div className="text">
                    <h3>de;graded</h3>
                    <p>Project 2.</p>
                    <a
                      className="btn btn-dark"
                      href="https://github.com/tiagorossig/repairRobot-"
                    >
                      <FontAwesomeIcon icon={faCode} />
                      <b> Code</b>
                    </a>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <hr />

          {/* Project Three */}
          <div className="row  padding-bottom">
            <div className="col-md-5">
              <a href="https://pingwoh.itch.io/fledgeling">
                <div id="wrapper">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0 project hover"
                    src={projectThree}
                    alt=""
                  />
                  <p className="text">View Project</p>
                </div>
              </a>
            </div>
            <div className="col-md-5">
              <h3>Fledgling</h3>
              <p>Project 3.</p>
              <a
                className="btn btn-dark"
                href="https://github.com/tiagorossig/flyingHome"
              >
                <FontAwesomeIcon icon={faCode} />
                <b> Code</b>
              </a>
            </div>
          </div>

          <hr />

          {/* Project Three */}
          <div className="row padding-bottom">
            <div class="project-container">
              <img
                class="project-img"
                src="https://images.unsplash.com/photo-1488628075628-e876f502d67a?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="
                alt=""
              />
              <p class="project-title">card title</p>
              <div class="overlay"></div>
              <div class="project-button">
                <a href="/"> BUTTON </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Portfolio;
