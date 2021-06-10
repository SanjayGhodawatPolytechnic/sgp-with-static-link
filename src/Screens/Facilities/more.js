import React from "react";

import Main from "../../ReusableComponents/Main";

const more = () => {
  const Items = [
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2Fcomputer_lab.jpg?alt=media&token=ae5d9996-77c7-452b-9cc0-5be2280a2db2",
      caption: "Computer Lab",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2Fdrawing_hall.jpg?alt=media&token=68a5be5a-7dd9-4021-a27f-d9d6c4ce7650",
      caption: "Drawing Hall",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2Freading_hall.jpg?alt=media&token=84a568a9-68b8-4e5d-9d10-16f13d420c4e",
      caption: "Reading Hall",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FBus1.jpg?alt=media&token=129264d6-b6e5-4da8-b646-ed3508006a28",
      caption: "Transportation",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FHealth_Care01.jpg?alt=media&token=22ed1f7b-7825-43c3-8504-ff80af1859b3",
      caption: "Health Care",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FATM01.jpg?alt=media&token=90b58d8f-5bc8-4022-90ed-e1f570267e81",
      caption: "ATM",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FATM01.jpg?alt=media&token=90b58d8f-5bc8-4022-90ed-e1f570267e81",
      caption: "Stationary",
    },
  ];

  return (
    <Main>
      <div className="main">
        <div className="container">
          <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">
            More...
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
                  <span className="badge badge-secondary">{d.caption}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Main>
  );
};

export default more;
