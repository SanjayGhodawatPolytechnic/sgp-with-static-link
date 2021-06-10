import React from "react";
import Main from "../../../ReusableComponents/Main";

import DeptMenu from "../Reusables/DeptMenu";
import NavLinks from "./Navlinks";

const CivilOutcomes = () => {
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
            <div className="row">
              <div className="col-12 text-center">
                <h3>Program Educational Objectives (PEOs)</h3>
              </div>
              <div className="col-12 ">
                <div className="list-group">
                  <span className="list-group-item list-group-item-action">
                    Engineer will attain excellence in the profession by
                    applying basic and disciplinary knowledge to provide
                    solutions for the societal challenges
                  </span>
                  <span className="list-group-item list-group-item-action">
                    Engineer will work in multi-disciplinary fields of
                    engineering with concern towards environmental issues.
                  </span>
                  <span className="list-group-item list-group-item-action">
                    Engineer will exhibit effective communication skills, a
                    strong team spirit and inclination towards lifelong learning
                    with ethical values.
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center">
                <h3>Program Outcome (POs)</h3>
              </div>
              <div className="col-12">
                <div className="list-group">
                  <span className="list-group-item list-group-item-action">
                    PO1 - a. Basic and Discipline specific knowledge Apply
                    knowledge of basic mathematics, science and engineering
                    fundamentals and engineering specialization to solve the
                    engineering problems.
                  </span>
                  <span className="list-group-item list-group-item-action ">
                    PO2 - b. Problem analysis Identify and analyze well-defined
                    engineering problems using codified standard methods.
                  </span>
                  <span className="list-group-item list-group-item-action ">
                    PO3 - c. Design/ development of solutions: Design solutions
                    for well-defined technical problems and assist with the
                    design of systems components or processes to meet specified
                    needs.
                  </span>
                  <span className="list-group-item list-group-item-action ">
                    PO4 - d. Engineering Tools, Experimentation and Testing:
                    Apply modern engineering tools and appropriate technique to
                    conduct standard tests and measurements.
                  </span>
                  <span className="list-group-item list-group-item-action ">
                    PO5 - e. Engineering practices for society, sustainability
                    and environment: Apply appropriate technology in context of
                    society, sustainability, environment and ethical practices.
                  </span>
                  <span className="list-group-item list-group-item-action ">
                    PO6 - f. Project Management: Use engineering management
                    principles individually, as a team member or a leader to
                    manage projects and effectively communicate about
                    well-defined engineering activities.
                  </span>
                  <span className="list-group-item list-group-item-action ">
                    PO7 - g. Life-long learning: Ability to analyze individual
                    needs and engage in updating in the context of technological
                    changes.
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center">
                <h3>Program Specific Outcomes (PSOs)</h3>
              </div>
              <div className="col-12">
                <div className="list-group ">
                  <span className="list-group-item list-group-item-action ">
                    <b>Surveying :</b> Conduct survey for civil engineering
                    projects.
                  </span>
                  <span className="list-group-item list-group-item-action ">
                    <b>Planning, Drawing & Design :</b> Make plan, design &
                    drawings for various civil engineering structures.
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

export default CivilOutcomes;
