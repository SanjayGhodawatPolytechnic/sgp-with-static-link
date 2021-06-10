import React from "react";
import Main from "../../ReusableComponents/Main";
import "./CSS/management.css";
const managementPrincipal = () => {
  return (
    <Main isSlideShow={true}>
      <div>
        <br />
        <br />
        <div className="card mb-3 mar">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FPic%2FPrincipal.jpg?alt=media&token=f1139a10-e088-4a8b-817a-6863a2b62cf2"
                className="card-img-top border rounded trust-image"
                alt="..."
              />
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title text-center">
              <i className="fas fa-user-alt"></i> Principal
            </h5>
            <h4 className="card-title text-center">Virat V. Giri</h4>
            <p className="card-text">
              <br />
              <b>
                "All the flowers of all the tomorrows are in the in seeds of
                today."
              </b>
              Sanjay Ghodawat Polytechnic was planted as a sapling in the year
              2012 at the Sanjay Ghodawat Institutes and today it has bloomed as
              a huge tree bearing fruits. After a glorious journey of 7 years,
              the Polytechnic has earned lots of credits and accolades, it is
              one of the youngest Polytechnic to earn the NBA Accreditation for
              all its courses.
            </p>
            <p>
              The 'Knowledge Review Magazine' has reckoned it among the top 10
              Polytechnics of the Nation in 2018. The MSBTE has given the
              Polytechnic 'Excellent Rank' and also its Electric Machine Lab was
              awarded with Best Laboratory Award. All these achievements are
              icing on the cake over the noble work of helping thousand of
              students gain the necessary skills in Engineering and making them
              employable and imparting the entrepreneurial spirit in them.
            </p>
            <p>
              We believe that students who walk in our Polytechnic are potential
              energy waiting to be unleashed and through our rigorous academics,
              exposure to practicals in the labs, industry exposure, training in
              soft skills we help them to bring out their best selves. I welcome
              you parents and students to the Sanjay Ghodawat Polytechnic and
              also welcome your suggestions so that together we may reward our
              students with a bright and promising future. Let's join hand to
              conquer the world with SGI !
            </p>
            <p>Thank-you</p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default managementPrincipal;
