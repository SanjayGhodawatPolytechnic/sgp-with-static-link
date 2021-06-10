import React from "react";

import "./Testimo.css";

//importing firebase
import * as firebase from "firebase";
import { useState } from "react";
import { useEffect } from "react";

const Testimo = () => {
  const [data, setData] = useState([]);

  const getalltesti = () => {
    const dbref = firebase.database().ref("testimonials");
    dbref.on("value", (datasnapshot) => {
      if (datasnapshot.val()) {
        let result = Object.values(datasnapshot.val());
        setData(result);
      }
    });
  };
  useEffect(() => {
    getalltesti();
  }, []);
  return (
    <div className="back-set">
      <div className="container mt-4 ">
        <div className="training-title">
          <h4 className="aoe-title">Testimonials</h4>
          <div className="line" />
        </div>
        <div id="demo" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {data.map((d, i) => {
              if (i == 0) {
                return (
                  <div className="carousel-item active" key={i}>
                    <div className="carousel-caption">
                      <p>{data[0] && data[0].message}</p>{" "}
                      <img src={data[0] && data[0].FileURL} />
                      <div id="image-caption">{data[0] && data[0].name}</div>
                    </div>
                  </div>
                );
              }
              return (
                <div className="carousel-item" key={i}>
                  <div className="carousel-caption">
                    <p>{d.message}</p>
                    <img src={d.FileURL} className="img-fluid" />
                    <div id="image-caption">{d.name}</div>
                  </div>
                </div>
              );
            })}
          </div>{" "}
          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            {" "}
            <i className="fas fa-arrow-left i" />{" "}
          </a>{" "}
          <a className="carousel-control-next" href="#demo" data-slide="next">
            {" "}
            <i className="fas fa-arrow-right i" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimo;
