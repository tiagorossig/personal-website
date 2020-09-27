import React from "react";
import { SocialIcon } from "react-social-icons";
import "../App.css";
import resume from "../assets/Tiago_Grimaldi_Rossi.pdf";

function Home(props) {
  return (
    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12 text-center">
            <h1 className="font-weight-light">Tiago Grimaldi Rossi</h1>
            <table align="center">
              <td className="">
                <SocialIcon url="https://www.linkedin.com/in/tiagogrossi/" />
              </td>
              <td className="padding-right-left">
                <SocialIcon url="mailto:tiagogrimaldirossi@gmail.com" />
              </td>
              <td className="">
                <SocialIcon url="https://github.com/tiagorossig" />
              </td>
            </table>
            <div className="padding-top">
              <a href={resume} download>
                <button className="btn btn-dark btn-lg">Download Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Home;
