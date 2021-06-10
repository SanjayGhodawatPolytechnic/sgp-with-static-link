import React from "react";
import Main from "../../ReusableComponents/Main";

import * as firebase from "firebase";
import { useState } from "react";
import { useEffect } from "react";
import CommitteeMenu from "./Menus/CommitteeMenu";
import NavLinks from "./Menus/CommitteeNavLinks";

const VishakhaCell = () => {
  const [data, setData] = useState(null);

  const getComittee = () => {
    const dbref = firebase.database().ref("committees");
    dbref.on("value", (datasnapshot) => {
      if (datasnapshot.val()) {
        let result = Object.values(datasnapshot.val());
        // console.log(result[0].committeeMembers);
        var finalData;
        result.forEach((d, i) => {
          if (d.committeeName === "Vishakha Cell") {
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
                {/* <div className="card-header">{data && data.committeeName}</div> */}
                <div className="card-body">
                  <h5 className="card-title font-weight-bold text-dark">
                    {data && data.committeeName}
                  </h5>
                  <p className="card-text">
                    The {data && data.committeeName} is constituted for the
                    academic year {data && data.year}.<br />
                    <br />A new section known as the "Women Grievance Redressal
                    Committee" (WGRC) has started functioning in the college
                    from the academic session 2012. WGRC is formed in order to
                    keep the healthy working atmosphere among the faculty of
                    Polytechnic. This Cell helps women faculty and students to
                    record their complaints and solve their problems related to
                    resources and personal grievances. Woman Harassment
                    complaints will be handled as per government guidelines.
                    <br />
                    <br /> The members of the committee are as follows -
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default VishakhaCell;
