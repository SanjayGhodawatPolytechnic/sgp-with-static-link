import React from "react";
import NavLinks from "./Navlinks";
import "../Reusables/CSS/HOD.css";
import Main from "../../../ReusableComponents/Main";
import DeptMenu from "../Reusables/DeptMenu";

const CivilHODDesk = () => {
  return (
    <Main className="container-lg cse w-100 m-2 p-0">
      <div className="row deptcont">
        <DeptMenu dept="Civil" subMenu={NavLinks} />
        <div className="col text-dark w-100">
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4"
            data-target="#navbar-example3"
            data-offset="0"
          >
            <div className="row">
              <div className="col text-center">
                <img
                  alt="cse hod"
                  className="img-fluid rounded"
                  src="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2Fhods%2FPatilDhiraj.jpg?alt=media&token=b8f2b6df-a9f8-4d8f-a3b4-e9e90e456627"
                />
              </div>
              <div className="col-12 text-center">
                <b>Mr. Patil Dhiraj Ramchandra</b>
              </div>
              <div className="col-12 text-center">
                <b>Head of Department</b>
              </div>
            </div>
            <p className="m-1 words">
              Civil engineering is the application of physical and scientific
              principles for solving the problems of society, and its history is
              intricately linked to advances in understanding of physics and
              mathematics throughout history. Because civil engineering is a
              wide-ranging profession, including several specialized
              sub-disciplines, its history is linked to knowledge of structures,
              materials science, geography, geology, soils, hydrology,
              environment, mechanics and other fields. Throughout ancient and
              medieval history most architectural design and construction was
              carried out by artisans, such as stonemasons and carpenters,
              rising to the role of master builder. Knowledge was retained in
              guilds and seldom supplanted by advances. Structures, roads and
              infrastructure that existed were repetitive, and increases in
              scale were incremental.
              <br />
              Civil Engineering department of Sanjay Ghodawat Polytechnic aims
              to provide quality technical education to students and prepare
              them to meet future need of society. There are several activities
              like site visits; expert lectures and personality development
              programs are conducted in the department for students to develop
              their professional skills. Civil engineering department has well
              qualified teaching faculties who are enthusiastic in imparting the
              quality teaching to the students. Our department has well equipped
              laboratories, computational facilities and good environment for
              learning. "We welcome you to civil engineering department as
              undergraduate student and we hope to be part of your success".
              <br />
              So far about more than 85% students admitted to higher educational
              institutes of various universities in Maharashtra. All this was
              achievable due to dedicated teaching and non-teaching faculty and
              the support from the generous management. We have 15teaching & 03
              non-teaching faculty members both from which 05 have acquired
              Master's Degree in various fields of Civil Engineering and all
              remaining 10 faculties are perusing their Master's Degree. Our
              infrastructure has been state-of-the-art for which we thank for
              support of management. Quality of students and their achievements
              in curricular and co-curricular activities have branded our
              department as a leading center of learning. In the year 2016-17,
              we have applied for the National Board of Accreditation, India.
              <br />
            </p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default CivilHODDesk;
