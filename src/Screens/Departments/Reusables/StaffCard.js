import React from "react";
import { useState } from "react";
import PDFModal from "../../../ReusableComponents/PDFModal";
import "./CSS/StaffCard.css";

const StaffCard = ({
  name = "",
  designation = "",
  qualification = "",
  areaOfEpertise = "",
  imageURL = "",
  experience = "",
  emailId = "",
  resumeURL = "",
}) => {
  const [isPDFopen, setIsPDFopen] = useState(false);
  const [currentlyOpenPDFURL, setCurrentlyopenPDFURL] = useState("");

  const openPDF = (pdfURL) => {
    setCurrentlyopenPDFURL(pdfURL);
    setIsPDFopen(true);
  };

  const closePDF = () => {
    setIsPDFopen(false);
  };

  return (
    <div className="page-content page-container m-0 w-100" id="page-content">
      {isPDFopen && <PDFModal url={currentlyOpenPDFURL} closePDF={closePDF} />}
      <div className="">
        <div className="row m-0 p-0 w-100 container d-flex justify-content-center">
          <div className="col-md-12">
            <div className="card user-card-full w-100">
              <div className="row m-l-0 m-r-0">
                <div className="col-sm-4 bg-c-lite-green user-profile">
                  <div className="card-block text-center text-white d-flex justify-content-center flex-column">
                    <div className="m-b-25">
                      {" "}
                      <img
                        src={imageURL}
                        className="img-fluid rounded-circle"
                        alt="User-Profile-Image"
                      />{" "}
                    </div>
                    <h6 className="f-w-600">{name}</h6>
                    {designation}
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="card-block">
                    <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                      Personal Information
                    </h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Email</p>
                        <h6 className="text-muted f-w-400">{emailId}</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Resume</p>
                        <h6
                          onClick={() => {
                            openPDF(resumeURL);
                          }}
                          className="text-muted f-w-400 openFile"
                        >
                          Open File
                        </h6>
                      </div>
                    </div>
                    <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                      Skills
                    </h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Area of Expertise</p>
                        <h6 className="text-muted f-w-400">{areaOfEpertise}</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Experience</p>
                        <h6 className="text-muted f-w-400">{experience}</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Qualification</p>
                        <h6 className="text-muted f-w-400">{qualification}</h6>
                      </div>
                    </div>
                    <ul className="social-link list-unstyled m-t-40 m-b-10">
                      <li>
                        <a
                          href="#!"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title
                          data-original-title="facebook"
                          data-abc="true"
                        >
                          <i
                            className="mdi mdi-facebook feather icon-facebook facebook"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title
                          data-original-title="twitter"
                          data-abc="true"
                        >
                          <i
                            className="mdi mdi-twitter feather icon-twitter twitter"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title
                          data-original-title="instagram"
                          data-abc="true"
                        >
                          <i
                            className="mdi mdi-instagram feather icon-instagram instagram"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;

{
  /* <div className="card-container m-2">
<div className="row">
    <div className="col-sm-4">
        <img className="round" src={imageURL} alt="user" width="200" height="200" />
    </div>
    <div className="col-sm-8">
    <h3>{name}</h3>
    <h6 className="des">{designation}</h6>
    <p><span className="pro">Qualification</span> {qualification}</p>
    <p><span className="pro">Area of Expertise</span> {areaOfEpertise}</p>
    <p><span className="pro">Experience</span> {experience}</p>
    <p><span className="pro">Email ID</span> {emailId}</p>
    <div className="buttons">
        <a href={resumeURL} target="blank"><button className="primary ghost">
            Profile
        </button>
        </a>
    </div>
    </div>
</div>
</div> */
}
