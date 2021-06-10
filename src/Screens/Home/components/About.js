import React from "react";
import "./About.css";

const AboutHome = () => {
  return (
    <div>
      <div className="about-wrapper">
        <div className=" info">
          <h2 className="title">About SGP</h2>
          <p>
            In the world where it is commonplace to see mediocrity as the order
            of the day, SGI always stands as the guiding star of brilliance,
            quality and deliverance beyond expectations. Innovativeness and
            Creativity are the hallmarks of a genius enterprise and SGI stands
            to be a stage where these qualities would be nurtured, encouraged
            and blossomed. Inner re-engineering towards a proactive outlook,
            courage to convert challenges into opportunities and an unyielding
            spirit with never-say-die attitude is expected from students, staff
            and management who are present in the grand precincts of the
            Institution. The genius is incomplete without the sense of social
            responsibility and SGI's ultimate goal remains the development of an
            attitude of gratitude that freely gives back without expectations.
          </p>
        </div>
        <div className=" solid-sec">
          <img
            src={require(`../../../img/home/about/Dblock.jpg`)}
            alt=""
            className="img-about"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
