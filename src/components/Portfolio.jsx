import React from "react";
import "../App.css";
import projectOne from "../assets/cloudCare.png";
import projectThree from "../assets/fledge.png";

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
                <a href="/"> BUTTON </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-4">
            <div class="project-container">
              <img
                className="card-img-top project-img"
                src={projectOne}
                alt=""
              />
              <p class="project-title">Cloud Care</p>
              <div class="overlay"></div>
              <div class="project-button">
                <a href="/"> BUTTON </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 mb-4">
            <div class="project-container">
              <img
                className="card-img-top project-img"
                src="http://placehold.it/700x400"
                alt=""
              />
              <p class="project-title">card title</p>
              <div class="overlay"></div>
              <div class="project-button">
                <a href="/"> BUTTON </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-4">
            <div class="project-container">
              <img
                className="card-img-top project-img"
                src={projectThree}
                alt=""
              />
              <p class="project-title">Fledgeling</p>
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

export default Home;
