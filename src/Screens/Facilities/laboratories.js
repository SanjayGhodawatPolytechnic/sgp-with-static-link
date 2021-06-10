import React from "react";

import Main from "../../ReusableComponents/Main";

const laboratories = () => {
  const Items = [
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2Flaboratories1.jpg?alt=media&token=c055a6de-6a0e-43e9-9bfd-6eef9974a6a0",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2Flaboratories2.jpg?alt=media&token=6322e651-c96b-43c6-81bf-06021ac77636",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2Flaboratories3.jpg?alt=media&token=b7a229a8-cbd2-4e4a-8320-76bc1787da85",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2Flaboratories4.jpg?alt=media&token=427e0b53-4292-4f15-8927-3cad8ff23632",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2Flaboratories5.jpg?alt=media&token=48a0149e-9f30-4395-aa9f-f5bd283e46c4",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2Flaboratories6.jpg?alt=media&token=9dcfd63f-dd28-49d1-9d94-bf39f68a6a0b",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2Flaboratories7.jpg?alt=media&token=8afe9b0c-fe74-4468-8fbc-9dc63f335cd3",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2Flaboratories8.jpg?alt=media&token=6f2609c7-c32a-4ca8-a3e3-f0987be55623",
    },
  ];

  return (
    <Main>
      <div className="main container p-4">
        <div className="container">
          <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">
            Laboratories
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

export default laboratories;
