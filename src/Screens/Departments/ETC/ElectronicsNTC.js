import React from "react";
import Main from "../../../ReusableComponents/Main";
import DeptMenu from "../Reusables/DeptMenu";
import NavLinks from "./NavLinks";
import "../Reusables/CSS/DeptHome.css";
import ETCSVG from "../Reusables/SVGIllustrations/ETCSVG";
const ElectronicsNTC = () => {
  return (
    <Main className="container-lg w-100 m-2 p-0 cse">
      <div className="row deptcont">
        <DeptMenu dept="E &amp; TC" subMenu={NavLinks} />
        <div className="col text-dark w-100">
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3"
            data-target="#navbar-example3"
            data-offset="0"
          >
            <div className="illustration-cont">
              <ETCSVG width="300" height="300" />
            </div>
            <p className="m-1">
              Greetings!!. The department E&amp;TC is established in the year
              2012 with the intake of 60 students and currently it is having
              100+ undergraduates' students admitted.The department is having
              highly qualified; devoted & dedicated staff. The department is
              having well equipped laboratories and facilities for supporting
              our teaching.The department aims at inculcating quality education
              to bring engineers with a solid foundation in basic engineering
              principles and concepts.We strive to prepare our students to
              become technically competent engineers who will continue learning
              in an ever-changing and diverse world. As the engineering field is
              extremely demanding, future engineering students must be able to
              adapt to a new dynamic environment and react positively to new
              challenges and opportunities. Students are taught to be
              independent thinkers, create independent types of work, write
              technical reports and present their work before classNamemates and
              faculty members. Workshops &amp; seminars are regularly takento
              bridge the gap between curriculum &amp; industries.
            </p>
            {/* <div className="row">
              <div className="col-4"></div>
              <div className="col-4">
                <h4>Check Us out on..</h4>
              </div>
            </div>
            <div className="row m-0 p-0 w-100">
              <div className="col">
                <a
                  href="http://www.dtemaharashtra.gov.in/StaticPages/frmSearchInstitute.aspx"
                  target="blank"
                  className="btn btn-danger rounded-pill w-100"
                >
                  DTE
                </a>
              </div>
              <div className="col">
                <a
                  href="https://www.facilities.aicte-india.org/dashboard/pages/dashboardaicte.php"
                  target="blank"
                  className="btn btn-danger rounded-pill w-100"
                >
                  AICTE
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </Main>
  );
};

export default ElectronicsNTC;
