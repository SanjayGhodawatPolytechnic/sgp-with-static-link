import React from "react";
import Main from "../../ReusableComponents/Main";
import "./CSS/management.css";
const managementGovern = () => {
  return (
    <Main isSlideShow={true}>
      <br />
      <br />

      <div>
        <div className="card mar">
          <p className="card-text">
            The governing body is unambiguously and collectively responsible for
            overseeing the institution's activities, determining its future
            direction and fostering an environment in which the institutional
            mission is achieved. The body meets twice a year and proceedings of
            the meetings should be maintained properly. The college is governed
            by the governing body which is constituted as per AICTE and trust
            norms.
          </p>
        </div>

        <br />
        <br />
        <br />
        <table className="table table-sm  mar  table-striped">
          <tbody>
            <tr>
              <th>Chairman</th>
              <td>Mr. Sanjay D. Ghodawat</td>
            </tr>
            <tr>
              <th>Secretary</th>
              <td>Mr. Shrenik Ghodawat</td>
            </tr>
            <tr>
              <th>Trustee</th>
              <td>Mr. Vinayak V. Bhosale</td>
            </tr>
            <tr>
              <th>Ex- Vice-Chancellor</th>
              <td>Dr. P. B. Sabale</td>
            </tr>
            <tr>
              <th>Director, SGI</th>
              <td>Dr. Venkatesh A. Raikar</td>
            </tr>
            <tr>
              <th>Member</th>
              <td>Dr. D. R. Nandanwar</td>
            </tr>

            <tr>
              <th>Industrialist</th>
              <td>Mr. Devanand Londhe</td>
            </tr>
            <tr>
              <th>FE Coordinator</th>
              <td>Ms. S. B. Mahadik</td>
            </tr>
            <tr>
              <th>HOD, Mechanical Dept</th>
              <td>Mr. R. B. Kumbar</td>
            </tr>
            <tr>
              <th>Principal,</th>
              <td>Mr. Virat V. Giri</td>
            </tr>
          </tbody>
        </table>
        <div className="mar">
          <h5>Responsibilities of Governing Body are:-</h5>
          <li>
            To monitor and evaluate the teaching programs in the college and
            suggest remedial measures, to improve the academic performance to
            confirm to the standard of teaching and the progress of studies in
            the college as laid down by the University.
          </li>
          <li>
            To appoint the Principal, the teaching staff on the recommendations
            of the selection committees constituted under the relevant
            regulations of the MSBTE
          </li>
          <li>
            To monitor faculty deployment and development, placement and
            industry-institute interaction activities in the institute/college
            and suggest remedial measures wherever necessary
          </li>
          <li>
            To approve yearly budget and to sanction budgets for major purchases
            of the institute.
          </li>
          <li>
            To accord approval for appointment of teaching and non-teaching
            staff required for smooth functioning of the academics
          </li>
          <li>
            To give necessary approval for appointment of additional staff for
            value added activities.
          </li>
        </div>
        <br />
        <br />
        <br />
      </div>
    </Main>
  );
};

export default managementGovern;
