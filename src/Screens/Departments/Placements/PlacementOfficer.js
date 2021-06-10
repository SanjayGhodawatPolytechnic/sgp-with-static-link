import React from "react";
import Main from "../../../ReusableComponents/Main";

import DeptMenu from "../Reusables/DeptMenu";
import NavLinks from "./NavLinks";
import "../Reusables/CSS/HOD.css";
import { useState } from "react";
import * as firebase from "firebase";
import { useEffect } from "react";

const PlacementOfficer = () => {
  const [officerData, setOfficerData] = useState({
    name: "",
    image: "",
    description: "",
  });

  const getData = () => {
    firebase
      .database()
      .ref("placementOfficer")
      .on("value", (snapshot) => {
        if (snapshot.val()) {
          setOfficerData(snapshot.val());
        }
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Main className="container-lg w-100 m-2 p-0">
      <div className="row deptcont">
        <DeptMenu dept="Placement" subMenu={NavLinks} />
        <div className="col text-dark w-100">
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4"
            data-target="#navbar-example3"
            data-offset="0"
          >
            <div className="row">
              <div className="col text-center">
                <img
                  alt="cse hod"
                  className="img-fluid rounded"
                  src={officerData.image}
                />
              </div>
              <div className="col-12 text-center">
                <b>{officerData.name}</b>
              </div>
              <div className="col-12 text-center">
                <b>Placement Officer</b>
              </div>
            </div>
            <p className="m-1 words">{officerData.description}</p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default PlacementOfficer;
