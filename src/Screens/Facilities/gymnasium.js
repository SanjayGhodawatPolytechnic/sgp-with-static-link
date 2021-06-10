import React from "react";

import Main from "../../ReusableComponents/Main";

const gymnasium = () => {
  const Items = [
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FGym1.jpg?alt=media&token=75abe4ed-0a20-478d-9e34-bf4e337dde80",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FGym2.jpg?alt=media&token=09bac824-1bd4-4f35-8562-548e9e4a755b",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FGym3.jpg?alt=media&token=87614259-2b81-4ef7-83d0-5cd483d577a6",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FGym4.jpg?alt=media&token=ca128a23-b385-40de-ab11-f1a59c9869a5",
    },
  ];

  return (
    <Main>
      <div className="main container p-4">
        <div className="container">
          <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">
            Gymnasium
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
      </div>
    </Main>
  );
};

export default gymnasium;
