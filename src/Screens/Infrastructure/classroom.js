import React from "react";
import "./CSS/Overview.css";
import Main from "../../ReusableComponents/Main";
import _ from "lodash";

const ClassRoom = () => {
  return (
    <Main>
      <div className="main">
        <div className="container">
          <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">
            Classrooms
          </h1>
          <hr className="mt-2 mb-5" />
          <div className="row text-center text-lg-left">
            {_.range(1, 3).map((val, idx) => (
              <div className="col-lg-3 col-md-4 col-6">
                <div className="d-block mb-4 h-100">
                  <img
                    className="img-fluid img-thumbnail"
                    src={require(`../../img/facilities/classrooms/classrooms${val}.jpg`)}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <p>
          Academic ambience would be the highest priority for all className
          rooms & Labs which will be constructed as per and more than AICTE,
          DTE, MSBTE norms
        </p>
      </div>
    </Main>
  );
};

export default ClassRoom;
