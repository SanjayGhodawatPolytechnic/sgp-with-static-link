import React from "react";
import * as firebase from "firebase";
import { useState } from "react";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";

import "./Recruters.css";
const Recruters = () => {
  const [data, setData] = useState([]);

  const getRec = async () => {
    let dataRef = firebase.database().ref("recruiters");
    dataRef.on("value", (dataSnapshot) => {
      if (dataSnapshot.val()) {
        let result = Object.values(dataSnapshot.val());
        setData(result);
      }
    });
  };

  useEffect(() => {
    getRec();
  }, []);

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
            {data.map((d, i) => {
              return (
                <div className="Marquee-tag recruit" key={i}>
                  <img className="recruit-img" src={d.URL} alt="" />
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
