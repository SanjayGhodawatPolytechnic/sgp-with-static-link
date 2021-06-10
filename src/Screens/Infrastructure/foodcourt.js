import React from "react";
import "./CSS/Overview.css";
import Main from "../../ReusableComponents/Main";

const foodcourt = () => {
  const Items = [
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FFood_Court1.jpg?alt=media&token=39aa51d6-9987-4050-ad35-77500e3ddfa2",
    },

    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FFood_Court2.jpg?alt=media&token=0789a8cc-dfbc-47f4-872a-697a3e303805",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FFood_Court3.jpg?alt=media&token=bc4e6a26-9770-4172-8be3-b9ab871e3cf8",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FFood_Court4.jpg?alt=media&token=5a566b0a-e2f3-4bb0-ba71-1df65e6aac73",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FFood_Court5.jpg?alt=media&token=43618554-cdf7-42ba-90e9-32c2ee6cef5a",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FFood_Court6.jpg?alt=media&token=c37932c7-36b6-48b8-8476-8ee27db1a6c0",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FFood_Court7.jpg?alt=media&token=1d62e87b-0614-402c-8e6b-0a7d95f490ee",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FFood_Court8.jpg?alt=media&token=9c4353cc-adce-40dc-b272-23ec62b5b5db",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FFood_Court9.jpg?alt=media&token=67a83f40-bb15-44da-9272-edd5aabd824f",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FFood_Court10.jpg?alt=media&token=7bd1f126-ca8c-43a8-bac8-b1e1c4b3beeb",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FFood_Court11.jpg?alt=media&token=e78d4a2a-f30b-4abe-a514-3d46d9c41154",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FFood_Court12.jpg?alt=media&token=1ed43a04-325d-4c6a-8049-d9a5d0930090",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FFood_Court13.jpg?alt=media&token=f4ebf36b-dcde-4cef-99b4-21b39ae51c99",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FFood_Court14.jpg?alt=media&token=512943e0-cf46-4ad2-913c-2107a095f5c6",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FFood_Court15.jpg?alt=media&token=0ac6e717-8a64-4810-a336-c3f3a93bc6c9",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FFood_Court16.jpg?alt=media&token=03609077-cce4-4473-b965-ffe2d2f33779",
    },
  ];

  return (
    <Main>
      <div className="main">
        <div className="container">
          <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">
            Cafeteria
          </h1>
          <hr className="mt-2 mb-5" />
          <div className="row text-center text-lg-left">
            {Items.map((d, i) => (
              <div className="col-lg-3 col-md-4 col-6">
                <a className="d-block mb-4 h-100">
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

export default foodcourt;
