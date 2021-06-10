import React from "react";
import Main from "../../ReusableComponents/Main";

function workshop() {
  return (
    <Main isSlideShow={true}>
      <div>
        <div className="card m-4 d-flex" style={{ borderRadius: 10 }}>
          <div className="row">
            <div className="col container">
              <img
                src={
                  "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2Fworkshop1.jpg?alt=media&token=e0a0a692-b0fb-463e-853f-f3447778fcd3"
                }
                className="card-img"
                alt="..."
              />
            </div>
            <div className="col container">
              <div className="card-body">
                <h5 className="card-title">
                  Workshop has following sections:-
                </h5>
                <p className="card-text">
                  <li>Carpentry, Tin Smithy, Black smithy</li>
                  <li>Welding Foundry Stores</li>
                  <li>Plastic injection moulding</li>
                  <li>Machine shop - Lathe, General purpose</li>
                </p>

                <p className="card-text">
                  Workshop is equipped with all latest machinery
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

export default workshop;
