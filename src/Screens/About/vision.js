import React from "react";
import Main from "../../ReusableComponents/Main";
import ScrollAnimation from "react-animate-on-scroll";
import "./css/about.css";
import VisionSVG from "../../assets/svgComponents/visionSVG";
import MissionSVG from "../../assets/svgComponents/MissionSVG";

function aboutVision() {
  return (
    <Main isSlideShow={true}>
      <div className="givmar">
        <br />
        <br />
        <div className="row">
          <div className="col-sm-4 text-center">
            <VisionSVG height="250" />
          </div>
          <div className="col-sm-8 card w-100 p-0">
            <div className="card-header text-center ">Vision</div>
            <div className="card-body">
              <h4 className="card-text text-dark">MSBTE</h4>
              <p className="card-text">
                To ensure that the Diploma level Technical Education constantly
                matches the latest requirements of Technology and industry and
                includes the all-round personal development of students
                including social concerns and to become globally competitive,
                technology led organization.
              </p>
              <h4 className="card-text text-dark">Institute</h4>
              <p className="card-text">
                Become a leader in providing quality and value based education
                in the field of Diploma Engineering that will produce competent
                technocrats to meet industry requirements with societal and
                environmental concern.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-9 card w-100 p-0">
            <div className="card-header text-center">Mission</div>
            <div className="card-body">
              <h4 className="card-text text-dark">MSBTE</h4>
              <li className="card-text">
                To provide high quality technical and managerial manpower,
                information and consultancy services to the industry and
                community to enable the industry and co
              </li>
            </div>
            <div className="card-body">
              <h4 className="card-text text-dark">Institute</h4>
              <li className="card-text">
                To impart technical knowledge and skills by using modern
                engineering tools with supportive facilities.
              </li>
              <li className="card-text">
                To facilitate industry-institute interaction to expose students
                to current industrial practices that will help them to solve
                industrial challenges.
              </li>
              <li className="card-text">
                To inculcate ethical and professional values among students that
                will make them socially and environmentally responsible
              </li>
              <li className="card-text">
                To motivate students towards lifelong learning and helping them
                to find right career opportunities.
              </li>
            </div>
          </div>
          <div className="col-sm-3 text-center">
            <MissionSVG height="250" />
          </div>
        </div>
        <div className="card w-100 p-0">
          <h5 className="card-header text-center">Objectives</h5>
          <div className="card-body">
            <li className="card-text">
              Impart technical knowledge and skills by using modern engineering
              tools
            </li>
            <li className="card-text">
              Facilitate industry-institute interaction
            </li>
            <li className="card-text">
              Inculcate ethical and professional values
            </li>
            <li className="card-text">
              Motivate students towards lifelong learning and helping them to
              find right career opportunities
            </li>
          </div>
        </div>
        <div className="card w-100 p-0">
          <div className="card-header text-center  ">Goal</div>
          <div className="card-body">
            <li className="card-text">
              To be one of the most progressive and innovative Knowledge cities.
            </li>
            <li className="card-text">
              Establish a knowledge city that will impart world className
              education in engineering, management and research.
            </li>
            <li className="card-text">
              Confer technical knowledge, in pace with the latest trends in the
              technology.
            </li>
            <li className="card-text">
              Application of these knowledge and skills for the common good of
              the society with an effort to keep India at the forefront of the
              technological map of the world.
            </li>
            <li className="card-text">
              Establish Engineering and Management Institute with state of the
              art infrastructure
            </li>
            <li className="card-text">
              Conduct sequential courses and training programs in collaboration
              with Industry.
            </li>
            <li className="card-text">
              Develop commercially viable technologies with social relevance.
            </li>
            <li className="card-text">
              Design programs exploring emerging frontiers.
            </li>
            <li className="card-text">
              Providing best of the facilities for studies in engineering,
              management and research.
            </li>
            <li className="card-text">
              Developing close collaboration with industry through exchange of
              personnel and undertaking consultancy projects.
            </li>
            <li className="card-text">
              Emphasis on International exchange with renowned overseas
              educational institutions.
            </li>
          </div>
        </div>

        <br />
        <br />
      </div>
    </Main>
  );
}

export default aboutVision;
