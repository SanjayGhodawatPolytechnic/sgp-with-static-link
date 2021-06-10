import React from "react";
import Main from "../../../ReusableComponents/Main";
import DeptMenu from "../Reusables/DeptMenu";
import NavLinks from "./Navlinks";
import "../Reusables/CSS/VisionMission.css";

const CivilVisionMission = () => {
  return (
    <Main className="container-lg cse w-100 m-2 p-0">
      <div className="row deptcont">
        <DeptMenu dept="Civil" subMenu={NavLinks} />
        <div className="col text-dark w-100">
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4"
            data-target="#navbar-example3"
            data-offset="0"
          >
            <div className="row p-4">
              <div className="col-12 text-center">
                <h3>Vision &amp; Mission -MSBTE</h3>
              </div>
              <div className="col-12 text-center">
                <h4>Vision</h4>
                <p>
                  Achieve excellence in Civil Engineering discipline that will
                  help students to contribute towards the growth of industry &
                  society with a concern for environment.
                </p>
              </div>
              <div className="col-12 ">
                <h4 className="text-center">Mission</h4>
                <p>
                  <ul>
                    <li>
                      To impart domain specific knowledge, professional and
                      communication skills among students with the aid of
                      supportive facilities
                    </li>
                    <li>
                      To expose students to the recent trends and technologies
                      with industry collaboration.
                    </li>
                    <li>
                      To create awareness among civil engineering students about
                      environmental and societal concerns
                    </li>
                    <li>
                      To inculcate a spirit of life-long learning with ethical
                      bent of mind for better career enhancement
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default CivilVisionMission;
