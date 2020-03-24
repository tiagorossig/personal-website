import React from "react";
import { SocialIcon } from "react-social-icons";
import "../App.css";

function Home(props) {
  return (
    <header class="masthead">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12 text-center">
            <h1 class="font-weight-light">Tiago Grimaldi Rossi</h1>
            <table align="center">
              <tr align>
                <td class="padding-right">
                  <SocialIcon url="https://www.linkedin.com/in/tiagogrossi/" />
                </td>
                <td class="padding-right">
                  <SocialIcon url="mailto:tiagogrimaldirossi@gmail.com" />
                </td>
                <td class="padding-right">
                  <SocialIcon url="https://github.com/tiagorossig" />
                </td>
              </tr>
            </table>
            <div class="padding-top">
              <a href="../assets/Tiago_Grimaldi_Rossi_Resume.pdf" download>
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
