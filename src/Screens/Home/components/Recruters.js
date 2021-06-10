import React from "react";

import Marquee from "react-fast-marquee";
import _ from "lodash";

import "./Recruters.css";
const Recruters = () => {
  return (
    <div className="img-gallery-container">
      <div className="courses-title">
        <h4 className="rec">Recruiters</h4>
        <div className="courses-line imp-line" />
      </div>
      <div className="Marquee">
        <Marquee
          speed={100}
          gradient={false}
          pauseOnHover={true}
          pauseOnClick={true}
        >
          <div className="">
            {_.range(1, 6).map((i) => {
              return (
                <div className="Marquee-tag recruit" key={i}>
                  <img
                    className="recruit-img"
                    src={require(`../../../img/home/recruit/r${i}.png`)}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Recruters;
