import React from "react";
import Main from "../../ReusableComponents/Main";
import "./css/about.css";

function aboutAffCert() {
  return (
    <Main isSlideShow={true}>
      <div className="givmar">
        <br />
        <br />
        <div className="card w-100">
          <div className="card-header text-center ">
            Affiliations & Certifications
          </div>
          <div className="card-body">
            <p className="card-text">
              Approved by AICTE, New Delhi: Verification Link{" "}
              <a
                href="https://www.facilities.aicte-india.org/dashboard/pages/angulardashboard.php#!/approved"
                className="text-muted"
              >
                {" "}
                AICTE Dashboard{" "}
              </a>
            </p>
            <br />
            <p className="card-text">
              Recognised by Govt. of Maharashtra and DTE, Mumbai: Verification
              Link{" "}
              <a
                href="http://www.dtemaharashtra.gov.in/StaticPages/frmSearchInstitute.aspx"
                className="text-muted"
              >
                {" "}
                DTE Search Page{" "}
              </a>
            </p>
            <br />
            <p className="card-text">Affiliated to MSBTE, Mumbai</p>
          </div>
        </div>
        <br />
        <br />
      </div>
    </Main>
  );
}

export default aboutAffCert;
