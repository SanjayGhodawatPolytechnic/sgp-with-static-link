import React from "react";

import Main from "../../ReusableComponents/Main";

const ground = () => {
  const Items = [
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FPlayGround1.jpg?alt=media&token=00894b77-c887-4c34-9deb-ca337404de6a",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FPlayGround2.jpg?alt=media&token=7bea09f9-eb1b-49da-863a-033c8d7c084c",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FPlayGround3.jpg?alt=media&token=9e324aad-bd80-4f8c-bd16-a1a370046df4",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FPlayGround4.jpg?alt=media&token=7006fb98-bd29-41dd-97fe-cec5649819e5",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FPlayGround5.jpg?alt=media&token=518d98e3-3683-474b-9e48-39e76c941091",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FPlayGround6.jpg?alt=media&token=5f2c5f26-a6c8-47c3-b675-03e6ba3bf75a",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FPlayGround7.jpg?alt=media&token=b30a20f4-f2e1-423d-a581-d3437a937c28",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FPlayGround8.jpg?alt=media&token=7021ef08-e27a-4485-bbb1-8a1cccd00b35",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FPlayGround9.jpg?alt=media&token=5a73ea21-9348-4017-89e6-a478c8524f12",
    },

    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FPlayGround10.jpg?alt=media&token=bd2a0e36-63a8-4ddb-b895-3048282992e7",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FPlayGround11.jpg?alt=media&token=88c7917d-81d2-4f55-bff0-a2479fb3ecc2",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FPlayGround12.jpg?alt=media&token=678e67aa-5da3-48a6-bc09-cc00bf24957b",
    },
  ];

  return (
    <Main>
      <div className="main">
        <div className="container">
          <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">
            Playing ground
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

export default ground;
