import React from "react";
import Main from "../../ReusableComponents/Main";
import ScrollAnimation from "react-animate-on-scroll";
import "./css/about.css";

function aboutSGP() {
  return (
    <Main isSlideShow={true}>
      <div>
        <br />
        <br />
        <div className="d-flex text-center justify-content-center align-items-center">
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/staticFiles%2FD%20block%20(1).jpg?alt=media&token=c6108113-d285-431d-be79-293d40ebc356"
            }
            className="setWidth "
            alt="institute building"
          />
        </div>

        <br />
        <br />
        <ScrollAnimation animateIn="fadeIn">
          <div className="card givmar">
            <div className="card-header text-center ">
              About Sanjay Ghodawat Polytechnic
            </div>
            <div className="card-body">
              <p className="card-text">
                Sou. Sushila Danchand Ghodawat charitable trusts, Sanjay
                Ghodawat Polytechnic Atigre", Kolhapur is established in the
                year 2012. It is the growing institute imparting technical
                knowledge and skills to the students and society at large. It is
                an unaided polytechnic located in Western region of Maharashtra.
              </p>
              <p className="card-text">
                Sou. Sushila Danchand Ghodawat Charitable Trust?s Sanjay
                Ghodawat Polytechnic started in the year 2012 with a vision to
                impart the best technical knowledge and skills to the students
                across the country. Its aim is to build and provide the team of
                young technocrats who will be the leading catalysts in the
                development of society and nation at large. Currently, the
                Polytechnic runs five different diploma engineering branches
                such as Civil, Mechanical, Electronics and Telecommunication,
                Computer Science and Engineering and Electrical Engineering with
                the total intake of 420 in first year and more than thousand
                including all years currently.
              </p>
              <p className="card-text">
                The MSBTE has given Excellent REMARK under its External academic
                monitoring process (EAMC). The Laboratory of the college from
                Electrical Department has got BEST LABORATORY AWARD with first
                rank and prize of Rs. 50,000 throughout Maharashtra. Many
                students have got remarkable achievements in all the MSBTE Board
                examinations. Many students of the college have got good
                placements in national and multi-national companies of well
                repute. The polytechnic stands for performance par excellence.
              </p>
              <p className="card-text">
                In the world where it is commonplace to see mediocrity as the
                order of the day, SGI always stands as the guiding star of
                brilliance, quality and deliverance beyond expectations.
                Innovativeness and Creativity are the hallmarks of a genius
                enterprise and SGI stands to be a stage where these qualities
                would be nurtured, encouraged and blossomed. Inner
                re-engineering towards a proactive outlook, courage to convert
                challenges into opportunities and an unyielding spirit with
                never-say-die attitude is expected from students, staff and
                management who are present in the grand precincts of the
                Institution. The genius is incomplete without the sense of
                social responsibility and SGI's ultimate goal remains the
                development of an attitude of gratitude that freely gives back
                without expectations.
              </p>
            </div>
          </div>
        </ScrollAnimation>

        <br />
        <br />
      </div>
    </Main>
  );
}

export default aboutSGP;
