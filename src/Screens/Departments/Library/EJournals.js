import React from "react";
import Main from "../../../ReusableComponents/Main";
import DeptMenu from "../Reusables/DeptMenu";
import NavLinks from "./NavLinks";
import "../Reusables/CSS/DeptHome.css";

const EJournals = () => {
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
            <div className="card ">
              <div className="card-header text-center ">
                Guidelines for using electronic resources, computers and
                photocopies
              </div>
              <div className="card-body">
                <li className="card-text">
                  You can only use the computers if you are a member of the
                  library
                </li>
                <li className="card-text">
                  Electronic databases can only be used in a way that complies
                  with the database copyright holders' terms and conditions.
                  Unauthorized use such as redistributing or selling data is
                  strictly prohibited
                </li>
                <li className="card-text">
                  Material must be photocopied within the rules of copyright.
                </li>
              </div>
            </div>

            <div className="card w-100 p-2">
              <div className="card-body">
                <h4 className="card-text text-dark">IEEE</h4>
                <div className="card-text">
                  IEEE is the world's largest professional association dedicated
                  to advancing technological innovation and excellence for the
                  benefit of humanity. IEEE and its members inspire a global
                  community through IEEE's highly cited publications,
                  conferences, technology standards, and professional and
                  educational activities
                </div>
              </div>
              <div className="card-body">
                <h4 className="card-text text-dark">ASME</h4>
                <div className="card-text">
                  ASME is a not-for-profit membership organization that enables
                  collaboration, knowledge sharing, career enrichment, and
                  skills development across all engineering disciplines, toward
                  a goal of helping the global engineering community develop
                  solutions to benefit lives and livelihoods. Founded in 1880 by
                  a small group of leading industrialists, ASME has grown
                  through the decades to include more than 120,000 members in
                  over 150 countries worldwide
                </div>
              </div>
              <div className="card-body">
                <h4 className="card-text text-dark">ASCE</h4>
                <div className="card-text">
                  ASCE founded in 1852, the American Society of Civil Engineers
                  (ASCE) represents more than 140,000 members of the civil
                  engineering profession worldwide and is America's oldest
                  national engineering society
                </div>
              </div>
            </div>
            <table className="table .table-sm  mar">
              <tbody>
                <tr>
                  <th>E Journal</th>
                  <th>Link to Access E-Resources</th>
                </tr>
                <tr>
                  <th>IEEE</th>
                  <td>
                    <a href="http://www.ieee.org/ieeexplore">
                      http://www.ieee.org/ieeexplore
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>ASME</th>
                  <td>
                    <a href="http://asmedl.org/jounals/doc/ASMEDl-home/jrnls">
                      http://asmedl.org/jounals/doc/ASMEDl-home/jrnls
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>ASCE</th>
                  <td>
                    <a href="http://www.asce.org">http://www.asce.org</a>
                  </td>
                </tr>
                <tr>
                  <th>McGraw Hill</th>
                  <td>
                    <a href="http://2.accessengineeringlibrary.com">
                      http://2.accessengineeringlibrary.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>ELSEVIER</th>
                  <td>
                    <a href="www.sciencedirect.com">www.sciencedirect.com</a>
                  </td>
                </tr>
                <tr>
                  <th>ASTM</th>
                  <td>
                    <a href="http://enterprise.astm.org">
                      http://enterprise.astm.org
                    </a>
                  </td>
                </tr>

                <tr>
                  <th>SPRINGER</th>
                  <td>
                    <a href="www.springer.com">www.springer.com</a>
                  </td>
                </tr>
                <tr>
                  <th>J Gate Engineering &amp; Management</th>
                  <td>
                    <a href="http://www.jagte.in">http://www.jagte.in</a>,{" "}
                    <a href="http://www.j-gate.informindia.co.in">
                      http://www.j-gate.informindia.co.in
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>EBSCO</th>
                  <td>
                    <a href="http://search.ebscohost.com">
                      http://search.ebscohost.com
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default EJournals;
