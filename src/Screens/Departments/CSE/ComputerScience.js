import React from "react";
import Main from "../../../ReusableComponents/Main";
import DeptMenu from "../Reusables/DeptMenu";
import NavLinks from "./NavLinks";
import "../Reusables/CSS/DeptHome.css";
import CSESVG from "../Reusables/SVGIllustrations/CSESVG";
const ComputerScience = () => {
  return (
    <Main className="container-lg cse w-100 m-2 p-0">
      <div className="row deptcont">
        <DeptMenu dept="Computer Science" subMenu={NavLinks} />
        <div className="col text-dark w-100">
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 w-100 p-3"
            data-target="#navbar-example3"
            data-offset="0"
          >
            <div className="illustration-cont">
              <CSESVG width="300" height="300" />
            </div>
            <p className="m-1">
              The Computer Science and Engineering (CSE) program was started in
              the year 2012. The main focus of the department is to deliver the
              professionals with strong fundamentals in Computer Science and
              Engineering domain. The department has well qualified and
              experienced teaching faculty members with various specializations.
              The department has maintained a student staff ratio of 15:1, has
              excellent infrastructure with state of the art equipment and
              software tools. Department regularly organizes a series of
              lectures by experts &amp; professional of good repute, helping the
              students to be aware of the Global Scenario.
            </p>
            <div className="row">
              <div className="col-4"></div>
              <div className="col-4">
                <h4>Check Us out on..</h4>
              </div>
            </div>
            <div className="outsource">
              <div className="">
                <a
                  href="http://www.dtemaharashtra.gov.in/StaticPages/frmSearchInstitute.aspx"
                  target="blank"
                  className="btn btn-info rounded"
                >
                  DTE
                </a>
              </div>
              <div className="">
                <a
                  href="https://www.facilities.aicte-india.org/dashboard/pages/dashboardaicte.php"
                  target="blank"
                  className="btn btn-info rounded"
                >
                  AICTE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default ComputerScience;
