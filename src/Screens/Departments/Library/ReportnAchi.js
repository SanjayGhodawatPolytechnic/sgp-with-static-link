import React, { useState } from "react";
import Main from "../../../ReusableComponents/Main";
import DeptMenu from "../Reusables/DeptMenu";
import NavLinks from "./NavLinks";
import StaffCard from "../Reusables/StaffCard";
import { useEffect } from "react";
import * as firebase from "firebase";
import { CommonLoading } from "react-loadingg";
import PDFModal from "../../../ReusableComponents/PDFModal";

const ReportnAchi = () => {
  const [achievements, setachievements] = useState([]);
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPDFopen, setIsPDFopen] = useState(false);
  const [currentlyOpenPDFURL, setCurrentlyopenPDFURL] = useState("");

  const openPDF = (pdfURL) => {
    setCurrentlyopenPDFURL(pdfURL);
    setIsPDFopen(true);
  };

  const closePDF = () => {
    setIsPDFopen(false);
  };

  const getachievements = async () => {
    setIsLoading(true);
    const dbRef = firebase.database().ref("libraryData").child("ACHIEVEMENT");
    dbRef.on("value", (datasnapshot) => {
      if (datasnapshot.val()) {
        let bbs = Object.values(datasnapshot.val());
        let keys = Object.keys(datasnapshot.val());

        keys.forEach((v, i) => {
          bbs[i]["key"] = v;
        });

        setachievements(bbs);
        setIsLoading(false);
      }
    });
  };

  const getReports = async () => {
    setIsLoading(true);
    const dbRef = firebase.database().ref("libraryData").child("REPORT");
    dbRef.on("value", (datasnapshot) => {
      if (datasnapshot.val()) {
        let bbs = Object.values(datasnapshot.val());
        let keys = Object.keys(datasnapshot.val());

        keys.forEach((v, i) => {
          bbs[i]["key"] = v;
        });

        setReports(bbs);
        setIsLoading(false);
      }
    });
  };

  useEffect(() => {
    getachievements();
    getReports();
  }, []);

  return (
    <Main className="container-lg w-100 m-2 p-0">
      {isPDFopen && <PDFModal url={currentlyOpenPDFURL} closePDF={closePDF} />}

      <div className="row deptcont">
        <DeptMenu dept="Library" subMenu={NavLinks} />
        <div className="col text-dark w-100">
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3"
            data-target="#navbar-example3"
            data-offset="0"
          >
            {isLoading && <CommonLoading />}
            {!isLoading && (
              <div className="card w-100">
                <div className="card-header text-center ">
                  Achievements &amp; Downloads
                </div>
                <div className="card-body">
                  {achievements.map((v, i) => (
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{v.title}</h5>
                        <button
                          className="btn btn-info"
                          onClick={() => {
                            openPDF(v.fileDownloadURL);
                          }}
                        >
                          Open File
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {!isLoading && (
              <div className="card w-100">
                <div className="card-header text-center ">Reports</div>
                <div className="card-body">
                  {reports.map((v, i) => (
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{v.title}</h5>
                        <button
                          className="btn btn-info"
                          onClick={() => {
                            openPDF(v.fileDownloadURL);
                          }}
                        >
                          Open File
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Main>
  );
};

export default ReportnAchi;
