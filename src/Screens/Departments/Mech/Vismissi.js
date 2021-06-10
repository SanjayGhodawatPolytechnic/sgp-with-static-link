import React from "react";
import Main from "../../../ReusableComponents/Main";
import DeptMenu from "../Reusables/DeptMenu";
import NavLinks from "./Nav";
import "../Reusables/CSS/VisionMission.css";

const MechanicalVisionMission = () => {
  return (
    <Main className="container-lg cse w-100 m-2 p-0">
      <div className="row deptcont">
        <DeptMenu dept="Mechanical" subMenu={NavLinks} />
        <div className="col text-dark w-100">
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4"
            data-target="#navbar-example3"
            data-offset="0"
          >
            <div className="row">
              <div className="col-12 text-center">
                <h3>Vision &amp; Mission -MSBTE</h3>
              </div>
              <div className="col-12 text-center">
                <h4>Vision</h4>
                <p>
                  Achieve excellence in Mechanical Engineering by imparting
                  technical & professional skills along with ethical values to
                  meet industrial requirements having societal and environmental
                  concern
                </p>
              </div>
              <div className="col-12 text-center">
                <h4>Mission</h4>
                <p>
                  <ul>
                    <li>
                      To offer quality education with supportive facilities to
                      produce technically proficient engineers through
                      industry-institute interaction
                    </li>
                    <li>
                      To motivate students for lifelong learning and guide them
                      to choose better career opportunities
                    </li>
                    <li>
                      To inculcate ethical & professional values among students
                      with societal and environmental concern.
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

export default MechanicalVisionMission;
