import React from "react";
import Main from "../../../ReusableComponents/Main";
import DeptMenu from "../Reusables/DeptMenu";
import CivilSVG from "../Reusables/SVGIllustrations/CivilSVG";
import NavLinks from "./Navlinks";

const Civil = () => {
  return (
    <Main className="container-lg cse w-100 m-2 p-0">
      <div className="row deptcont">
        <DeptMenu dept="Civil" subMenu={NavLinks} />
        <div className="col text-dark w-100">
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3"
            data-target="#navbar-example3"
            data-offset="0"
          >
            <div className="illustration-cont">
              <CivilSVG width="300" height="300" />
            </div>
            <p className="m-1">
              Civil Engineering is a professional engineering discipline that
              deals with the design, construction, and maintenance of the
              physical and naturally built environment, including works like
              roads, bridges, canals, dams, and buildings. Civil engineering is
              the second-oldest engineering discipline after military
              engineering, and it is defined to distinguish non-military
              engineering from military engineering It is traditionally broken
              into several sub-disciplines including architectural engineering,
              environmental engineering, geotechnical engineering, control
              engineering, structural engineering, earthquake engineering,
              transportation engineering, forensic engineering, municipal or
              urban engineering, water resources engineering, materials
              engineering, wastewater engineering, offshore engineering,
              aerospace engineering, facade engineering, quantity surveying,
              coastal engineering, construction surveying, and construction
              engineering. Civil Engineering takes place in the public sector
              from municipal through to national governments, and in the private
              sector from individual homeowners through to international
              companies..
            </p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Civil;
