import React, { useState, useEffect } from "react";
import Main from "../../ReusableComponents/Main";

import * as firebase from "firebase";
import "./CSS/Home.css";

const StudentHome = () => {
  const [data, setData] = useState([]);

  const getPic = async () => {
    setData([]);
    let dataRef = firebase.database().ref("student_pics");
    dataRef.on("value", (dataSnapshot) => {
      if (dataSnapshot.val()) {
        let result = Object.values(dataSnapshot.val());

        setData(result);
      }
    });
  };

  useEffect(() => {
    getPic();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const xyz = () => {
    return data.map((c, i) => (
      <div className="col-md-4 uploaded-img">
        <div id="mdb-lightbox-ui" />
        <div className="mdb-lightbox">
          <figure className="col-md-12" key={i}>
            <img
              src={c.imageDownloadUrl}
              className="img-fluid rounded"
              alt="abc"
            />
            <div className="mask flex-center waves-effect waves-light rgba-teal">
              <h4 className="white-text">{c.fullName}</h4>
            </div>
            <br />
            <div className="mask align-content-stretch waves-effect waves-light rgba-teal">
              <p className="white-text ">
                &nbsp;&nbsp;&nbsp;&nbsp;{c.department}
              </p>
            </div>
          </figure>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <Main isSlideShow={true}>
        <br /> <br />
        <a href="/students/uploadimage">
          <button className="btn btn-elegant">Add a photo</button>
        </a>
        <br />
        <br />
        <h2 className="text-monospace">Top 10 Clicks By Students</h2>
        {/*Carousel Wrapper*/}
        <div
          id="carousel-example-2"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          {/*Indicators*/}
          <ol className="carousel-indicators">
            <li
              data-target="#carousel-example-2"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carousel-example-2" data-slide-to={1} />
            <li data-target="#carousel-example-2" data-slide-to={2} />
            <li data-target="#carousel-example-2" data-slide-to={3} />
            <li data-target="#carousel-example-2" data-slide-to={4} />
            <li data-target="#carousel-example-2" data-slide-to={5} />
            <li data-target="#carousel-example-2" data-slide-to={6} />
            <li data-target="#carousel-example-2" data-slide-to={7} />
            <li data-target="#carousel-example-2" data-slide-to={8} />
            <li data-target="#carousel-example-2" data-slide-to={9} />
            <li data-target="#carousel-example-2" data-slide-to={10} />
          </ol>
          {/*/.Indicators*/}
          {/*Slides*/}
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="view">
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                  alt="First slide"
                />
                <div className="mask rgba-black-light" />
              </div>
              <div className="carousel-caption">
                <h3 className="h3-responsive">Light mask</h3>
                <p>First text</p>
              </div>
            </div>
            <div className="carousel-item">
              {/*Mask color*/}
              <div className="view">
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                  alt="Second slide"
                />
                <div className="mask rgba-black-strong" />
              </div>
              <div className="carousel-caption">
                <h3 className="h3-responsive">Strong mask</h3>
                <p>Secondary text</p>
              </div>
            </div>
            <div className="carousel-item">
              {/*Mask color*/}
              <div className="view">
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                  alt="Third slide"
                />
                <div className="mask rgba-black-slight" />
              </div>
              <div className="carousel-caption">
                <h3 className="h3-responsive">Slight mask</h3>
                <p>Third text</p>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="view">
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                  alt="First slide"
                />
                <div className="mask rgba-black-light" />
              </div>
              <div className="carousel-caption">
                <h3 className="h3-responsive">Light mask</h3>
                <p>First text</p>
              </div>
            </div>
            <div className="carousel-item">
              {/*Mask color*/}
              <div className="view">
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                  alt="Second slide"
                />
                <div className="mask rgba-black-strong" />
              </div>
              <div className="carousel-caption">
                <h3 className="h3-responsive">Strong mask</h3>
                <p>Secondary text</p>
              </div>
            </div>
            <div className="carousel-item">
              {/*Mask color*/}
              <div className="view">
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                  alt="Third slide"
                />
                <div className="mask rgba-black-slight" />
              </div>
              <div className="carousel-caption">
                <h3 className="h3-responsive">Slight mask</h3>
                <p>Third text</p>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="view">
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                  alt="First slide"
                />
                <div className="mask rgba-black-light" />
              </div>
              <div className="carousel-caption">
                <h3 className="h3-responsive">Light mask</h3>
                <p>First text</p>
              </div>
            </div>
            <div className="carousel-item">
              {/*Mask color*/}
              <div className="view">
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                  alt="Second slide"
                />
                <div className="mask rgba-black-strong" />
              </div>
              <div className="carousel-caption">
                <h3 className="h3-responsive">Strong mask</h3>
                <p>Secondary text</p>
              </div>
            </div>
            <div className="carousel-item">
              {/*Mask color*/}
              <div className="view">
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                  alt="Third slide"
                />
                <div className="mask rgba-black-slight" />
              </div>
              <div className="carousel-caption">
                <h3 className="h3-responsive">Slight mask</h3>
                <p>Third text</p>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="view">
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                  alt="First slide"
                />
                <div className="mask rgba-black-light" />
              </div>
              <div className="carousel-caption">
                <h3 className="h3-responsive">Light mask</h3>
                <p>First text</p>
              </div>
            </div>
          </div>
          {/*/.Slides*/}
          {/*Controls*/}
          <a
            className="carousel-control-prev"
            href="#carousel-example-2"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carousel-example-2"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
          {/*/.Controls*/}
        </div>
        {/*/.Carousel Wrapper*/}
        <br />
        <br />
        <br />
        <br />
        <br />
        <h4 className="text-monospace">Clicks By Students</h4>
        {/* First row */}
        <div className="view">
          <div className="row">{xyz()}</div>
        </div>
      </Main>
    </div>
  );
};

export default StudentHome;
