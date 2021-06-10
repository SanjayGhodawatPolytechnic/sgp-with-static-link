import React from "react";
import Main from "../../ReusableComponents/Main";

const trustee = () => {
  return (
    <Main isSlideShow={true}>
      <div>
        <br />
        <br />
        <div className="card mb-3 mar">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FPic%2FTrustee.jpg?alt=media&token=0d30d647-944f-40e8-99c2-0377ce523b70"
                className="card-img-top border rounded trust-image"
                alt="..."
              />
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title text-center">
              <i className="fas fa-user-alt"></i> Trustee
            </h5>
            <h4 className="card-title text-center">Vinayak V. Bhosale</h4>
            <p className="card-text">
              <b>Dear Students,</b>
              <br /> <br /> <br />
              The Institute that commenced in the year 2009 with 300 students
              has grown into a vast educational empire harbouring 8000 plus
              students from Kindergarten to Post Graduation level today. It has
              become one of the important landmarks in the districts of Kolhapur
              and Sangli in the education sector. The accreditation of 'A' grade
              through NAAC, ISO 9001:2008 certification, inclusion in the 44th
              best Private Institutes across the Nation through Times of India
              and other such many more recognitions speak volume about the
              quality of academics, teachers, facilities, infrastructure, focus
              on research and innovation that we afford at the Institute.
              <br />
              <br />
              The visionary leadership of the Chairman, Sanjay D. Ghodawat has
              helped us all from the Management to the teaching, non teaching
              staff to raise our standards and level of expectations from
              ourselves as well as the students we mentor. We thank all the
              parents, students and our stakeholders for their faith in the
              Institution. You can be rest assured that your child is in the
              best environment and in the best hands. We believe, "If you treat
              an individual as he is, he will remain how he is. But if you treat
              him as if he were what he ought to be and could be, he will become
              what he ought to be and could be." (Goethe). Choosing Sanjay
              Ghodawat Group of Institutions is choosing 'change' and it is the
              'change for the better'.
            </p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default trustee;
