import React from "react";
import Main from "../../../ReusableComponents/Main";

import DeptMenu from "../Reusables/DeptMenu";
import NavLinks from "./NavLinks";
import "../Reusables/CSS/HOD.css";

const FyHODDesk = () => {
  return (
    <Main className="container-lg cse w-100 m-2 p-0">
      <div className="row deptcont">
        <DeptMenu dept="Basic Science and Humanities" subMenu={NavLinks} />
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
                  src="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2Fhods%2FMahadikShubhangi.jpg?alt=media&token=49258c31-ac36-41cd-9afc-491699a10308"
                />
              </div>
              <div className="col-12 text-center">
                <b>Mrs. Mahadik Shubhangi Balaso</b>
              </div>
              <div className="col-12 text-center">
                <b>Head of Department</b>
              </div>
            </div>
            <p className="m-1 words">
              On behalf of BSH department, I take opportunity to welcome you all
              to our department. As per our vision our team strive to
              persistently improve educational environment in our department. We
              are always engaged in the activities for overall development of
              our students with various aspects like technical education,
              self-motivation, ethics and personality.
            </p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default FyHODDesk;
