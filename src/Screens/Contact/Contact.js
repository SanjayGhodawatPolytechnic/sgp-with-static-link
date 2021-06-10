import React from "react";
import Main from "../../ReusableComponents/Main";
import * as firebase from "firebase";
import "./CSS/Contact.css";
import { useState } from "react";
import LocationMap from "./Map";

const AddContact = () => {
  const [data, setData] = useState({
    name: "",
    phone: null,
    email: "",
    message: "",
  });
  const onSubmit = async (e) => {
    e.preventDefault();

    const dbReference = firebase.database().ref("contact");

    // var d = {
    //   name: data.name,
    //   phno: data.phone,
    //   email: data.email
    // };

    await dbReference
      .push(data, (err) => {
        if (!err) {
          console.log("uploaded");
          setData({
            name: "",
            phone: "",
            email: "",
            message: "",
          });
        }
      })
      .then(() => {
        fetch("https://sgpbackend.herokuapp.com/mail/sendGreetings", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      });
  };

  return (
    <div>
      <Main isSlideShow={true}>
        <div className="contact rounded border border-light">
          <div className="row">
            <div className="col-md-3">
              <div className="contact-info">
                <img
                  src="https://image.ibb.co/kUASdV/contact-image.png"
                  alt="contact"
                />
                <h2 className="text-light">Contact Us</h2>
                <h4 className="text-light">
                  We will reach you as soon as possible
                </h4>
              </div>
            </div>
            <div className="col-md-9">
              <div className="contact-form">
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="fname">
                    Name:
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="contactName"
                      placeholder="Name"
                      name="fname"
                      onChange={(e) => {
                        setData({ ...data, name: e.target.value });
                      }}
                      value={data.name}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="comment">
                    Phone No.
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="number"
                      className="form-control"
                      id="contactNumber"
                      placeholder="Phone Number"
                      name="fname"
                      onChange={(e) => {
                        setData({ ...data, phone: e.target.value });
                      }}
                      value={data.phone}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="comment">
                    Email.
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="contactNumber"
                      placeholder="Phone Number"
                      name="fname"
                      onChange={(e) => {
                        setData({ ...data, email: e.target.value });
                      }}
                      value={data.email}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="comment">
                    Message.
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="message"
                      placeholder="Message"
                      name="msg"
                      onChange={(e) => {
                        setData({ ...data, message: e.target.value });
                      }}
                      value={data.message}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button
                      type="submit"
                      className="btn w-100 contact-submit"
                      onClick={(e) => {
                        // console.log(data);
                        onSubmit(e);
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row cont">
          <div className="col-md-6 w-100">
            <LocationMap />
          </div>
          <div className="col-md-6 w-100 address">
            <div className="data">
              <div className="address-data">
                <div className="add-title">
                  <i className="fa fa-map-marker mr-4" aria-hidden="true"></i>
                  Address
                </div>
                <div className="add-desc p-4">
                  {"    "}Atigre, 416118, Maharatra
                </div>
              </div>
              <div className="address-data">
                <div className="add-title">
                  <i className="fa fa-phone mr-4" aria-hidden="true"></i>Lets
                  Talk
                </div>
                <div className="add-desc p-4 text-success">0230 - 2463800</div>
              </div>
              <div className="address-data">
                <div className="add-title">
                  <i className="fa fa-envelope-o mr-4" aria-hidden="true"></i>
                  General Support
                </div>
                <div className="add-desc p-4 text-success">
                  principal@sgipolytechnic.in
                </div>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </div>
  );
};

export default AddContact;
