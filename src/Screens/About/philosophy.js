import React from "react";
import Main from "../../ReusableComponents/Main";
import ScrollAnimation from "react-animate-on-scroll";
import "./css/about.css";

function aboutPhilosophy() {
  return (
    <Main isSlideShow={true}>
      <div className="givmar">
        <br />
        <br />
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-1 col-0"></div>
          <img
            src={"http://www.sgipolytechnic.in/Images/Philosophy.jpg"}
            className="setWidth col-lg-8 col-md-8 col-sm-10 col-0"
            alt="..."
          />
          <div className="col-lg-2 col-md-2 col-sm-1 col-0"></div>
        </div>

        <br />
        <br />
        <ScrollAnimation animateIn="fadeIn">
          <div className="card ">
            <div className="card-header text-center ">
              Philosophy of Sanjay Ghodawat Polytechnic
            </div>
            <div className="card-body">
              <p className="card-text">
                Sanjay Ghodawat Polytechnic stands for performance par
                excellence. In the world where it is commonplace to see
                mediocrity as the order of the day, SGI always stands as the
                guiding star of brilliance, quality and deliverance beyond
                expectations. Innovativeness and Creativity are the hallmarks of
                a genius enterprise and SGI stands to be a stage where these
                qualities would be nurtured, encouraged and blossomed. Inner
                re-engineering towards a proactive outlook, courage to convert
                challenges into opportunities and an unyielding spirit with
                never-say-die attitude is expected from students, staff and
                management who are present in the grand precincts of the
                Institution. The genius is incomplete without the sense of
                social responsibility and SGI's ultimate goal remains the
                development of an attitude of gratitude that freely gives back
                without expectations.
              </p>
              <div className="card-footer text-center text-bold">
                "For the true measure of giving is giving without measure."
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <br />
        <br />
      </div>
    </Main>
  );
}

export default aboutPhilosophy;
