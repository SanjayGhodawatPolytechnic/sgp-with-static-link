import React from "react";
import _ from "lodash";

//imports for carousel

import "react-multi-carousel/lib/styles.css";

import "./carousel.css";

//importing firebase
import * as firebase from "firebase";
import { useState } from "react";
import { useEffect } from "react";

// TODO:Delete This Component
const Carousel = ({ setIsCarouselLoading }) => {
  return (
    <div className=" css-caro">
      <div
        id="carouselExampleIndicators"
        className="carousel slide p-0 m-0"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          {_.range(1, 7).map((i) => {
            if (i == 1) {
              return (
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={i}
                  className="active"
                  key={i}
                />
              );
            }
            return (
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to={i}
                key={i}
              />
            );
          })}
        </ol>
        <div className="carousel-inner">
          {_.range(1, 7).map((i, d) => {
            if (i == 1) {
              return (
                <div className="carousel-item active w-100" key={i}>
                  <img
                    className="d-block w-100 bgset"
                    src={require(`../../../img/home/carousel/c${i}.jpg`)}
                    alt=""
                  />
                </div>
              );
            }
            return (
              <div className="carousel-item w-100" key={i}>
                <img
                  className="d-block w-100"
                  src={require(`../../../img/home/carousel/c${i}.jpg`)}
                  alt=""
                />
              </div>
            );
          })}
        </div>
        <a
          className="carousel-control-prev carou-control"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
