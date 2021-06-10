import React from "react";
import Main from "../../../ReusableComponents/Main";
import DeptMenu from "../Reusables/DeptMenu";
import NavLinks from "./NavLinks";
import "../Reusables/CSS/VisionMission.css";

const VisionMission = () => {
  return (
    <Main className="container-lg cse w-100 m-2 p-0">
      <div className="row deptcont">
        <DeptMenu dept="Computer Science" subMenu={NavLinks} />
        <div className="col text-dark w-100">
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4"
            data-target="#navbar-example3"
            data-offset="0"
          >
            <div className="row">
              <div className="col-12 text-center">
                <h3>Vision &amp; Mission -CSE Department</h3>
              </div>
              <div className="col-12 ">
                <h4 className="text-center">Vision</h4>
                <span className="list-group-item list-group-item-action">
                  Achieve excellence in Computer Science &amp; Engineering by
                  providing quality education and produce competent technocrats
                  who will meet ever changing industrial and social needs
                </span>
              </div>
              <div className="col-12 ">
                <h4 className="text-center">Mission</h4>
                <div className="list-group">
                  <span className="list-group-item list-group-item-action">
                    To impart necessary technical and professional skills among
                    students to make them employable
                  </span>
                  <span className="list-group-item list-group-item-action">
                    To produce competent technocrats to meet industrial
                    challenges with societal and environmental concerns
                  </span>
                  <span className="list-group-item list-group-item-action">
                    To establish effective institute-industry interaction
                  </span>
                  <span className="list-group-item list-group-item-action">
                    To motivate students for lifelong learning that will enable
                    them to choose better career opportunities
                  </span>
                </div>
              </div>
              <div className="col-12 ">
                <h5 className="text-center">Mission Objectives</h5>
                <div className="list-group">
                  <span className="list-group-item list-group-item-action">
                    M-1 : Make Students industry ready by imparting necessary
                    technical and professional skills
                  </span>
                  <span className="list-group-item list-group-item-action">
                    M-2 : Create awareness among students for societal and
                    environmental concerns
                  </span>
                  <span className="list-group-item list-group-item-action">
                    M-3 : Establish institute-industry interaction
                  </span>
                  <span className="list-group-item list-group-item-action">
                    M-4 : Inculcate the spirit of lifelong learning among
                    students for career enhancement
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default VisionMission;
