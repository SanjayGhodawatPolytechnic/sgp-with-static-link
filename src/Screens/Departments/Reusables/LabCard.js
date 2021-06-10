import React from "react";
import "./CSS/LabCard.css";

const LabCard = ({
  imageurl = "",
  labName = "",
  invoiceurl = "",
  labcost = 0,
  description = "",
  use = "",
  itemno = 0,
}) => {
  return (
    <div>
      <div
        className="container2"
        data-toggle="collapse"
        href={`#collapseExample${itemno}`}
        role="button"
        aria-expanded="false"
        aria-controls={`collapseExample${itemno}`}
      >
        <div className="card3">
          <h2 className="heading2">{labName}</h2>
          <i className="fas fa-arrow-right rotate-icon itag"></i>
          <img alt="lab" src={imageurl} className="pic img-fluid" />
          <ul className="unlist">
            <li className="listi"></li>
            <li className="listi"></li>
            <li className="listi"></li>
            <li className="listi"></li>
            <li className="listi"></li>
            <li className="listi"></li>
            <li className="listi"></li>
            <li className="listi"></li>
            <li className="listi"></li>
            <li className="listi"></li>
            <li className="listi"></li>
            <li className="listi"></li>
            <li className="listi"></li>
            <li className="listi"></li>
            <li className="listi"></li>
            <li className="listi"></li>
            <li className="listi"></li>
            <li className="listi"></li>
            <li className="listi"></li>
            <li className="listi"></li>
            <li className="listi"></li>
            <li className="listi"></li>
            <li className="listi"></li>
          </ul>
          <button className="butn"></button>
        </div>
      </div>
      <div className="collapse" id={`collapseExample${itemno}`}>
        <div className="card card-body text-dark w-100">
          {description}
          <br />
          <span className="badge badge-secondary">USE: </span>
          {use}
          <br />
          <span className="badge badge-secondary">Lab Cost:</span>{" "}
          <i className="fa fa-inr" aria-hidden="true"></i>
          <b>{labcost}</b>
          <br />
          <a target="blank" href={invoiceurl}>
            <button className="btn btn-outline-info w-100">Details</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LabCard;
