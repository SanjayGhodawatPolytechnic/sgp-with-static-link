import React from "react";
import Main from "../../../ReusableComponents/Main";
import DeptMenu from "../Reusables/DeptMenu";
import NavLinks from "./NavLinks";

const ElectricalVisionMission = () => {
  return (
    <Main className="container-lg cse w-100 m-2 p-0">
      <div className="row deptcont">
        <DeptMenu dept="Electrical" subMenu={NavLinks} />
        <div className="col text-dark w-100">
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4"
            data-target="#navbar-example3"
            data-offset="0"
          >
            <div className="row">
              <div className="col-12 text-center">
                <h3>Vision &amp; Mission</h3>
              </div>
              <div className="col-12 ">
                <h4 className=" text-center">Vision</h4>

                <span className="list-group-item list-group-item-action">
                  {" "}
                  Achieve excellence in field of Electrical Engineering by
                  providing quality and value based education that will meet the
                  ever changing challenges of the industry and society.
                </span>
              </div>
              <div className="col-12">
                <h4 className=" text-center">Mission</h4>
                <div className="list-group">
                  <span className="list-group-item list-group-item-action">
                    {" "}
                    To impart necessary technical and professional skills of the
                    discipline among the students that will make them industry
                    ready
                  </span>
                  <span className="list-group-item list-group-item-action">
                    To create awareness among students for societal and
                    environmental concerns
                  </span>
                  <span className="list-group-item list-group-item-action">
                    To establish effective institute-industry interaction
                  </span>
                  <span className="list-group-item list-group-item-action">
                    To inculcate the spirit of lifelong learning among students
                    for career enhancement
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

export default ElectricalVisionMission;
