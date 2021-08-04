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

  const formatData = (dataSnapshot) => {
    if (dataSnapshot.val()) {
      let result = Object.values(dataSnapshot.val());
      return result;
    }
  };

  const getAllSubScribers = async () => {
    let dataRef = firebase.database().ref("subscribers");
    let data = await dataRef.once("value");
    return formatData(data);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!data.email) {
      NotificationManager.error("Email is required!!!");
      return;
    }

    getAllSubScribers().then((res) => {
      console.log(res);

      let isDuplicate = false;
      res.forEach((val) => {
        if (val.email === data.email) {
          isDuplicate = true;
        }
      });
      if (!isDuplicate) {
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
      } else {
        NotificationManager.error("Email Alredy subscribed!!!");
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
