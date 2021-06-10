import React from "react";
import Main from "../../ReusableComponents/Main";
import "./CSS/management.css";

function managementDirectors() {
  return (
    <Main isSlideShow={true}>
      <br />
      <br />
      <div className="row mar">
        <div className="col-sm-12">
          <div className="card-group vgr-cards">
            <div className="card rainbow ">
              <div className="view overlay"></div>
              <div className="card-img-body">
                <img
                  alt="chairman"
                  className="img-fluid"
                  src="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FPic%2FSanjay-ghodawat.jpg?alt=media&token=829ea27c-a74c-4080-8b0c-50186975d652"
                  alt="Sanjay ghodawat"
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">Mr. Sanjay Ghodawat</h3>
                <br />
                <i className="fas fa-circle mr-3"></i>Chairman
                <br />
                <br />
                <i className="fas fa-circle mr-3"></i>Managing Principal -
                Sanjay Ghodawat Group of Industries
                <br /> <br />
                <p>
                  {" "}
                  <i className="fas fa-circle mr-3"></i>A visionary and an
                  influential leader founded Ghodawat Industries (I) pvt. Ltd in
                  1993 and achieved a remarkable success in a short span. Mr.
                  Sanjay Ghodawat has been awarded by various Institutions and
                  organizations for his immense contribution.
                  <br />
                </p>{" "}
                <br />
              </div>
            </div>
            <br />
            <div className="card rainbow">
              <div className="view overlay"></div>
              <div className="card-img-body">
                <img
                  className="img-fluid"
                  src="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FPic%2FShrenik-Ghodawat1.jpg?alt=media&token=172ab7d0-80f4-4b61-8219-6f16ba41fc02"
                  alt="shrenik"
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">Mr. Shrenik Ghodawat</h3>
                <br />
                <i className="fas fa-circle mr-3"></i>Master of Business
                Administration
                <br />
                <br />
                <i className="fas fa-circle mr-3"></i>Secretary
                <br /> <br />
              </div>
            </div>

            <br />
            <div className="card rainbow">
              <div className="view overlay"></div>
              <div className="card-img-body">
                <img
                  className="img-fluid"
                  src="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FPic%2FVinayak-Bhosale.jpg?alt=media&token=cca14e7d-f242-4708-ad16-b06b2711fbd0"
                  alt="vinayak bhosle"
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">Mr. Vinayak Bhosale</h3>
                <br />
                <i className="fas fa-circle mr-3"></i>Electronics Engineer
                <br />
                <br />
                <i className="fas fa-circle mr-3"></i>Trustee
                <br /> <br />
              </div>
            </div>

            <br />
            <div className="card rainbow">
              <div className="view overlay"></div>
              <div className="card-img-body">
                <img
                  className="img-fluid"
                  src="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FPic%2FVirat-Giri.jpg?alt=media&token=85dfe4eb-48b0-479d-939d-8395778aa4d7"
                  alt="Virat giri"
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">Mr.Virat Giri</h3>
                <br />
                <i className="fas fa-circle mr-3"></i>M.Tech
                <br />
                <br />
                <i className="fas fa-circle mr-3"></i>Principal
                <br /> <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}

export default managementDirectors;
