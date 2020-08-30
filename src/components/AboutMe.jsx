import React from "react";
import "../App.css";
import tiago from "../assets/tiago.jpg";

// col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 text-center

function AboutMe(props) {
  return (
    <>
      <div className="row align-items-center padding-navBar">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 align-self-center padding-tiago">
          <img src={tiago} className="oval" />
        </div>

        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
          <div className="aboutText">
            <h1 className="heading"> Who Am I? </h1>
            <p>
              {" "}
              Hi! I'm Adrian, a junior Computer Science student at the
              University of Texas at Austin. I was born in Cardiff, Wales,
              though I've spent most of my life in Detroit, Michigan and Mexico
              City. I play classical piano, enjoy reading and writing, watching
              Real Madrid games, and I never miss a Formula 1 race.{" "}
            </p>
            <p>
              {" "}
              My Computer Science coursework, side projects and work experience
              descriptions can be found to the right. I'm currently seeking a
              software engineering internship for the following summer/winter,
              and if you're hiring, please don't hesitate to contact me at the
              email address below.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
