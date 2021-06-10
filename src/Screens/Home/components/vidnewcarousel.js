import React, { useEffect } from "react";
import Slider from "react-slick";
import { useState } from "react";
import * as firebase from "firebase";
import "./vidcarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Vidnewcarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth <= 826 ? 1 : 3,
    slidesToScroll: 1,
  };

  const [data, setdata] = useState([]);

  const getvid = async () => {
    let dataref = firebase.database().ref("videoCarousel");
    dataref.on("value", (datasnapshot) => {
      if (datasnapshot.val()) {
        let result = Object.values(datasnapshot.val());
        setdata(result);
      }
    });
  };
  useEffect(() => {
    getvid();
  }, []);

  return (
    <div className="vid-container">
      <div className="m-0 p-0">
        <h4 className="news-title"> Videos</h4>
        <div className="news-line" />
      </div>
      <Slider {...settings}>
        {data &&
          data.map((val, idx) => (
            <div className="vid" key={idx}>
              <iframe src={val.url}></iframe>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Vidnewcarousel;
