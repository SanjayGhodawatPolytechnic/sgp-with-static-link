import React from "react";
import Main from "../../../ReusableComponents/Main";

import DeptMenu from "../Reusables/DeptMenu";
import NavLinks from "./NavLinks";
import { useState } from "react";
import "./CSS/academiccalender.css";
import PDFModal from "../../../ReusableComponents/PDFModal";
import { useEffect } from "react";
import * as firebase from "firebase";
// const PDFViewer = React.lazy(() => import("pdf-viewer-reactjs"))
// const PDFModal = React.lazy(() => import("../Reusables/PDFModal"))

const AcademicCalender = () => {
  const [isPDFopen, setIsPDFopen] = useState(false);
  const [currentlyOpenPDFURL, setCurrentlyopenPDFURL] = useState("");
  const [MSBTECalendars, setMSBTECalendars] = useState([]);
  const [instituteCalendars, setInstituteCalendars] = useState([]);
  const [departmentCalendars, setDepartmentCalendars] = useState([]);

  const getCalendar = async (dept) => {
    const dbRef = firebase.database().ref("academic-calendar").child(dept);
    dbRef.on("value", (datasnapshot) => {
      if (datasnapshot.val()) {
        let result = Object.values(datasnapshot.val());
        let msbte = result.filter((val) => {
          return val.level === "MSBTE";
        });
        let institute = result.filter((val) => {
          return val.level === "Institute";
        });
        let department = result.filter((val) => {
          return val.level === "Department";
        });
        setMSBTECalendars(msbte);
        setInstituteCalendars(institute);
        setDepartmentCalendars(department);
      }
    });
  };

  useEffect(() => {
    getCalendar("Computer Science");
  }, []);

  const openPDF = (pdfURL) => {
    setCurrentlyopenPDFURL(pdfURL);
    setIsPDFopen(true);
  };

  const closePDF = () => {
    setIsPDFopen(false);
  };

  return (
    <Main className="container-lg w-100 m-2 p-0">
      <div className="row deptcont">
        <DeptMenu dept="Computer Science" subMenu={NavLinks} />
        <div className="col text-dark w-100">
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4"
            data-target="#navbar-example3"
            data-offset="0"
          >
            {/* <div className="row m-2">
              <h4 className="col-12 text-center text-dark">
                <b>MSBTE Calendars</b>
              </h4>
              {MSBTECalendars.map((d, i) => (
                <div
                  className="btn btn-info col-4 text-dark"
                  key={i}
                  onClick={(e) => {
                    setCurrentlyopenPDFURL(d.fileDownloadURL);
                    setIsPDFopen(true);
                  }}
                >
                  Year: {d.year} Sem: {d.sem}
                </div>
              ))}
            </div> */}
            {/* <div className="row m-2">
              <h4 className="col-12 text-center text-dark">
                <b>Institute Calendars</b>
              </h4>
              {instituteCalendars.map((d, i) => (
                <div
                  className="btn btn-info col-4 text-dark"
                  key={i}
                  onClick={(e) => {
                    setCurrentlyopenPDFURL(d.fileDownloadURL);
                    setIsPDFopen(true);
                  }}
                >
                  Year: {d.year} Sem: {d.sem}
                </div>
              ))}
            </div> */}
            <div className="row m-2">
              <h4 className="col-12 text-center text-dark">
                <b>Department Calendars</b>
              </h4>
              {departmentCalendars.map((d, i) => (
                <div
                  className="btn btn-info col-4 text-dark"
                  key={i}
                  onClick={(e) => {
                    setCurrentlyopenPDFURL(d.fileDownloadURL);
                    setIsPDFopen(true);
                  }}
                >
                  Year: {d.year} Sem: {d.sem}
                </div>
              ))}
            </div>
          </div>
        </div>
        {isPDFopen && (
          <PDFModal url={currentlyOpenPDFURL} closePDF={closePDF} />
        )}
      </div>
    </Main>
  );
};

export default AcademicCalender;
