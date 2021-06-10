import React from "react";
import Main from "../../ReusableComponents/Main";

import * as firebase from "firebase";
import { useState } from "react";
import { useEffect } from "react";
import CommitteeMenu from "./Menus/CommitteeMenu";
import NavLinks from "./Menus/CommitteeNavLinks";

const Grievence = () => {
  const [data, setData] = useState(null);

  const getComittee = () => {
    const dbref = firebase.database().ref("committees");
    dbref.on("value", (datasnapshot) => {
      if (datasnapshot.val()) {
        let result = Object.values(datasnapshot.val());
        // console.log(result[0].committeeMembers);
        var finalData;
        result.forEach((d, i) => {
          if (d.committeeName === "Grievence Redressal") {
            finalData = d;
          }
        });

        setData(finalData);
      }
    });
  };
  useEffect(() => {
    getComittee();
  }, []);

  return (
    <Main isSlideShow={true}>
      <div className="row">
        <CommitteeMenu title="Committees" subMenu={NavLinks} />
        <div className="col-sm-8 col-lg-9 text-light">
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4"
            data-target="#navbar-example3"
            data-offset="0"
          >
            <br />
            <br />

            <div>
              <div className="card m-2">
                {/* <div className="card-header">Anti Ragging Committee</div> */}
                <div className="card-body">
                  <h5 className="card-title font-weight-bold text-dark">
                    {data && data.committeeName}
                  </h5>
                  <p className="card-text">
                    The {data && data.committeeName} is constituted for the
                    academic year
                    {data && data.year}. The members of the committee are as
                    follows -
                  </p>

                  <table className="table table-bordered m-2">
                    <thead>
                      <tr>
                        <th scope="col">Sr no.</th>
                        <th scope="col">Name of the Person</th>
                        <th scope="col">Post</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data &&
                        data.committeeMembers.map((d, i) => (
                          <tr>
                            <th scope="row">{i + 1}</th>
                            <td>{d.name}</td>
                            <td>{d.designation}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                  <div className="card-footer text-muted">
                    <p className="font-weight-bold text-dark">
                      The Student Grievance Redressal Cell functions are :
                    </p>
                    <ul style={{ margin: "20px" }}>
                      <li>
                        Invite student's suggestions for improving theory and
                        practical teaching performances.
                      </li>
                      <li>
                        Take cognizance of the request made by students about
                        the various facilities and implement solutions.
                      </li>
                      <li>
                        To resolve any conflicts among the students and to
                        maintain a conducive environment.
                      </li>
                      <li>
                        Coordinates Counseling sessions to newly admitted
                        students to deal with Stress and other problems faced.
                      </li>
                      <li>
                        Monitor Student activities to prevent untoward
                        incidents.
                      </li>
                      <li>
                        Disobedient students are being identified and are
                        counseled to be punctual
                      </li>
                      <li>
                        To deal with any incidences involving students from time
                        to time and report to the Principal for further action
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Grievence;
