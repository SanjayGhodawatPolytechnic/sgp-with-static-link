import React from "react";
import "./CSS/Overview.css";
import Main from "../../ReusableComponents/Main";

const amphi = () => {
  const Items = [
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FAmphi_Theatre1.jpg?alt=media&token=889bc93d-a8cc-4e0e-8835-ff7ebec42f8e",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FAmphi_Theatre2.jpg?alt=media&token=652c67f3-af9a-4232-8114-56172b0e3860",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FAmphi_Theatre3.jpg?alt=media&token=775dac23-a44e-419d-892d-76c621a200c6",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FAmphi_Theatre4.jpg?alt=media&token=5f346e0e-bd38-4e9a-989e-1ccd471326e3",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FAmphi_Theatre5.jpg?alt=media&token=1018e0e7-50d5-435f-989f-570d32bef8d6",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FAmphi_Theatre6.jpg?alt=media&token=ec3f9e1e-3ae6-4937-bd4a-209e6a83113es",
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
                alt="amphi"
              />
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
};

export default amphi;
