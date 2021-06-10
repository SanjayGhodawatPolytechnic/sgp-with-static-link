import React from "react";
import Main from "../../../ReusableComponents/Main";
import DeptMenu from "../Reusables/DeptMenu";
import MechSVG from "../Reusables/SVGIllustrations/MechSVG";
import NavLinks from "./Nav";

const Mech = () => {
  return (
    <Main className="container-lg cse w-100 m-2 p-0">
      <div className="row deptcont">
        <DeptMenu dept="Mechanical" subMenu={NavLinks} />
        <div className="col text-dark w-100">
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 w-100 p-3"
            data-target="#navbar-example3"
            data-offset="0"
          >
            <div className="illustration-cont">
              <MechSVG width="300" height="300" />
            </div>
            <p className="m-1">
              Mechanical engineering is one of the basic engineering branches.
              It deals with design and development of all kinds of machines.
              Through innovation and inventions, it has given humanity at large
              comfort and safety for life. At SGI, we have state of the art
              infrastructure and laboratories with total investment in
              equipments of more than one crore. Taking into consideration the
              requirements of industry and research organization we have
              developed all our labs. We have always tried to be globally
              competitive in all round development of our department. Today we
              can boast of most talented bunch of students and professors being
              developed in our department. We are thus contributing in making
              the future of India bright by providing talented and skillful
              Engineers trained in our Polytechnic.
            </p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Mech;
