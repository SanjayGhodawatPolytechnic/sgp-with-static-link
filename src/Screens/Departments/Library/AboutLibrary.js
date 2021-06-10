import React from "react";
import Main from "../../../ReusableComponents/Main";
import DeptMenu from "../Reusables/DeptMenu";
import NavLinks from "./NavLinks";
import "../Reusables/CSS/DeptHome.css";
import LibrarySVG from "../Reusables/SVGIllustrations/LibrarySVG";
const AboutLibrary = () => {
  return (
    <Main className="container-lg cse w-100 m-2 p-0">
      <div className="row deptcont">
        <DeptMenu dept="Library" subMenu={NavLinks} />
        <div className="col text-dark w-100">
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 w-100 p-3"
            data-target="#navbar-example3"
            data-offset="0"
          >
            <div className="illustration-cont">
              <LibrarySVG width="300" height="300" />
            </div>
            <p className="m-1">
              Central Library occupies a place of pride in SGP and is an
              essential component of the institute's outstanding education
              mission. It is a most lively place on the campus providing a safe,
              comfortable and friendly environment that enables learning and
              advancement of knowledge, and promotes discovery and scholarship.
              The mission of the Central Library is to facilitate creation of
              new knowledge through acquisition, organization and dissemination
              of knowledge resources and providing for value added services.
            </p>
            <div className="card ">
              <div className="card-header text-center ">
                Library Computerization
              </div>
              <div className="card-body">
                <p className="card-text">
                  The Library uses Library Management software package which is
                  an integrated multi-user library management system that
                  supports all in-house operations of the Library. The Library
                  Management software consists of modules on acquisition,
                  cataloguing, circulation, serial control, utilities and OPAC.
                  Retrospective conversion of bibliographic records has been
                  completed and more than 3000 bibliographic records of books
                  available in the Library can now be accessed through the OPAC.
                  The database of books available in the Library is being
                  updated on day to day basis with details of recently acquired
                  books.
                </p>
              </div>
            </div>

            <div className="card ">
              <div className="card-header text-center ">IT Infrastructure</div>
              <div className="card-body">
                <p className="card-text">
                  Central Library is a part of the Institute-wide network built
                  around a fiber optic Ethernet backbone comprising of five
                  routing switches. The library is connected to the backbone
                  through one of the routing switches. Institutes backbone in
                  turn is connected to 10 mbps of Internet band width on leased
                  links from BSNL. The library has 2 servers, 10 PCs and other
                  accessories adequate to cater to the needs of users.10PC are
                  meant for users to access OPAC, databases, e-books, e-journals
                  and other e-resources. Currently the reading areas in the
                  library have WI-Fi enabled to provide wireless access to the
                  Internet. Users are welcome to use their laptops in the
                  library.
                </p>
              </div>
            </div>
            <div className="card ">
              <div className="card-header text-center ">Library Objectives</div>
              <div className="card-body">
                <li className="card-text">
                  To acquire, organize and preserve a collection of information
                  resources as required for supporting teaching and research of
                  students, faculty and alumni and other members of the SGP.
                </li>
                <li className="card-text">
                  To maintain and organize the physical environment to be
                  conducive to the preservation and use of the Library's
                  resources by staff and users
                </li>
                <li className="card-text">
                  To facilitate access to and use of the Library's own resources
                  and external sources of information
                </li>
                <li className="card-text">
                  To ensure resources are made available in the most convenient
                  and user-friendly formats possible with access to support
                  services where appropriate
                </li>
                <li className="card-text">
                  To offer instruction/expert guidance needed to users for
                  effective use of the Library
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default AboutLibrary;
