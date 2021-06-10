import React from "react";
import Main from "../../../ReusableComponents/Main";
import DeptMenu from "../Reusables/DeptMenu";
import NavLinks from "./NavLinks";
import "../Reusables/CSS/DeptHome.css";
import Icon from "./Icon";
const Fy = () => {
  return (
    <Main className="container-lg cse w-100 m-2 p-0">
      <div className="row deptcont">
        <DeptMenu dept="Basic Science and Humanities" subMenu={NavLinks} />
        <div className="col text-dark w-100">
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 w-100 p-3"
            data-target="#navbar-example3"
            data-offset="0"
          >
            <div className="illustration-cont">
              <Icon width="300" height="300" />
            </div>
            <p className="m-1">
              The department of Basic Sciences & humanities was established in
              the year 2012 right from the day of inception of the college. The
              department includes Physics, Chemistry, Mathematics and
              Professional communication. Physics is the heart of all
              engineering branches. It is the study of behavior of real things
              and natural phenomenon. It provides fundamental understanding of
              basic principles through theory and practice.
              <br />
              Chemistry department aims at unveiling structure and nature of
              materials in the nature. Mathematics plays a vital role in
              engineering field developing logical understanding and helping
              engineers to understand mathematical dimension of engineering.
              English being lingua franca of the world provides great employment
              as well as knowledge sharing opportunities to all graduates. This
              need is fulfilled by Professional Communication through providing
              ample ground for the students to learn soft skills required.
              <br />
              <br />
              <br />
            </p>
            <h4 className="m-1">
              {" "}
              <b>Salient Features:</b>{" "}
            </h4>
            <p className="m-1">
              The department consists of highly qualified and dedicated
              faculties. There are thirteen faculties working in this
              department. This department comprises three spacious, well
              equipped and sophisticated laboratories. The department focuses on
              overall development of students including personality development,
              communication skills, soft skills, etiquettes and manners etc. To
              develop these skills seminars, group wise debate, group
              discussion, writing practices are conducted in each semester. In
              addition to these, Language software is used in professional
              Communication laboratory to develop language skills of students.
              The emphasis is given on basic understanding of subject. <br />{" "}
              Through the training programs by industry personnel, the students
              are made aware of the importance of soft skills in industrial
              area. The interactive methods like power point presentation,
              models, cross tables, question answering games, videos of certain
              topics are used in the lecture hall to increase interest of
              students. Parental affection and care is provided to all students
              by faculty members. Considering new entry of students in to the
              college, counseling sessions are arranged so as to build
              confidence in them. The department is striving hard to achieve
              excellence in academics.
            </p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Fy;
