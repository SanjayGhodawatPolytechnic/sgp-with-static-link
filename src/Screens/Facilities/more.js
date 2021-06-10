import React from "react";

import Main from "../../ReusableComponents/Main";

const Items = [
  {
    image: "computer_lab.jpg",
    caption: "Computer Lab",
  },
  {
    image: "drawing_hall.jpg",
    caption: "Drawing Hall",
  },
  {
    image: "reading_hall.jpg",
    caption: "Reading Hall",
  },
  {
    image: "Bus1.jpg",
    caption: "Transportation",
  },
  {
    image: "Health_Care01.jpg",
    caption: "Health Care",
  },
  {
    image: "ATM01.jpg",
    caption: "ATM & Stationary",
  },
];
const more = () => {
  return (
    <Main>
      <div className="main">
        <div className="container">
          <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">
            More...
          </h1>
          <hr className="mt-2 mb-5" />
          <div className="row text-center text-lg-left">
            {Items.map((d, i) => (
              <div className="col-lg-3 col-md-4 col-6">
                <a href="#" className="d-block mb-4 h-100">
                  <img
                    className="img-fluid img-thumbnail"
                    src={require(`../../img/facilities/more/${d.image}`)}
                    alt=""
                  />
                  <span className="badge badge-secondary">{d.caption}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Main>
  );
};

export default more;
