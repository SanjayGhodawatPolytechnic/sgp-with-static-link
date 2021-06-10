import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import throttle from "lodash/throttle";
import Loader from "./Loader";
import "./CSS/PDFModal.css";
const _ = require("lodash");
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFModal = ({ url = "", closePDF }) => {
  const [numPages, setNumPages] = useState(null);
  const [file, setFile] = useState(null);
  const [pageWidth, setPageWidth] = useState(null);
  const pdfWrapper = useRef();
  const [isLoading, setIsLoading] = useState(false);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const loadPDF = () => {
    setIsLoading(true);
    // "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/files%2F393c1d8c-6dd6-4475-90bd-ef8e3384b9f8?alt=media&token=27da61ac-2325-404d-98a1-df4168366590"
    let data = {
      pdfurl: url,
    };

    fetch("https://sgpbackend.herokuapp.com/api/getPDF", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        let blb = await res.blob();
        let pdffile = new File([blb], "testfile.pdf");
        // console.log(pdffile);
        setFile(pdffile);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setWidth = () => {
    // let ele = document.getElementById("pdf-container");
    // setPageWidth(ele && ele.getBoundingClientRect().width);
    if (pdfWrapper.current) {
      setPageWidth(pdfWrapper.current.getBoundingClientRect().width);
    }
  };

  useEffect(() => {
    // setWidth();
    loadPDF();
    window.addEventListener("resize", throttle(setWidth, 3000));
    setWidth();
    return () => {
      window.removeEventListener("resize", throttle(setWidth, 3000));
    };
  }, []);

  const ErrorMessage = () => (
    <div className="container bg-light">
      <h4 className="text-danger">
        Failed To Load PDF, try downloading insted
      </h4>
    </div>
  );
  return (
    <div className="pdf-modal">
      <div
        className="close-btn"
        onClick={(e) => {
          closePDF();
          e.stopPropagation();
        }}
      >
        <button className="btn btn-danger p-2">
          <i aria-hidden="true" className="fas fa-times-circle fa-2x"></i>
        </button>
      </div>
      <div
        className="download-btn"
        onClick={(e) => {
          window.open(url);
        }}
      >
        <button className="btn btn-info p-2">
          <i className="fas fa-download fa-2x"></i>
        </button>
      </div>
      {file && (
        <div id="pdf-container" ref={pdfWrapper}>
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={(err) => {
              console.log(err);
            }}
            loading={Loader}
            className="pdf"
            error={<ErrorMessage />}
          >
            {_.times(numPages, (i) => (
              <Page
                width={pageWidth}
                pageNumber={i + 1}
                className="mb-2"
                renderTextLayer={false}
                renderInteractiveForms={false}
                scale={1}
              />
            ))}
          </Document>
        </div>
      )}
      {isLoading && <Loader />}
    </div>
  );
};

export default PDFModal;
