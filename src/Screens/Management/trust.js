import React from "react";
import Main from "../../ReusableComponents/Main";
import "./CSS/management.css";

function managementTrust() {
  return (
    <Main isSlideShow={true}>
      <div>
        <br />
        <br />
        <div className="card mb-3 trust " style={{ borderRadius: 10 }}>
          <div className="row ">
            <div className="col-lg-3">
              <br />
              <div className="row">
                <div className="col-lg-0 col-md-0 col-sm-0 col-2"></div>
                <img
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FPic%2Fsushila-ghodawat.jpg?alt=media&token=9170d346-c7ec-41b0-a2d9-a179203549d9"
                  }
                  className="card-img col-8"
                  alt="..."
                />
                <div className="col-lg-0 col-md-0 col-sm-0 col-2"></div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card-body">
                <h3 className="card-title">About our Trust</h3>
                <hr />
                <h6>Late Sou. Sushila Danchand Ghodawat</h6>
                <h6>Sou. Sushila Danchand Ghodawat Charitable Trust</h6>

                <p className="card-text">
                  Sanjay Ghodawat Polytechnic is dedicated to Smt. Sushila
                  Danchand Ghodawat the mother of Shri. Sanjay D. Ghodawat. This
                  Institutes comes under the umbrella of Smt. Sushila Danchand
                  Ghodawat Trust built in the memory of Smt. Sushila Danchand
                  Ghodawat. She was highly intelligent as well as considerate.
                  Her desire to start an educational institution was brought
                  into reality by Shri. Sanjay D. Ghodawat
                </p>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
      </div>
    </Main>
  );
}

export default managementTrust;
