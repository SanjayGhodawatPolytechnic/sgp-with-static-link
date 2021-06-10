import React from "react";
import Main from "../../ReusableComponents/Main";

import * as firebase from "firebase";
import { useState } from "react";
import { useEffect } from "react";
import CommitteeMenu from "./Menus/CommitteeMenu";
import NavLinks from "./Menus/CommitteeNavLinks";

const Atrocity = () => {
  const [data, setData] = useState(null);

  const getComittee = () => {
    const dbref = firebase.database().ref("committees");
    dbref.on("value", (datasnapshot) => {
      if (datasnapshot.val()) {
        let result = Object.values(datasnapshot.val());
        // console.log(result[0].committeeMembers);
        var finalData;
        result.forEach((d, i) => {
          if (d.committeeName === "Atrocity Committee") {
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
                    academic year{data && data.year}. <br />
                    <br />
                    This is to inform you that as per AICTE directives, SC/ST
                    (Prevention Of Atrocities) Cell has been formed in our
                    college in the GB meeting of Academic year 2014-15. The
                    staff members listed below are hereby appointed in the SC /
                    ST (Prevention Of Atrocities) Cell for the academic year
                    2018-19. They shall strictly follow the duties and
                    responsibilities assigned to them as per AICTE norms with
                    clear transparency.
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

export default Atrocity;
