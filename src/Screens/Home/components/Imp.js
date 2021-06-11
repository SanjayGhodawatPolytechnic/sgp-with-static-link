import React from "react";
import { Link } from "react-router-dom";

import "./Imp.css";

const Imp = () => {
  return (
    <div
      id="skew3"
      className="cus-div imp-section container m-0 p-0 text-center"
    >
      <div className="courses-title">
        <h4 className=" imp-title">Board Members</h4>
        <div className="courses-line imp-line" />
      </div>
      <div className="content-wrapper row">
        <div className="news-card col p-0">
          <img
            src={require("../../../img/home/board/SG.jpg")}
            alt=""
            className="news-card__image"
          />
          <div className="news-card__text-wrapper w-100">
            <h2 className="news-card__title">Mr. Sanjay Ghodawat</h2>
            <div className="news-card__post-date">Chairman</div>
            <div className="news-card__details-wrapper">
              <p className="news-card__excerpt">
                Education is making students aware of the infinite potential
                within and bringing it up so that the result is transformation
                of personalities.
              </p>
              <Link to="/management/chairman" className="news-card__read-more">
                Read more <i className="fas fa-long-arrow-alt-right" />
              </Link>
            </div>
          </div>
        </div>

        <div className="news-card col p-0">
          <img
            src={require("../../../img/home/board/secretary.jpg")}
            alt=""
            className="news-card__image"
          />
          <div className="news-card__text-wrapper w-100">
            <h2 className="news-card__title">Mr. Shrenik Ghodawat</h2>
            <div className="news-card__post-date">Secretary</div>
            <div className="news-card__details-wrapper">
              <p className="news-card__excerpt">
                There is one thing that I am sure of and that is - nothing
                worthwhile can be achieved in solitude.
              </p>
              <Link to="/management/chairman" className="news-card__read-more">
                Read more <i className="fas fa-long-arrow-alt-right" />
              </Link>
            </div>
          </div>
        </div>
        <div className="news-card col p-0">
          <img
            src={require("../../../img/home/board/VB.jpg")}
            alt=""
            className="news-card__image"
          />
          <div className="news-card__text-wrapper w-100">
            <h2 className="news-card__title">Mr. Vinayak Bhosale</h2>
            <div className="news-card__post-date">Trustee</div>
            <div className="news-card__details-wrapper">
              <p className="news-card__excerpt">
                If you treat an individual as he is, he will remain how he is.
                But if you treat him as if he were what he ought to be and could
                be, he will become what he ought to be and could be.
              </p>
              <Link to="/management/trustee" className="news-card__read-more">
                Read more <i className="fas fa-long-arrow-alt-right" />
              </Link>
            </div>
          </div>
        </div>
        <div className="news-card col p-0">
          <img
            src={require("../../../img/home/board/VG.jpg")}
            alt=""
            className="news-card__image"
          />
          <div className="news-card__text-wrapper w-100">
            <h2 className="news-card__title">Mr. Virat Giri</h2>
            <div className="news-card__post-date">Principal</div>
            <div className="news-card__details-wrapper">
              <p className="news-card__excerpt">
                All the flowers of all the tomorrows are in the in seeds of
                today.
              </p>
              <Link to="/management/principal" className="news-card__read-more">
                Read more <i className="fas fa-long-arrow-alt-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imp;
