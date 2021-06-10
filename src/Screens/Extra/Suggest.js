import React from "react";

import * as firebase from "firebase";
import Main from "../../ReusableComponents/Main";

const Suggest = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    var subject = document.querySelector("#subject").value;

    var message = document.querySelector("#message").value;

    const dbReference = firebase.database().ref("suggestion");

    var data = {
      subject: subject,
      message: message,
    };

    await dbReference.push(data, (err) => {
      if (!err) {
        console.log("SUCCESS");
      }
    });
  };
  return (
    <div>
      <Main isSlideShow={true}>
        <div>
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            Any Suggestions
          </h2>
          {/*Section description*/}
          <p className="text-center w-responsive mx-auto mb-5">
            Send suggestions anonymously
          </p>
          <div className="row">
            <div className="col-md-9 mb-md-0 mb-5">
              <form id="contact-form" name="contact-form" method="POST">
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                      />
                      <label htmlFor="subject" className>
                        Subject
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows={2}
                        className="form-control md-textarea"
                        defaultValue={""}
                      />
                      <label htmlFor="message">Your message</label>
                    </div>
                  </div>
                </div>
              </form>
              <div className="text-center text-md-left">
                <button
                  className="btn btn-primary"
                  onClick={(e) => {
                    onSubmit(e);
                  }}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </div>
  );
};

export default Suggest;
