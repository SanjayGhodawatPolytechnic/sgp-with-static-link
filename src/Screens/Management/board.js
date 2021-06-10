import React from "react";
import Main from "../../ReusableComponents/Main";
import "./CSS/management.css";
import "./CSS/board.css";

function managementBoard() {
  const images = [
    {
      original:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FPic%2F00.jpg?alt=media&token=2cd8deb3-933f-41ef-a5db-c62ff22c6e07",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FPic%2F00.jpg?alt=media&token=2cd8deb3-933f-41ef-a5db-c62ff22c6e07",
      description: "Mr. Danchand K. Ghodawat",
      designation: "Showers of Blessings",
    },
    {
      original:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FPic%2F01.jpg?alt=media&token=bb7f2e89-1ee2-4ae5-821e-976def4812f4",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FPic%2F01.jpg?alt=media&token=bb7f2e89-1ee2-4ae5-821e-976def4812f4",
      description: "Mr. Sanjay D. Ghodawat",
      designation: "Chairman",
    },
    {
      original:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FPic%2F04.jpg?alt=media&token=f75aa3ba-d0bb-42b1-bbc4-88646d7c1d71",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FPic%2F04.jpg?alt=media&token=f75aa3ba-d0bb-42b1-bbc4-88646d7c1d71",
      description: "Mrs. Neeta S. Ghodawat ",
      designation: "Vice Chairman",
    },
    {
      original:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FPic%2F03.jpg?alt=media&token=8e6d1f36-22d0-4bab-a332-d2c5c56a9bc6",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FPic%2F03.jpg?alt=media&token=8e6d1f36-22d0-4bab-a332-d2c5c56a9bc6",
      description: "Mr. Shrenik S. Ghodawat",
      designation: "Secretary",
    },
    {
      original:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FPic%2F06.jpg?alt=media&token=a4adfc21-4da8-4847-9332-c646b5fe3d79",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FPic%2F06.jpg?alt=media&token=a4adfc21-4da8-4847-9332-c646b5fe3d79",
      description: "Mr. Vinod D. Ghodawat",
      designation: "Trustee",
    },
    {
      original:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FPic%2F07.jpg?alt=media&token=2b4eaf2e-8a9b-4e46-b29b-fba180dc60db",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FPic%2F07.jpg?alt=media&token=2b4eaf2e-8a9b-4e46-b29b-fba180dc60db",
      description: "Mr. Anil B. Kotecha",
      designation: "Trustee",
    },
    {
      original:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FPic%2F08.jpg?alt=media&token=7e86efff-d385-4ad0-8cf5-6bdb9c8b20f8",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FPic%2F08.jpg?alt=media&token=7e86efff-d385-4ad0-8cf5-6bdb9c8b20f8",
      description: "Mr. Atul M. Shinde",
      designation: "Trustee",
    },
    {
      original:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FPic%2F09.jpg?alt=media&token=46472f7a-ac4c-4d07-8f8d-30d6cac563da",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FPic%2F09.jpg?alt=media&token=46472f7a-ac4c-4d07-8f8d-30d6cac563da",
      description: "Mr. Vinayak V. Bhosale",
      designation: "Trustee",
    },
    {
      original:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FPic%2F05.jpg?alt=media&token=4fca3052-a3fa-4ba2-8451-226f13fc5768",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FPic%2F05.jpg?alt=media&token=4fca3052-a3fa-4ba2-8451-226f13fc5768",
      description: "Mr. Rajesh Ghodawat",
      designation: "Trustee",
    },
  ];

  const ProfileCard = ({ image = "", name = "", designation = "" }) => (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="our-team rounded border">
        <div className="picture">
          <img className="img-fluid" src={image} alt="boards" />
        </div>
        <div className="team-content">
          <h3 className="name">{name}</h3>
          <h4 className="title">{designation}</h4>
        </div>
      </div>
    </div>
  );

  return (
    <Main isSlideShow={true}>
      <div className="mar">
        <br />
        <br />
        <div className="row">
          {images.map((d, i) => (
            <ProfileCard
              image={d.original}
              name={d.description}
              designation={d.designation}
            />
          ))}
        </div>
      </div>
    </Main>
  );
}

export default managementBoard;
