import React from "react";
import "../App.css";
import tiago from "../assets/tiago.jpg";

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
              Hey! I’m Tiago, a third-year Computer Science student at the
              University of Texas at Austin. I lived the first fifteen years of
              my life in São Paulo, Brazil—I absolutely loved it there. I moved
              with my family to Austin, Texas, where I started my career as a
              software developer. I’ve experimented with web development and
              built games and mobile apps. This past summer I had a great time
              interning at Spectrum Enterprise, and I’m looking forward to my
              next opportunity. Throughout my career, I hope to solve
              interesting problems with scalable and elegant solutions.
            </p>
            <p>
              Software development aside, I enjoy weight lifting, doing
              calisthenics, playing PC video games (League of Legends for the
              most part), and geeking out about the latest computer part or
              piece of tech that is coming out.
            </p>
            <p>
              Anyways, I’m currently seeking a software engineering internship
              for Summer and Fall 2021. If you’re hiring, feel free to contact
              me through email or Linkedin (see my Home page).
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
