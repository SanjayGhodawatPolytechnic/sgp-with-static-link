import React from "react";
import "./CSS/Menu.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="page-footer font-small  pt-4 aaa">
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1 txt-color">
              <h5 className="font-weight-bold text-uppercase mb-4">
                Sanjay Ghodawat Polytechnic
              </h5>
              <p>
                In the world where it is commonplace to see mediocrity as the
                order of the day, SGI always stands as the guiding star of
                brilliance, quality and deliverance beyond expectations.
              </p>
              <Link to="/suggest">
                <button className="btn btn-light">Any Suggestion</button>
              </Link>
              {/*<p>Innovativeness and Creativity are the hallmarks of a genius enterprise and SGI stands to be a stage where these qualities would be nurtured, encouraged and blossomed.</p>*/}
            </div>
            <hr className="clearfix w-100 d-md-none" />
            <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1 txt-color text-center">
              <h5 className="font-weight-bold text-uppercase mb-4">About</h5>
              <ul className="list-unstyled about-sec">
                <li>
                  <p>
                    <span href="#!">
                      <p className="txt-color">SGP</p>
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span href="#!">
                      <p className="txt-color">Staff</p>
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span href="#!">
                      <p className="txt-color">Facilities</p>
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span href="#!">
                      <p className="txt-color">Awards</p>
                    </span>
                  </p>
                </li>
              </ul>
            </div>
            <hr className="clearfix w-100 d-md-none" />
            <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1 txt-color">
              <h5 className="font-weight-bold text-uppercase mb-4">Address</h5>
              <ul className="list-unstyled">
                <li>
                  <p>
                    <i className="fas fa-home mr-3" /> Atigre, 416118,
                    Maharashtra
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fas fa-envelope mr-3" />{" "}
                    principal@sgipolytechnic.in
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fas fa-phone mr-3 txt-color" /> 0230 - 2463800
                  </p>
                </li>
              </ul>
            </div>
            <hr className="clearfix w-100 d-md-none" />
            <div className="col-md-2 col-lg-2 text-center mx-auto my-4 txt-color">
              <h5 className="font-weight-bold text-uppercase mb-4">
                Follow Us
              </h5>
              <a
                className="btn-floating btn-fb"
                href="https://www.facebook.com/108251421053367/photos/a.234587121753129/249380686940439"
                target="blank"
              >
                <i className="fab fa-facebook-f" />
              </a>

              <br />
              <br />
              <a
                className="btn-floating btn-tw"
                href="https://twitter.com/SGIPolytechnic"
                target="blank"
              >
                <i className="fab fa-twitter" />
              </a>
              <br />
              <br />
              <a
                className="btn-floating btn-tw"
                href="https://www.instagram.com/p/COiC3DaHTI2/?igshid=j0gr9gvnl0pa"
                target="blank"
              >
                <i className="fab fa-instagram" />
              </a>
              <br />
              <br />
              <a
                className="btn-floating btn-tw"
                href="https://www.youtube.com/channel/UCshIhOCPN0Pqa25cVPomI0g"
                target="blank"
              >
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          © 2021 Copyright:
          <h4>Sanjay Godawat Polytechnic</h4>
          <h6>
            Designed and Developed By:{" "}
            <a
              href="https://www.instagram.com/yashkalavadiya1010/"
              target="blank"
            >
              Yash Kalavadiya
            </a>
            ,{" "}
            <a href="https://www.instagram.com/chintan0539/" target="blank">
              Chintan Patel
            </a>
            ,{" "}
            <a href="https://www.instagram.com/potterhead_rj/" target="blank">
              Rupam Jadhav
            </a>
            ,{" "}
            <a href="https://www.instagram.com/aditya_7447/" target="blank">
              Aditya Wakarekar
            </a>{" "}
            Under guidance of{" "}
            <a href="#" target="blank">
              Sagar Chavan(CSE HOD)
            </a>{" "}
          </h6>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
