import React from "react";
import Main from "../../ReusableComponents/Main";
import "./css/about.css";

function aboutDifferentiator() {
  return (
    <Main isSlideShow={true}>
      <div className="givmar">
        <br />
        <br />

        <div className="card w-100">
          <div className="card-header text-center ">Differentiators</div>
          <div className="card-body">
            <li className="card-text">
              Led by dynamic and senior academicians.
            </li>
            <li className="card-text">
              Highly qualified faculty from Industry and Education.
            </li>
            <li className="card-text">
              Staff appraisal for improvement in quality of delivering, student
              appraisal for continuous improvement.
            </li>
            <li className="card-text">State of the art Infrastructure.</li>
            <li className="card-text">
              Strong Industry- Institute interaction.
            </li>
            <li className="card-text">
              Guest lectures from Industry professionals.
            </li>
            <li className="card-text">
              Management Development Centre for wide-ranging Industries.
            </li>
            <li className="card-text">
              Stimulating variety of co-curricular activities.
            </li>
            <li className="card-text">
              Best in line computing facility with secured Wi-Fi.
            </li>
            <li className="card-text">Sports complex and swimming pool.</li>
          </div>
        </div>

        <br />
        <br />
      </div>
    </Main>
  );
}

export default aboutDifferentiator;
