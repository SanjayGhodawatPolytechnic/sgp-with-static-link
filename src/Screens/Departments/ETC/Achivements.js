import React from "react";
import Main from "../../../ReusableComponents/Main";
import DeptMenu from "../Reusables/DeptMenu";
import NavLinks from "./NavLinks";
import { useState } from "react";
import * as firebase from "firebase";
import { useEffect } from "react";

const EntcAchivements = () => {
  const [studentData, setStudentData] = useState([]);
  const [collegeData, setCollegeData] = useState([]);

  const getAllAchivements = () => {
    const dbRef = firebase.database().ref("achivements");
    dbRef.on("value", (snapshot) => {
      if (snapshot.val()) {
        let result = Object.values(snapshot.val());
        let keys = Object.keys(snapshot.val());
        keys.forEach((v, i) => {
          result[i]["key"] = v;
        });

        result = result.filter((val) => val.dept === "E & TC");

        let college = [];
        let student = [];

        result.forEach((d, i) => {
          if (d.category === "student") {
            student.push(d);
          } else {
            college.push(d);
          }
        });
        setStudentData(student);
        setCollegeData(college);
      }
    });
  };

  useEffect(() => {
    getAllAchivements();
  }, []);
  return (
    <Main className="container-lg cse w-100 m-2 p-0">
      <div className="row deptcont">
        <DeptMenu dept="E &amp; TC" subMenu={NavLinks} />
        <div className="col text-dark w-100">
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4"
            data-target="#navbar-example3"
            data-offset="0"
          >
            <div className="row">
              <h4 className="col-12 text-center text-dark">
                <b>Achived By College</b>
              </h4>
              {collegeData.map((d, i) => (
                <div className="col-lg-4 m-2" key={i}>
                  <div className="card card-cascade wider">
                    <div className="view view-cascade overlay">
                      <img
                        className="card-img-top"
                        src={d.imageURL}
                        alt="Card cap"
                      />
                      <a href="#!">
                        <div className="mask rgba-white-slight"></div>
                      </a>
                    </div>

                    <div className="card-body card-body-cascade text-center">
                      <h5 className="blue-text pb-2">
                        <strong>{d.title}</strong>
                      </h5>
                      <p className="card-text">{d.description} </p>
                      <ul
                        className="list-group list-group-flush m-1"
                        style={{ fontSize: 13 }}
                      >
                        <li className="list-group-item purple-gradient">
                          Department: {d.dept}
                        </li>
                        <li className="list-group-item purple-gradient">
                          Achived By: {d.category}
                        </li>
                        <li className="list-group-item purple-gradient">
                          Achived on: {d.dateAchived}
                        </li>
                      </ul>

                      <a
                        className="px-2 fa-lg tw-ic text-success mt-1"
                        href={d.fileURL}
                        target="blank"
                      >
                        <i className="fas fa-file"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              <h4 className="col-12 text-center text-dark">
                <b>Achived By Students</b>
              </h4>
              {studentData.map((d, i) => (
                <div className="col-lg-4 m-2" key={i}>
                  <div className="card card-cascade wider">
                    <div className="view view-cascade overlay">
                      <img
                        className="card-img-top"
                        src={d.imageURL}
                        alt="Card i"
                      />
                      <a href="#!">
                        <div className="mask rgba-white-slight"></div>
                      </a>
                    </div>

                    <div className="card-body card-body-cascade text-center">
                      <h5 className="blue-text pb-2">
                        <strong>{d.title}</strong>
                      </h5>
                      <p className="card-text">{d.description} </p>
                      <ul
                        className="list-group list-group-flush m-1"
                        style={{ fontSize: 13 }}
                      >
                        <li className="list-group-item purple-gradient">
                          Department: {d.dept}
                        </li>
                        <li className="list-group-item purple-gradient">
                          Achived By: {d.category}
                        </li>
                        <li className="list-group-item purple-gradient">
                          Achived on: {d.dateAchived}
                        </li>
                      </ul>

                      <a
                        className="px-2 fa-lg tw-ic text-success mt-1"
                        href={d.fileURL}
                        target="blank"
                      >
                        <i className="fas fa-file"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default EntcAchivements;
