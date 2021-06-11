import React from "react";
import "./CSS/Overview.css";
import Main from "../../ReusableComponents/Main";
import _ from "lodash";

const auditorium = () => {
  return (
    <Main>
      <div className="main">
        <div className="container">
          <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">
            Auditorium
          </h1>
          <hr className="mt-2 mb-5" />
          <div className="row text-center text-lg-left">
            {_.range(1, 9).map((val, idx) => (
              <div className="col-lg-3 col-md-4 col-6">
                <a href="#" className="d-block mb-4 h-100">
                  <img
                    className="img-fluid img-thumbnail"
                    src={require(`../../img/facilities/Auditorium/Auditorium${val}.jpg`)}
                    alt=""
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Main>
  );
};

export default auditorium;
 