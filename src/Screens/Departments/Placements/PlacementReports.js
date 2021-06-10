import React, { useState } from "react";
import Main from "../../../ReusableComponents/Main";
import DeptMenu from "../Reusables/DeptMenu";
import NavLinks from "./NavLinks";
import * as firebase from "firebase";
import { useEffect } from "react";
import PlacementCard from "./PlacementCard";

const PlacementReports = () => {
  const [dataWithoutFiles, setDataWithoutFiles] = useState([]);
  const [dataWithFiles, setDataWithFiles] = useState([]);

  const getAllActivities = () => {
    const dbRef = firebase.database().ref("placement");

    //vanila data
    dbRef.child("withoutfiles").on("value", (snapshot) => {
      if (snapshot.val()) {
        let resultWithoutFiles = Object.values(snapshot.val());
        let keys = Object.keys(snapshot.val());
        keys.forEach((v, i) => {
          resultWithoutFiles[i]["key"] = v;
        });
        // console.log(resultWithoutFiles);
        setDataWithoutFiles(resultWithoutFiles);
      }
    });

    //complex data
    dbRef.child("withFiles").on("value", (snapshot) => {
      if (snapshot.val()) {
        let resultWithFiles = Object.values(snapshot.val());
        let keys = Object.keys(snapshot.val());
        keys.forEach((v, i) => {
          resultWithFiles[i]["key"] = v;
        });
        // console.log(resultWithFiles);
        setDataWithFiles(resultWithFiles);
      }
    });
  };

  useEffect(() => {
    getAllActivities();
  }, []);

  return (
    <Main className="container-lg cse w-100 m-2 p-0">
      <div className="row deptcont">
        <DeptMenu dept="Placement" subMenu={NavLinks} />
        <div className="col text-dark w-100">
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4"
            data-target="#navbar-example3"
            data-offset="0"
          >
            <h4 className="col-12 text-center text-dark bg-success">
              <b>Placement Reports</b>
            </h4>
            {dataWithFiles.map((val, idx) => (
              <PlacementCard
                key={idx}
                title={val.title}
                description={val.description}
                date={val.date}
                eligibleDept={val.eligibleDept}
                organizedBy={val.organizedBy}
                companyName={val.companyName}
                campusType={val.campusType}
                fileURL={val.fileURL}
                imageURLS={val.imagesURLs}
              />
            ))}
            {dataWithoutFiles.map((val, idx) => (
              <PlacementCard
                key={idx}
                title={val.title}
                description={val.description}
                date={val.date}
                eligibleDept={val.eligibleDept}
                organizedBy={val.organizedBy}
                companyName={val.companyName}
                campusType={val.campusType}
              />
            ))}
          </div>
        </div>
      </div>
    </Main>
  );
};

export default PlacementReports;
