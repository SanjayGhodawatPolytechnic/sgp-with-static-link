import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Autoplay,
} from "swiper/core";
// import Swiper, {
//   Navigation,
//   Pagination,
//   Mousewheel,
//   Autoplay,
// } from "swiper";
import "./swiper.css";
import * as firebase from "firebase";
import PDFModal from "../../../ReusableComponents/PDFModal";

// TODO: ====================Lot to work to make it responsive================================
const SwiperEg = ({ setIsRecentsLoading }) => {
  SwiperCore.use([Navigation, Pagination, Mousewheel, Autoplay]);

  const [data, setData] = useState([]);
  const [isPDFopen, setIsPDFopen] = useState(false);
  const [currentlyOpenPDFURL, setCurrentlyopenPDFURL] = useState("");

  const getAllUpdates = async () => {
    setIsRecentsLoading(true);
    let dataRef = firebase.database().ref("updates");
    dataRef.on("value", (dataSnapshot) => {
      if (dataSnapshot.val()) {
        let result = Object.values(dataSnapshot.val());
        let contactKey = Object.keys(dataSnapshot.val());
        contactKey.forEach((value, key) => {
          result[key]["key"] = value;
        });
        result.forEach((v, i) => {
          let date = new Date(v.postedOn);
          let dateData = [];
          dateData.push(date.getDate().toString());
          dateData.push((date.getMonth() + 1).toString());
          dateData.push(date.getFullYear().toString());
          v.postedOn = dateData.join("/");
        });
        result.reverse();
        setData(result);
        setIsRecentsLoading(false);
      }
    });
  };

  useEffect(() => {
    getAllUpdates();

    // var swiper = new Swiper(".blog-slider", {
    //   observer: true,
    //   loop: true,
    //   centeredSlides: true,
    //   autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },

    //   spaceBetween: 30,
    //   effect: "fade",
    //   autoHeight: true,
    //   pagination: {
    //     el: ".blog-slider__pagination",
    //     clickable: true,
    //   },
    //   direction: "vertical",
    //   slidesPerView: 1,
    //   slideActiveclassName: "swiper-slide-active",
    //   allowTouchMove: false,
    // });
  }, []);

  const openPDF = (pdfURL) => {
    setCurrentlyopenPDFURL(pdfURL);
    setIsPDFopen(true);
  };

  const closePDF = () => {
    setIsPDFopen(false);
  };

  return (
    <div className="container m-0 p-0 w-100">
      <div className="swiper-cont container m-0 p-0 row">
        <div className="w-100 text-center swiper-title m-0 p-0">
          <h4 className="title">UPDATES</h4>
          <div className="reports-line swiper-line" />
        </div>
        {/* <div className="blog-slider col-12 p-0">
          <div className="blog-slider__wrp swiper-wrapper mt-3">
            {data.map((val, idx) => (
              <div className="blog-slider__item swiper-slide" key={idx}>
                <div className="blog-slider__img">
                  <img src={val.imageDownloadUrl} alt="" />
                </div>
                <div className="blog-slider__content">
                  <span className="blog-slider__code">{val.postedOn}</span>
                  <div className="blog-slider__title">{val.title}</div>
                  <div className="blog-slider__text">{val.description}</div>
                  <button
                    onClick={() => {
                      openPDF(val.fileDownloadUrl);
                    }}
                    className="blog-slider__button"
                  >
                    READ MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="blog-slider__pagination"></div>
        </div> */}
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={2000}
          pagination={{
            el: ".blog-slider__pagination",
            clickable: true,
          }}
          slidesPerView={1}
          slideActiveclassName="swiper-slide-active"
          direction="vertical"
          navigation={true}
          allowTouchMove={false}
          className="blog-slider col-12 p-0"
        >
          <div className="blog-slider__wrp swiper-wrapper mt-3">
            {data.map((val, idx) => (
              <SwiperSlide className="blog-slider__item swiper-slide" key={idx}>
                <div className="blog-slider__img">
                  <img src={val.imageDownloadUrl} alt="" />
                </div>
                <div className="blog-slider__content">
                  <span className="blog-slider__code">{val.postedOn}</span>
                  <div className="blog-slider__title">{val.title}</div>
                  <div className="blog-slider__text">{val.description}</div>
                  <button
                    onClick={() => {
                      openPDF(val.fileDownloadUrl);
                    }}
                    className="blog-slider__button"
                  >
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </div>
          <div className="blog-slider__pagination"></div>
        </Swiper>
      </div>
      {isPDFopen && <PDFModal url={currentlyOpenPDFURL} closePDF={closePDF} />}
    </div>
  );
};

export default SwiperEg;
