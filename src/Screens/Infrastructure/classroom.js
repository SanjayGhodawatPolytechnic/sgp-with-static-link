import React from "react";
import "./CSS/Overview.css";
import Main from "../../ReusableComponents/Main";

const ClassRoom = () => {
  const Items = [
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FclassNamerooms1.jpg?alt=media&token=2ecb124f-cd69-4153-8bdf-4703ac99bf3e",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FclassNamerooms2.jpg?alt=media&token=20a7cc77-172e-46e6-b115-6d587a802323",
    },
  ];

  return (
    <Main>
      <div className="main">
        <div className="container">
          <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">
            classNameroom
          </h1>
          <hr className="mt-2 mb-5" />
          <div className="row text-center text-lg-left">
            {Items.map((d, i) => (
              <div className="col-lg-3 col-md-4 col-6">
                <a href="#" className="d-block mb-4 h-100">
                  <img
                    className="img-fluid img-thumbnail"
                    src={d.image}
                    alt=""
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
        <p>
          Academic ambience would be the highest priority for all className
          rooms & Labs which will be constructed as per and more than AICTE,
          DTE, MSBTE norms
        </p>
      </div>
    </Main>
  );
};

export default ClassRoom;
