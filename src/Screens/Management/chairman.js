import React from "react";
import Main from "../../ReusableComponents/Main";
import "./CSS/management.css";

function managementChairman() {
  return (
    <Main isSlideShow={true}>
      <div>
        <br />
        <br />
        <div className="card mb-3 mar ">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FHome%2Fsanjayghodawat.jpg?alt=media&token=6ec511d4-45d9-4d4a-a3fb-e650c8f7243c"
                className="card-img-top trust-image"
                alt="..."
              />
            </div>
          </div>
          <div className="card-body ">
            <h5 className="card-title text-center">
              <i className="fas fa-user-alt"></i> Chairman
            </h5>
            <h4 className="card-title text-center">Sanjay Ghodawat</h4>
            <p className="card-text">
              Welcome to the Sanjay Ghodawat Group of Institutions! Education is
              making students aware of the infinite potential within and
              bringing it up so that the result is transformation of
              personalities. Education should bring students out of their
              comfort zone and challenge them to reach out for their best of
              abilities. In the era of the 21st Century, where we deal with
              knowledge workers and have students who are flooded with
              information from all sides, the role of teacher becomes all the
              more vital. Teachers in this era have to be by the side of the
              students help them distinguish between the right and wrong
              knowledge, motivate them to find their potential, find themselves
              as they grapple with challenges and connect them with their inner
              conscience so that they adhere to the right values and principles
              and emerge not just as success in the world but significant beings
              who have touched lives around and made the world a better place{" "}
              <br />
              <br />
              At Sanjay Ghodawat Group of Institutions, you will find the right
              environment, the right facilities, the right academics, teachers
              and experts who will engage your ward into constructive learning
              activities that will bring out and nurture the leaders in him/her.
              Our motto says, 'Conquer the world with SGI', we are committed to
              give the very best of all essentials in the field of academics so
              that we see the motto coming true in the lives of our students and
              we rest in the assurance that somewhere some soul has breathed
              better because of Sanjay Ghodawat Group of Institutions.
            </p>
            <a
              className="btn btn-lg btn-outline-success w-100"
              href="http://www.sgipolytechnic.in/Pdf/Chairman_Awards.pdf"
            >
              <i className="fas fa-award"></i> Awards
            </a>
          </div>
        </div>
      </div>
    </Main>
  );
}

export default managementChairman;
