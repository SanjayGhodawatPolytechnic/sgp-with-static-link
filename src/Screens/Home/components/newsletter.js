import React from "react";
import "./Recents.css";
import * as firebase from "firebase";
import { useState } from "react";
import "./newsletter.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
const Newsletter = ({ setIsRecentsLoading }) => {
  const [data, setData] = useState({
    email: "",
    postedOn: firebase.database.ServerValue.TIMESTAMP,
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const dbreference = firebase.database().ref("subscribers");

    await dbreference.push(data, (err) => {
      if (!err) {
        fetch("https://sgpbackend.herokuapp.com/mail/sendGreetings", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => {
            NotificationManager.success(
              "Successfully! Subscribed to the news letter "
            );
          })
          .catch((err) => {
            console.log(err);
          });

        setData({
          email: "",
        });
      }
    });
  };
  return (
    <div id="news-letter" className="section-newsletter">
      <div className="newsletter-subscribe mt-5 container">
        <div className="container">
          <div className="intro">
            <h2 className="text-center newsletter">
              Subscribe to our Newsletter
            </h2>
            <p className="text-center">
              Be the first one to know the updates related to the university{" "}
            </p>
          </div>
          <form className="form-inline" onSubmit={onSubmit}>
            <div className="form-group">
              <input
                className="form-control border-botton-2 border-bottom-primary"
                type="email"
                name="email"
                required
                placeholder="Your Email"
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
                value={data.email}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="submit">
                Subscribe{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
};

export default Newsletter;
