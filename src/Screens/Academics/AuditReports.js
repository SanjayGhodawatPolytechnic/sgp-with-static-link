import React from "react";
import Main from "../../ReusableComponents/Main";

// import PDFViewer from 'pdf-viewer-reactjs'
import { useState } from "react";
import "./Result.css";
import PDFModal from "../../ReusableComponents/PDFModal";
import { useEffect } from "react";
import * as firebase from "firebase";
// const PDFViewer = React.lazy(() => import("pdf-viewer-reactjs"))
// const PDFModal = React.lazy(() => import("../Reusables/PDFModal"))

const AuditReports = () => {
  const [isPDFopen, setIsPDFopen] = useState(false);
  const [currentlyOpenPDFURL, setCurrentlyopenPDFURL] = useState("");
  const [data, setData] = useState([]);

  const getResult = async () => {
    const dbRef = firebase.database().ref("auditReports");
    dbRef.on("value", (datasnapshot) => {
      if (datasnapshot.val()) {
        let result = Object.values(datasnapshot.val());
        result.forEach((v) => {
          let date = new Date(v.timestamp);
          let dateData = [];
          dateData.push(date.getDate().toString());
          dateData.push((date.getMonth() + 1).toString());
          dateData.push(date.getFullYear().toString());
          v.timestamp = dateData.join("/");
        });
        result.reverse();
        setData(result);
      }
    });
  };

  useEffect(() => {
    getResult();
  }, []);

  const closePDF = () => {
    setIsPDFopen(false);
  };

  return (
    <Main className="container-lg cse w-100 m-2 p-0">
      <div className="row deptcont">
        <div className="col text-dark w-100">
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4"
            data-target="#navbar-example3"
            data-offset="0"
          >
            <div className="row m-2">
              <h4 className="col-12 text-center text-dark">
                <b>Audit reports</b>
              </h4>
              {data.map((d, i) => (
                <div className="card m-3">
                  <div className="card-body">
                    <h5 className="card-title">{d.title}</h5>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Posted on: {d.timestamp}
                    </li>
                  </ul>
                  <div className="card-body">
                    <button
                      onClick={() => {
                        setCurrentlyopenPDFURL(d.fileURL);
                        setIsPDFopen(true);
                      }}
                      className="btn btn-info"
                    >
                      Preview
                    </button>
                    <a href={d.fileURL} target="blank" className="btn btn-info">
                      Download
                    </a>
                  </div>
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

export default AuditReports;
