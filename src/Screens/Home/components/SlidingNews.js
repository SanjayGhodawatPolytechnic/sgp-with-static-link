import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import * as firebase from "firebase";
import "./slidingNews.css";

const SlidingNews = () => {
  const [headline, setHeadline] = useState("");

  const getHeadline = () => {
    firebase
      .database()
      .ref("marquee")
      .on("value", (snapshot) => {
        if (snapshot.val()) {
          setHeadline(snapshot.val().headline);
        }
      });
  };

  useEffect(() => {
    getHeadline();
  }, []);
  return (
    <div className="slide-back">
      <Marquee
        speed={50}
        gradient={false}
        pauseOnHover={true}
        pauseOnClick={true}
      >
        <div dangerouslySetInnerHTML={{ __html: headline }}></div>
      </Marquee>
    </div>
  );
};

export default SlidingNews;
