import React from "react";
import Main from "../../ReusableComponents/Main";
import "./CSS/management.css";
const secretary = () => {
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
                src="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FPic%2Fsecretary.jpg?alt=media&token=76bbe63d-facf-4853-9152-dec28de3bc3c"
                className="card-img-top border rounded trust-image"
                alt="..."
              />
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title text-center">
              <i className="fas fa-user-alt"></i> Secretary
            </h5>
            <h4 className="card-title text-center">Shrenik S. Ghodawat</h4>
            <p className="card-text">
              <b>Dear Students,</b>
              <br /> <br /> <br />
              In my view, India is already a Super Power, not in economic terms
              but due to the young population we have and the power these youth
              possess.
              <br />
              <br />
              Young population is the backbone for strong nation building. We as
              youngsters are the custodians of our country's progress and it is
              our constructive efforts that will in turn drive the economic
              growth henceforth.
              <br />
              <br />
              I have inherited a dream, passed on to me by my elders, of a
              greener and peaceful India and a nation that is self sufficient
              and carbon neutral. As a contribution to this dream, we as group
              today are already generating over 100MW of electricity through
              renewable sources and play a substantial role in terms of being an
              infrastructure ancillary to this sector.
              <br />
              <br />
              SGI, as I foresee, is a medium to impart conventional education in
              an unconventional way. We at SGI, strive hard to provide world
              className facilities to all the students so that they excel as
              leaders of tomorrow.
              <br />
              <br />
              There are constant and conscious efforts of all our staff members
              to live up to the group's vision in creating more visionaries for
              a stronger and better tomorrow.
              <br />
              <br />
              I hope and pray that the youth of today realize the potential
              bestowed in them and channel all their energy in converting their
              potential into a reality. One must remember that every drop goes
              on to form an ocean. Thus every constructive effort, small or big,
              will lead us one step closer to our goals.
              <br />
              <br />
              Save energy, save earth. I wish all the students the very best for
              their future endeavors and hope we all work towards a greener and
              better tomorrow
            </p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default secretary;
