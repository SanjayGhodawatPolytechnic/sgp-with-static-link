import React from "react";
import { useState } from "react";
import Main from "../../ReusableComponents/Main";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import * as firebase from "firebase";
import "react-notifications/lib/notifications.css";
import "./Admission.css";

const Admission = () => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    interestedBranches: [],
    caste: "",
    SSCMarks: "",
    hscMarks: "",
  });

  const delElementFromInterestedBranches = (list, idx) => {
    list.splice(idx, 1);
    return list;
  };

  const handleChangeInterest = (e) => {
    let list = data.interestedBranches;
    if (e.target.checked) {
      list.push(e.target.value);
    } else {
      var idx;
      list.forEach((v, i) => {
        if (v === e.target.value) {
          idx = i;
        }
      });
      list = delElementFromInterestedBranches(list, idx);
    }
    console.log(list);
    setData({ ...data, interestedBranches: list });
  };

  const handleCasteChange = (e) => {
    if (e.target.checked) {
      setData({ ...data, caste: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dbRef = firebase
      .database()
      .ref("admission-req")
      .child("notResponded");
    dbRef.push(data, (err) => {
      if (!err) {
        NotificationManager.success("We will reach you soon", "Data submitted");
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
      }
    });

    console.log(data);
  };
  return (
    <Main>
      <div className="bgccc">
        <div className="w-100 text-center swiper-title m-0 p-0">
          <h4 className="title">Admission Form</h4>
          <div className="reports-line swiper-line" />
        </div>
        <form action className="form " onSubmit={handleSubmit}>
          <p className="field required">
            <label className="label required" htmlFor="name">
              Full name
            </label>
            <input
              className="text-input"
              id="name"
              name="name"
              required
              type="text"
              value={data.fullName}
              onChange={(e) => {
                setData({ ...data, fullName: e.target.value });
              }}
            />
          </p>
          <p className="field required half">
            <label className="label" htmlFor="email">
              E-mail
            </label>
            <input
              className="text-input"
              id="email"
              name="email"
              required
              type="email"
              value={data.email}
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
            />
          </p>
          <p className="field required half">
            <label className="label" htmlFor="phone">
              Phone
            </label>
            <input
              className="text-input"
              id="phone"
              name="phone"
              type="phone"
              required
              value={data.phone}
              onChange={(e) => {
                setData({ ...data, phone: e.target.value });
              }}
            />
          </p>
          <p className="field">
            <label className="label required" htmlFor="about">
              Address
            </label>
            <textarea
              className="textarea"
              cols={50}
              id="about"
              name="about"
              rows={4}
              value={data.address}
              required
              onChange={(e) => {
                setData({ ...data, address: e.target.value });
              }}
            />
          </p>

          <div className="field">
            <label className="label">Intrested Branch</label>
            <ul className="checkboxes">
              <li className="checkbox">
                <input
                  className="checkbox-input"
                  id="choice-0"
                  name="choice"
                  type="checkbox"
                  value="Civil"
                  onChange={handleChangeInterest}
                />
                <label className="checkbox-label" htmlFor="choice-0">
                  Civil
                </label>
              </li>
              <li className="checkbox">
                <input
                  className="checkbox-input"
                  id="choice-1"
                  name="choice"
                  type="checkbox"
                  value="Mechanical"
                  onChange={handleChangeInterest}
                />
                <label className="checkbox-label" htmlFor="choice-1">
                  Mechanical
                </label>
              </li>
              <li className="checkbox">
                <input
                  className="checkbox-input"
                  id="choice-2"
                  name="choice"
                  type="checkbox"
                  value="Computer Science"
                  onChange={handleChangeInterest}
                />
                <label className="checkbox-label" htmlFor="choice-2">
                  CSE
                </label>
              </li>
              <li className="checkbox">
                <input
                  className="checkbox-input"
                  id="choice-3"
                  name="choice"
                  type="checkbox"
                  value="E & TC"
                  onChange={handleChangeInterest}
                />
                <label className="checkbox-label" htmlFor="choice-3">
                  E &amp; TC
                </label>
              </li>
              <li className="checkbox">
                <input
                  className="checkbox-input"
                  id="choice-4"
                  name="choice"
                  type="checkbox"
                  value="Electrical"
                  onChange={handleChangeInterest}
                />
                <label className="checkbox-label" htmlFor="choice-4">
                  Electrical
                </label>
              </li>
            </ul>
          </div>
          <div className="field">
            <label className="label">Caste</label>
            <ul className="options">
              <li className="option">
                <input
                  className="option-input"
                  id="option-0"
                  name="option"
                  type="radio"
                  value="SC"
                  onChange={handleCasteChange}
                />
                <label className="option-label" htmlFor="option-0">
                  SC
                </label>
              </li>
              <li className="option">
                <input
                  className="option-input"
                  id="option-1"
                  name="option"
                  type="radio"
                  value="ST"
                  onChange={handleCasteChange}
                />
                <label className="option-label" htmlFor="option-1">
                  ST
                </label>
              </li>
              <li className="option">
                <input
                  className="option-input"
                  id="option-2"
                  name="option"
                  type="radio"
                  value="OBC"
                  onChange={handleCasteChange}
                />
                <label className="option-label" htmlFor="option-2">
                  OBC
                </label>
              </li>
              <li className="option">
                <input
                  className="option-input"
                  id="option-3"
                  name="option"
                  type="radio"
                  value="SBC"
                  onChange={handleCasteChange}
                />
                <label className="option-label" htmlFor="option-3">
                  SBC
                </label>
              </li>
              <li className="option">
                <input
                  className="option-input"
                  id="option-4"
                  name="option"
                  type="radio"
                  value="Open"
                  onChange={handleCasteChange}
                />
                <label className="option-label" htmlFor="option-4">
                  Open
                </label>
              </li>
              <li className="option">
                <input
                  className="option-input"
                  id="option-5"
                  name="option"
                  type="radio"
                  value="EWS"
                  onChange={handleCasteChange}
                />
                <label className="option-label" htmlFor="option-5">
                  EWS
                </label>
              </li>
              <li className="option">
                <input
                  className="option-input"
                  id="option-6"
                  name="option"
                  type="radio"
                  value="NT-C,D"
                  onChange={handleCasteChange}
                />
                <label className="option-label" htmlFor="option-6">
                  NT-C,D
                </label>
              </li>
              <li className="option">
                <input
                  className="option-input"
                  id="option-7"
                  name="option"
                  type="radio"
                  value="VJ/DT"
                  onChange={handleCasteChange}
                />
                <label className="option-label" htmlFor="option-7">
                  VJ/DT
                </label>
              </li>
              <li className="option">
                <input
                  className="option-input"
                  id="option-8"
                  name="option"
                  type="radio"
                  value="Other"
                  onChange={handleCasteChange}
                />
                <label className="option-label" htmlFor="option-8">
                  Other
                </label>
              </li>
            </ul>
          </div>
          <p className="field  half">
            <label className="label" htmlFor="10thmarks">
              10th Marks
            </label>
            <input
              className="text-input"
              id="marks10"
              name="marks10"
              type="number"
              value={data.SSCMarks}
              onChange={(e) => {
                setData({ ...data, SSCMarks: e.target.value });
              }}
            />
          </p>
          <p className="field half">
            <label className="label" htmlFor="12thmarks">
              12th Marks
            </label>
            <input
              className="text-input"
              id="marks12"
              name="marks12"
              type="number"
              value={data.hscMarks}
              onChange={(e) => {
                setData({ ...data, hscMarks: e.target.value });
              }}
            />
          </p>

          <p className="field half">
            <input className="button" type="submit" defaultValue="Send" />
          </p>
        </form>
      </div>
      <NotificationContainer />
    </Main>
  );
};

export default Admission;
