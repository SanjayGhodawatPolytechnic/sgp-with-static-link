import React from "react";
import "./ImgCarousel.css";

import Marquee from "react-fast-marquee";
import _ from "lodash";

function ImgCarousel() {
  return (
    <div className="img-gallery-container">
      <div className="courses-title">
        <h4 className=" imp-title">Image-Gallery</h4>
        <div className="courses-line imp-line" />
      </div>
      <div className="Marquee">
        <Marquee
          speed={100}
          gradient={false}
          pauseOnHover={true}
          pauseOnClick={true}
          className="mq-cont"
        >
          <div>
            {_.range(1, 26).map((d) => {
              return (
                <div className="Marquee-tag" key={d}>
                  <img
                    src={require(`../../../img/facilities/Students/${d}.jpg`)}
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
}

export default ImgCarousel;
