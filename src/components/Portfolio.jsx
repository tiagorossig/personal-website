// rsf
import React from "react";

function Portfolio(props) {
  return (
    <React.Fragment>
      <div class="container">
        {/* Page Heading */}
        <h1 class="my-4">
          Page Heading
          <small>Secondary Text</small>
        </h1>

        {/* Project One */}
        <div class="row">
          <div class="col-md-7">
            <a href="#">
              <img
                class="img-fluid rounded mb-3 mb-md-0"
                src="http://placehold.it/700x300"
                alt=""
              />
            </a>
          </div>
          <div class="col-md-5">
            <h3>Project One</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium veniam exercitationem expedita laborum at voluptate.
              Labore, voluptates totam at aut nemo deserunt rem magni pariatur
              quos perspiciatis atque eveniet unde.
            </p>
            <a class="btn btn-primary" href="#">
              View Project
            </a>
          </div>
        </div>
      </div>

      <hr />

      {/* Project Two */}
      <div class="row">
        <div class="col-md-7">
          <a href="#">
            <img
              class="img-fluid rounded mb-3 mb-md-0"
              src="http://placehold.it/700x300"
              alt=""
            />
          </a>
        </div>
        <div class="col-md-5">
          <h3>Project Two</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, odit
            velit cumque vero doloremque repellendus distinctio maiores rem
            expedita a nam vitae modi quidem similique ducimus! Velit, esse
            totam tempore.
          </p>
          <a class="btn btn-primary" href="#">
            View Project
          </a>
        </div>
      </div>

      <hr />

      {/* Project Three */}
      <div class="row">
        <div class="col-md-7">
          <a href="#">
            <img
              class="img-fluid rounded mb-3 mb-md-0"
              src="http://placehold.it/700x300"
              alt=""
            />
          </a>
        </div>
        <div class="col-md-5">
          <h3>Project Three</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
            temporibus, dolores, at, praesentium ut unde repudiandae voluptatum
            sit ab debitis suscipit fugiat natus velit excepturi amet commodi
            deleniti alias possimus!
          </p>
          <a class="btn btn-primary" href="#">
            View Project
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Portfolio;
