import React from "react";
import "./CSS/Overview.css";
import Main from "../../ReusableComponents/Main";

const auditorium = () => {
  const Items = [
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FAuditorium1.jpg?alt=media&token=4520136a-9185-4ffe-bbf5-a14bf7e09e4f",
    },

    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FAuditorium2.jpg?alt=media&token=7fc5708d-ddcd-40b6-b54e-19c9d3140c17",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FAuditorium3.jpg?alt=media&token=cda8d4a8-d68e-472b-823c-d1f3b01e173a",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FAuditorium4.jpg?alt=media&token=3f3c37eb-f92c-4f8f-b171-7c43951cc3f7",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FAuditorium5.jpg?alt=media&token=3a09db81-e70c-4736-9c85-ff5db26aff8f",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FAuditorium6.jpg?alt=media&token=7e5c6620-23a5-429d-81c4-6aeac3de3bde",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FAuditorium7.jpg?alt=media&token=1709e36b-88f0-4a95-8b73-f696fb398a11",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FAuditorium8.jpg?alt=media&token=50ca46ce-d0e9-4398-823f-5ba53b918ff6",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FAuditorium9.jpg?alt=media&token=daf24d29-8a58-4730-a3dc-4428811dcaf4",
    },
  ];

  return (
    <Main>
      <div className="main">
        <div className="grid-container">
          {Items.map((d, i) => (
            <div>
              <img
                className={`grid-item grid-item-${i}`}
                src={d.image}
                alt="auditorium"
              />
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
};

export default auditorium;
