import React from "react";
import Main from "../../../ReusableComponents/Main";
import * as firebsae from "firebase";
import { useEffect } from "react";
import { useState } from "react";
import PDFModal from "../../../ReusableComponents/PDFModal";

const AcademicCalendars = () => {
  const [allCalendars, setAllCalendars] = useState({
    cse: [],
    mech: [],
    entc: [],
    ele: [],
    cvl: [],
    fy: [],
    all: [],
  });

  const [currentlyDisplaying, setCurrentlyDisplaying] = useState([]);
  const [isPDFOpen, setIsPDFOpen] = useState(false);
  const [currentlyViewingPDF, setCurrentlyViewingPDF] = useState("");

  const getFormatedObject = (obj) => {
    if (obj) {
      let result = Object.values(obj);
      return result;
    }
    return [];
  };

  const getCalendarsSorted = (arr) => {
    if (arr) {
      let sorted = arr.sort(
        (a, b) => b.year.split("-")[0] - a.year.split("-")[0]
      );
      return sorted;
    }
    return [];
  };

  const closePDF = () => {
    setIsPDFOpen(false);
  };

  const openPDF = (url) => {
    setCurrentlyViewingPDF(url);
    setIsPDFOpen(true);
  };
  const getAllCalendars = () => {
    const dbRef = firebsae.database().ref("academic-calendar");
    dbRef.on("value", (datasnapshot) => {
      if (datasnapshot.val()) {
        // console.log(datasnapshot.val());
        let cse = getCalendarsSorted(
          getFormatedObject(datasnapshot.val()["Computer Science"])
        );
        let mech = getCalendarsSorted(
          getFormatedObject(datasnapshot.val()["Mechanical"])
        );
        let cvl = getCalendarsSorted(
          getFormatedObject(datasnapshot.val()["Civil"])
        );
        let entc = getCalendarsSorted(
          getFormatedObject(datasnapshot.val()["E & TC"])
        );
        let ele = getCalendarsSorted(
          getFormatedObject(datasnapshot.val()["Electrical"])
        );
        let fy = getCalendarsSorted(
          getFormatedObject(datasnapshot.val()["Basic Science & Humanities"])
        );
        let all = [...cse, ...mech, ...cvl, ...entc, ...ele, ...fy];
        let msbte = all.filter((val) => {
          return val.level === "MSBTE";
        });
        let institute = all.filter((val) => {
          return val.level === "Institute";
        });
        all = [...msbte, ...institute];

        setAllCalendars({
          cse,
          mech,
          cvl,
          entc,
          ele,
          fy,
          all,
        });

        setCurrentlyDisplaying(all);
      }
    });
  };

  useEffect(() => {
    getAllCalendars();
  }, []);

  return (
    <Main isSlideShow={false} className="container">
      {currentlyDisplaying &&
        currentlyDisplaying.map((cal, idx) => (
          <div className="card m-3" key={idx}>
            <div className="card-body">
              <h5 className="card-title">{cal.year}</h5>
              {/* <p className="card-text">{cal.department}</p> */}
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Level: {cal.level}</li>
              {/* <li className="list-group-item">Sem: {cal.sem}</li> */}
            </ul>
            <div className="card-body">
              <button
                onClick={() => {
                  openPDF(cal.fileDownloadURL);
                }}
                className="btn btn-info"
              >
                Preview
              </button>
              <a
                href={cal.fileDownloadURL}
                target="blank"
                className="btn btn-info"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      {isPDFOpen && <PDFModal url={currentlyViewingPDF} closePDF={closePDF} />}
    </Main>
  );
};

export default AcademicCalendars;
