import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/NavBar.css";
import PDFModal from "./PDFModal";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

  const [isPDFopen, setIsPDFopen] = useState(false);
  const [currentlyOpenPDFURL, setCurrentlyopenPDFURL] = useState("");

  const closePDF = () => {
    setIsPDFopen(false);
    setCurrentlyopenPDFURL("");
  };

  const openPDF = (url) => {
    setCurrentlyopenPDFURL(url);
    setIsPDFopen(true);
  };

  return (
    <div className="navbar-cont container p-0 w-100">
      <header>
        {isPDFopen && (
          <PDFModal url={currentlyOpenPDFURL} closePDF={closePDF} />
        )}
        <div className="contains">
          <div className="logo"></div>
          <nav className={isOpen ? "active" : ""}>
            <ul>
              <li>
                <Link to="/" className="a">
                  HOME
                </Link>
              </li>
              <li
                className={
                  openSubmenuIndex === 1 ? "sub-menu active" : "sub-menu"
                }
                onClick={(e) => {
                  e.preventDefault();
                  if (openSubmenuIndex === 1) {
                    setOpenSubmenuIndex(null);
                  } else {
                    setOpenSubmenuIndex(1);
                  }
                }}
              >
                <Link className="a">ABOUT US</Link>
                <ul>
                  <li>
                    <Link to="/about/logo" className="a">
                      About Our Logo
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/sgp" className="a">
                      About SG Polytechnic
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/philosophy" className="a">
                      Philosophy Of SGP
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/vision" className="a">
                      Vision, Mission, Goal
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/quality" className="a">
                      Quality Policy & objectives
                    </Link>
                  </li>

                  <li>
                    <Link to="/about/Affiliation" className="a">
                      Affiliations & Certifications
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/differentiator" className="a">
                      Differentiators
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/achievements" className="a">
                      Achievements
                    </Link>
                  </li>

                  <li>
                    <Link to="/about/socialresponsiblities" className="a">
                      Social Responsibilities
                    </Link>
                  </li>
                </ul>
              </li>

              <li
                className={
                  openSubmenuIndex === 2 ? "sub-menu active" : "sub-menu"
                }
                onClick={(e) => {
                  e.preventDefault();
                  if (openSubmenuIndex === 2) {
                    setOpenSubmenuIndex(null);
                  } else {
                    setOpenSubmenuIndex(2);
                  }
                }}
              >
                <Link className="a">MANAGEMENT</Link>
                <ul>
                  <li>
                    <Link to="/management/trust" className="a">
                      About Trust
                    </Link>
                  </li>
                  <li>
                    <Link to="/management/board" className="a">
                      Trust Board Of Directors
                    </Link>
                  </li>
                  <li>
                    <Link to="/management/chairman" className="a">
                      Chairman’s Message
                    </Link>
                  </li>
                  <li>
                    <Link to="/management/secretary" className="a">
                      A Word From Secretory
                    </Link>
                  </li>
                  <li>
                    <Link to="/management/trustee" className="a">
                      Trustees Thoughts
                    </Link>
                  </li>
                  <li>
                    <Link to="/management/principal" className="a">
                      Principals Desk
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="/management/directors" className="a">
                      SGI Board Of Directors
                    </Link>
                  </li> */}
                  <li>
                    <Link to="/management/govern" className="a">
                      Governing Body
                    </Link>
                  </li>
                </ul>
              </li>

              <li
                className={
                  openSubmenuIndex === 3 ? "sub-menu active" : "sub-menu"
                }
                onClick={(e) => {
                  e.preventDefault();
                  if (openSubmenuIndex === 3) {
                    setOpenSubmenuIndex(null);
                  } else {
                    setOpenSubmenuIndex(3);
                  }
                }}
              >
                <Link className="a">ACADEMICS</Link>
                <ul>
                  <li>
                    <Link to="/academics/calendars" className="a">
                      Academic Calendar
                    </Link>
                  </li>
                  <li>
                    <Link to="/academics/results" className="a">
                      Result
                    </Link>
                  </li>
                  <li>
                    <Link to="/academics/committee" className="a">
                      Committees
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => {
                        openPDF(
                          "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/staticFiles%2FantiraggingAct.pdf?alt=media&token=b60fbc30-3821-4b27-88ec-d665d7aba92c"
                        );
                      }}
                      className="a"
                    >
                      Ragging Act 1999
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => {
                        openPDF(
                          "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/staticFiles%2Fanticapitationfee.pdf?alt=media&token=cd64d6f8-c1f4-4f10-ab97-0791e2727677"
                        );
                      }}
                      className="a"
                    >
                      Capitation Fee Act 1987
                    </Link>
                  </li>
                  <li>
                    <Link to="/academics/auditreports" className="a">
                      Audit Reports
                    </Link>
                  </li>
                  <li>
                    <Link to="/academics/newsletter" className="a">
                      Institute News Letters
                    </Link>
                  </li>
                </ul>
              </li>

              {/* <li
                className={
                  openSubmenuIndex === 4 ? "sub-menu active" : "sub-menu"
                }
                onClick={(e) => {
                  e.preventDefault();
                  if (openSubmenuIndex === 4) {
                    setOpenSubmenuIndex(null);
                  } else {
                    setOpenSubmenuIndex(4);
                  }
                }}
              >
                <Link className="a">INFRASTRUCTURE</Link>
                <ul>
                  <li>
                    <Link to="/infrastructure/about" className="a">
                      About Infrastructure
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="a">
                      Campus Overview
                    </Link>
                  </li>
                  <li>
                    <Link to="/infrastructure/overview" className="a">
                      Admin Building
                    </Link>
                  </li>

                  <li>
                    <Link to="/infrastructure/workshop" className="a">
                      Workshop
                    </Link>
                  </li>
                  <li>
                    <Link to="/infrastructure/auditorium" className="a">
                      Auditorium
                    </Link>
                  </li>

                  <li>
                    <Link to="/infrastructure/conference" className="a">
                      Conference Hall
                    </Link>
                  </li>
                  <li>
                    <Link to="/infrastructure/amphi" className="a">
                      Amphi Theatre
                    </Link>
                  </li>
                </ul>
              </li> */}

              <li
                className={
                  openSubmenuIndex === 5 ? "sub-menu active" : "sub-menu"
                }
                onClick={(e) => {
                  e.preventDefault();
                  if (openSubmenuIndex === 5) {
                    setOpenSubmenuIndex(null);
                  } else {
                    setOpenSubmenuIndex(5);
                  }
                }}
              >
                <Link className="a">DEPARTMENTS</Link>
                <ul>
                  <li>
                    <Link to="/department/fy" className="a">
                      Basic Sci &amp; Humanities
                    </Link>
                    <Link to="/department/cse" className="a">
                      Computer Science
                    </Link>
                  </li>
                  <li>
                    <Link to="/department/civil" className="a">
                      Civil Engineering
                    </Link>
                  </li>
                  <li>
                    <Link to="/department/mech" className="a">
                      Mechanical Engineering
                    </Link>
                  </li>
                  <li>
                    <Link to="/department/electrical" className="a">
                      Electrical Engineering
                    </Link>
                  </li>
                  <li>
                    <Link to="/department/entc" className="a">
                      E & TC
                    </Link>
                  </li>
                  <li>
                    <Link to="/department/library" className="a">
                      Library
                    </Link>
                  </li>
                  <li>
                    <Link to="/department/admin/profile" className="a">
                      Administration
                    </Link>
                  </li>
                </ul>
              </li>

              <li
                className={
                  openSubmenuIndex === 6 ? "sub-menu active" : "sub-menu"
                }
                onClick={(e) => {
                  e.preventDefault();
                  if (openSubmenuIndex === 6) {
                    setOpenSubmenuIndex(null);
                  } else {
                    setOpenSubmenuIndex(6);
                  }
                }}
              >
                <Link to="/admissions" className="a">
                  ADMISSIONS
                </Link>
              </li>

              <li
                className={
                  openSubmenuIndex === 7 ? "sub-menu active" : "sub-menu"
                }
                onClick={(e) => {
                  e.preventDefault();
                  if (openSubmenuIndex === 7) {
                    setOpenSubmenuIndex(null);
                  } else {
                    setOpenSubmenuIndex(7);
                  }
                }}
              >
                <Link className="a">FACILITIES</Link>
                <ul>
                  <li>
                    <Link to="/facilities/hostel" className="a">
                      Hostel
                    </Link>
                  </li>
                  <li>
                    <Link to="/infrastructure/classroom" className="a">
                      Class rooms
                    </Link>
                  </li>
                  <li>
                    <Link to="/facilities/laboratories" className="a">
                      Laboratories
                    </Link>
                  </li>
                  <li>
                    <Link to="/facilities/gymnasium" className="a">
                      Gymnasium
                    </Link>
                  </li>
                  <li>
                    <Link to="/facilities/pool" className="a">
                      Swimming Pool
                    </Link>
                  </li>
                  <li>
                    <Link to="/infrastructure/auditorium" className="a">
                      Auditorium
                    </Link>
                  </li>
                  <li>
                    <Link to="/infrastructure/conference" className="a">
                      Conference Hall
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="/infrastructure/amphi" className="a">
                      Amphi Theatre
                    </Link>
                  </li> */}
                  <li>
                    <Link to="/infrastructure/foodcourt" className="a">
                      Cafeteria
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="" className="a">
                      Health Care
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="a">
                      ATM
                    </Link>
                  </li> */}
                  <li>
                    <Link to="/facilities/ground" className="a">
                      Playing Ground
                    </Link>
                  </li>
                  <li>
                    <Link to="/facilities/tennis" className="a">
                      Tennis Court
                    </Link>
                  </li>
                  <li>
                    <Link to="/facilities/more" className="a">
                      More...
                    </Link>
                  </li>
                </ul>
              </li>

              <li
                className={
                  openSubmenuIndex === 8 ? "sub-menu active" : "sub-menu"
                }
                onClick={(e) => {
                  e.preventDefault();
                  if (openSubmenuIndex === 8) {
                    setOpenSubmenuIndex(null);
                  } else {
                    setOpenSubmenuIndex(8);
                  }
                }}
              >
                <Link className="a">PLACEMENT</Link>
                <ul>
                  <li>
                    <Link to="/placement/officer" className="a">
                      Placement Officer
                    </Link>
                  </li>
                  <li>
                    <Link to="/placement/report" className="a">
                      Placement Report
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact" className="a">
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
          <div
            className="menu-toggle"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
