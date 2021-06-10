import React, { useState } from "react";
import PDFModal from "../../../ReusableComponents/PDFModal";
import "./CSS/Activity.css";

const ActivityCard = ({
  title = "",
  description = "",
  date = "",
  duration = "",
  dept = "",
  type = "",
  organizedFor = "",
  fileURL = "",
  imageURLS = [],
}) => {
  const [carouselData, setCarouselData] = useState({
    CurrentIndex: 0,
  });

  const [isPDFopen, setIsPDFopen] = useState(false);
  const [currentlyOpenPDFURL, setCurrentlyopenPDFURL] = useState("");

  const openPDF = (pdfURL) => {
    setCurrentlyopenPDFURL(pdfURL);
    setIsPDFopen(true);
  };

  const closePDF = () => {
    setIsPDFopen(false);
  };

  const Carousell = () => (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        {imageURLS.map((val, idx) => {
          return (
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={idx.toString()}
              key={idx}
              className={`${carouselData.CurrentIndex === idx ? "active" : ""}`}
            ></li>
          );
        })}
      </ol>
      <div className="carousel-inner text-center">
        {/* <div className={`carousel-item active`}>
                                            <img className="d-block w-100 img-responsive cr-img" src={imageURLS[0]} />
                                        </div> */}
        {imageURLS.map((val, idx) => {
          return (
            <div
              className={`carousel-item ${
                carouselData.CurrentIndex === idx ? "active" : ""
              }`}
              key={idx}
            >
              <img alt="activity" className="img-responsive cr-img" src={val} />
            </div>
          );
        })}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        onClick={() => {
          if (carouselData.CurrentIndex >= 1) {
            setCarouselData({
              ...carouselData,
              CurrentIndex: carouselData.CurrentIndex - 1,
            });
          }
        }}
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        onClick={() => {
          if (carouselData.CurrentIndex < imageURLS.length - 1) {
            setCarouselData({
              ...carouselData,
              CurrentIndex: carouselData.CurrentIndex + 1,
            });
          }
        }}
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
  return (
    <div className="main-card">
      {isPDFopen && <PDFModal url={currentlyOpenPDFURL} closePDF={closePDF} />}

      {imageURLS.length > 0 ? <Carousell /> : ""}

      <div className="col-sm-12">
        <div className="row text-center text-dark">
          <div className="col-12 p-2 text-center heading">
            <h2>
              <b>{title}</b>
            </h2>

            <p>{description}</p>
          </div>
          <div className="col-6 p-2">
            <b>Date</b>
            <br />
            <span className="badge badge-info">{date}</span>
          </div>
          <div className="col-6 p-2">
            <b>Duration</b>
            <br />
            <span className="badge badge-info">{duration}</span>
          </div>
          <div className="col-6 p-2">
            <b>Department</b>
            <br />
            <span className="badge badge-info">{dept}</span>
          </div>
          <div className="col-6 p-2">
            <b>TYPE</b>
            <br />
            <span className="badge badge-info">{type}</span>
          </div>
          <div className="col-6 p-2">
            <b>Organized for</b>
            <br />
            <span className="badge badge-info">{organizedFor}</span>
          </div>
          <div className="col-6 p-2">
            <b>File</b>
            <br />
            {fileURL ? (
              <button
                onClick={() => {
                  openPDF(fileURL);
                }}
                className="btn btn-info"
              >
                Click Here
              </button>
            ) : (
              <span className="badge badge-info">No File Available</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
