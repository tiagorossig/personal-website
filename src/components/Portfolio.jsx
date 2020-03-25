import React from "react";
import "../App.css";

function Home(props) {
  return (
    <header className="masthead">
      <div className="center" id="padding-notHome">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <a href="#">
              <img
                className="card-img-top"
                src="http://placehold.it/700x400"
                alt=""
              />
            </a>
          </div>

          <div className="col-lg-6 mb-4">
            <a href="#">
              <img
                className="card-img-top"
                src="http://placehold.it/700x400"
                alt=""
              />
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 mb-4">
            <a href="#">
              <img
                className="card-img-top"
                src="http://placehold.it/700x400"
                alt=""
              />
            </a>
          </div>

          <div className="col-lg-6 mb-4">
            <a href="#">
              <img
                className="card-img-top"
                src="http://placehold.it/700x400"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Home;
