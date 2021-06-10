import React from "react";
import Main from "../../../ReusableComponents/Main";

import DeptMenu from "../Reusables/DeptMenu";
import NavLinks from "./NavLinks";
import "../Reusables/CSS/HOD.css";

const ElectricalHODDesk = () => {
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
              <div className="col text-center">
                <img
                  alt="etc hod"
                  className="img-fluid rounded"
                  src="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2Fhods%2FPatilNitin.jpg?alt=media&token=932a4562-cba4-4cc7-a9eb-f1065fc1c760"
                />
              </div>
              <div className="col-12 text-center">
                <b>Mr. Patil Nitin Surgonda</b>
              </div>
              <div className="col-12 text-center">
                <b>Head of Department</b>
              </div>
            </div>
            <p className="m-1 words">
              The department empowers the students with the proficiency and
              knowledge required to excel in the dynamic field of Electrical to
              pursue higher education. It also imparts technical knowledge and
              skills to students towards continuous improvement in education and
              placement and prepares the students to meet the challenges in the
              technical advancement to serve the community.
            </p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default ElectricalHODDesk;
