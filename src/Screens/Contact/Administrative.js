import React from "react";
import Main from "../../ReusableComponents/Main";
import "./CSS/administrative.css";

const Administrative = () => {
  return (
    <Main>
      <div className="row">
        <div className="col-sm-3 ">
          <div className="card admincard">
            <div className="card-body">
              <h5 className="card-title">Mr. Kulkarni Abhijeet Anant</h5>
              <p className="card-text">
                Office Superintendent
                <br /> Cell No. : 90110 67524
                <br /> Phone No. : 0230 - 2463804
                <br /> Email :abhijeet.kulkarni@sgipolytechnic.in
              </p>
            </div>
            <div className="card-footer text-muted">
              For general and office enquiries
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card admincard">
            <div className="card-body">
              <h5 className="card-title">Mrs. Birnale Dipali Dhanwantri</h5>
              <p className="card-text">
                HR Clerk
                <br /> Phone No. : 0230 - 2463800
                <br /> Email :dipali.birnale@sgipolytechnic.in
              </p>
            </div>
            <div className="card-footer text-muted">
              For Human Resource related
            </div>
          </div>
        </div>

        {/*  ********* */}

        <div className="col-sm-3">
          <div className="card admincard">
            <div className="card-body">
              <h5 className="card-title">Mrs. Shinde Amruta Amol</h5>
              <p className="card-text">
                Account Clerk
                <br /> Phone No. : 0230 - 2463804
                <br /> Email :amruta.shinde@sgipolytechnic.in
              </p>
            </div>
            <div className="card-footer text-muted">
              For fees and account related
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card admincard">
            <div className="card-body">
              <h5 className="card-title">Mr. Patil Kishor Ashok</h5>
              <p className="card-text">
                Clerk
                <br /> Phone No. : 0230 - 2463804
                <br /> Email :kishor.patil@sgipolytechnic.in
              </p>
            </div>
            <div className="card-footer text-muted">
              Student and Examination Section
            </div>
          </div>
        </div>

        {/* ****** */}

        <div className="col-sm-3">
          <div className="card admincard">
            <div className="card-body">
              <h5 className="card-title">Mrs. Shinde Amruta Amol</h5>
              <p className="card-text">
                Clerk
                <br /> Phone No. : 0230 - 2463804
                <br /> Email :kishor.patil@sgipolytechnic.in
              </p>
            </div>
            <div className="card-footer text-muted">Admission Section</div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card admincard">
            <div className="card-body">
              <h5 className="card-title">Mr. Shinde Santosh Bapu</h5>
              <p className="card-text">
                Clerk
                <br /> Phone No. : 0230 - 22463804
                <br /> Email : santosh.shinde@sgipolytechnic.in
              </p>
            </div>
            <div className="card-footer text-muted">
              Scholarship and EBC Section
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Administrative;
