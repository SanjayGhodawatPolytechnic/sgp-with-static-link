import React from "react";
import Main from "../../ReusableComponents/Main";
import "./css/about.css";

function aboutAchievement() {
  return (
    <Main isSlideShow={true}>
      <div className="givmar">
        <br />
        <br />
        <div className="card w-100">
          <div className="card-header text-center ">Achievements</div>
          <div className="card-body">
            <a href="www.google.com" className="text-muted">
              National Board of Accreditation (NBA){" "}
            </a>
            <br />
            <br />
            <a href="www.google.com" className="text-muted">
              Verify National Board of Accreditation (NBA){" "}
            </a>
            <br />
            <br />
            <a href="www.google.com" className="text-muted">
              Best Polytechnic in Maharashtra
            </a>
            <br />
            <br />
            <p className="card-text">Excellent Grade by MSBTE, Mumbai</p>
            <a href="www.google.com" className="text-muted">
              "Ideal Educational Institute" award for Outstanding Performance in
              Education
            </a>
            <br />
          </div>
        </div>
        <br />
        <br />
      </div>
    </Main>
  );
}
export default aboutAchievement;
