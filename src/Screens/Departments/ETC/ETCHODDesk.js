import React from "react";
import Main from "../../../ReusableComponents/Main";

import DeptMenu from "../Reusables/DeptMenu";
import NavLinks from "./NavLinks";
import "../Reusables/CSS/HOD.css";

const ETCHODDesk = () => {
  return (
    <Main className="container-lg cse w-100 m-2 p-0">
      <div className="row deptcont">
        <DeptMenu dept="E &amp; TC" subMenu={NavLinks} />
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
                  src="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2Fhods%2FDhangadiRavindra.jpg?alt=media&token=268dd9b0-58ac-4d81-b2c5-199827f2ec07"
                />
              </div>
              <div className="col-12 text-center">
                <b>Mr. Dhongadi Ravindra Purushottam</b>
              </div>
              <div className="col-12 text-center">
                <b>Head of Department</b>
              </div>
            </div>
            <p className="m-1 words">
              The E &amp; TC department provides indepth knowledge to the
              students about basic principles of Electronics, Communication
              systems, electronic gadgets, circuits, programming of
              Microcontroller, Digital System Design etc. and enables students
              to choose the correct path for their career. The department also
              encourages research in the field of Electonics &amp;
              communication. The department admires technology development
              through innovations and its exploitation for the benefit of human
              kind. Department offers quality education through use of modern
              reaching aids technique and to undertake research in engineering
              and technology. Students are also encouraged to undergo supervised
              practical training in different industries so as to get hand on
              experience and become employable technocrats.
            </p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default ETCHODDesk;
