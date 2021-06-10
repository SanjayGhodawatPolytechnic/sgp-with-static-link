import React from "react";

import Main from "../../ReusableComponents/Main";

const pool = () => {
  const Items = [
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FSwimPool1.jpg?alt=media&token=b575dfee-712a-43d4-850a-02a3a6df1d95",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FSwimPool2.jpg?alt=media&token=38778dab-4aab-4341-b0c8-69860c2a86b0",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FSwimPool3.jpg?alt=media&token=a382b686-07c6-4b8a-8a50-24d256e02d56",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FSwimPool4.jpg?alt=media&token=fd2048db-9d9b-4b2e-94c7-1f9a2ad13dbe",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FSwimPool5.jpg?alt=media&token=2e895a31-87a7-4aab-89bf-b1c538ed8247",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FSwimPool6.jpg?alt=media&token=c5be63b2-4e52-4ab0-93e4-544a5531176c",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FSwimPool7.jpg?alt=media&token=0ba3bd9b-ca0d-4a88-9e95-aae24da1651d",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FSwimPool8.jpg?alt=media&token=ad207ad0-e762-4aea-9472-f991ef9bc83a",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FSwimPool9.jpg?alt=media&token=f4e8cdbb-657e-4780-a936-ac22b2b2259b",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FSwimPool10.jpg?alt=media&token=55021beb-0152-474f-a6e0-8265eeb0934a",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FSwimPool11.jpg?alt=media&token=20794d6d-8f82-41ea-99ac-48c968de866a",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FSwimPool12.jpg?alt=media&token=ee289b56-bae0-4c3c-ba8c-49e6681eb618",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FSwimPool13.jpg?alt=media&token=7ee85d01-bd57-4839-9840-3f7d3cb81adc",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FSwimPool14.jpg?alt=media&token=d9f640ce-021e-4781-a6f9-068947e925b5",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FSwimPool15.jpg?alt=media&token=743f1b2d-c73f-4a0c-a8a6-b45a51d70e30",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FSwimPool16.jpg?alt=media&token=f6134d7d-654f-4c8b-9aab-2a95f60efacf",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FSwimPool17.jpg?alt=media&token=8d76cee8-8509-4427-8dc2-eddd627a507f",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FSwimPool18.jpg?alt=media&token=7a631ffc-17a4-400a-ae54-c70e09af27e3",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FSwimPool19.jpg?alt=media&token=9017275b-c068-466f-a9dc-bdb5fd02cbe9",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FSwimPool20.jpg?alt=media&token=4aa4df54-67ac-4fc4-b372-8413f10120bc",
    },
  ];

  return (
    <Main>
      <div className="main">
        <div className="container">
          <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">
            Swimming Pool
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

export default pool;
