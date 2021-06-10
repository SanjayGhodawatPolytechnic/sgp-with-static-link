import React from "react";
import Main from "../../ReusableComponents/Main";
import "./CSS/administrative.css";

const Admissioncell = () => {
  return (
    <Main>
      <br />
      <h4 style={{ color: "#ff3c38" }}>
        For more information and queries about admissions , admission process
        and other admission related information contact -
      </h4>
      <div className="row">
        <div className="col-sm-3 ">
          <div className="card admincard">
            <div className="card-body">
              <h5 className="card-title">Mr. Vinayak Bhosale</h5>
              <p className="card-text">
                Trustee - SGI
                <br /> Cell No. : 99213 70555 <br /> Email
                :vinayak@sginstitute.in
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card admincard">
            <div className="card-body">
              <h5 className="card-title">Mr. Virat Giri</h5>
              <p className="card-text">
                Principal
                <br /> Cell No. : 90110 18830
                <br /> Phone No. : 0230 - 2463801
                <br /> Email :principal@sgipolytechnic.in
              </p>
            </div>
          </div>
        </div>

        {/*  ********* */}

        <div className="col-sm-3">
          <div className="card admincard">
            <div className="card-body">
              <h5 className="card-title">Mr. Pratik Awati</h5>
              <p className="card-text">
                Admission Incharge
                <br /> Cell No. : 90284 56653 <br /> Email
                :pratik.awati@sgipolytechnic.in
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card admincard">
            <div className="card-body">
              <h5 className="card-title">Mr. Abhijeet Kulkarni</h5>
              <p className="card-text">
                Office Superintendent
                <br /> Cell No. : 90110 67524 <br /> Phone No. : 0230 - 2463804
                <br /> Email :abhijeet.kulkarni@sgipolytechnic.in
              </p>
            </div>
          </div>
        </div>

        {/* ****** */}
      </div>
    </Main>
  );
};

export default Admissioncell;
