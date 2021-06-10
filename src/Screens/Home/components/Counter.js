import React from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import "./Counter.css";
import PassedIcon from "./icons/PassedIcon";
import TeacherIcon from "./icons/TeacherIcon";
import ThisYear from "./icons/ThisYear";

import * as firebase from "firebase";
import { useState, useEffect } from "react";

const Counter = ({ setIsCounterLoading }) => {
  const [data, setData] = useState(null);

  const getCounter = async () => {
    setIsCounterLoading(true);
    const dbref = firebase.database().ref("counterVal");
    dbref.on("value", (datasnapshot) => {
      if (datasnapshot.val()) {
        let result = datasnapshot.val();
        setData({
          studentThisYear: parseInt(result.studentThisYear),
          passedStudents: parseInt(result.passedStudents),
          certifiedTeachers: parseInt(result.certifiedTeachers),
        });
        // console.log(result);
        setIsCounterLoading(false);
      }
    });
  };

  useEffect(() => {
    getCounter();
  }, []);

  return (
    <div id="skew2" className="cus-div">
      <div className="fh5co-counters" data-stellar-background-ratio="0.5">
        {/* <div className="overlay"></div> */}
        <div className="container">
          <div className="row skew">
            <div className="col-md-10 col-md-offset-1">
              <div className="row">
                <div className="col-md-3 col-sm-6 text-center animate-box bg-transparent p-2 m-0">
                  <span className="icon w-100 h-100">
                    <ThisYear />
                  </span>
                  {data && (
                    <CountUp
                      className="fh5co-counter js-counter"
                      end={data.studentThisYear}
                    >
                      {({ countUpRef, start }) => (
                        <ReactVisibilitySensor onChange={start} delayedCall>
                          <span
                            ref={countUpRef}
                            className="fh5co-counter js-counter"
                          />
                        </ReactVisibilitySensor>
                      )}
                    </CountUp>
                  )}
                  <span className="fh5co-counter-label">
                    Students This Year
                  </span>
                </div>
                <div className="col-md-3 col-sm-6 text-center animate-box bg-transparent p-0 m-0">
                  <span className="icon w-100 h-100">
                    <PassedIcon />
                  </span>
                  {data && (
                    <CountUp
                      className="fh5co-counter js-counter"
                      end={data.passedStudents}
                      redraw={true}
                    >
                      {({ countUpRef, start }) => (
                        <ReactVisibilitySensor onChange={start} delayedCall>
                          <span
                            ref={countUpRef}
                            className="fh5co-counter js-counter"
                          />
                        </ReactVisibilitySensor>
                      )}
                    </CountUp>
                  )}
                  <span className="fh5co-counter-label">Passed Students</span>
                </div>
                <div className="col-md-3 col-sm-6 text-center animate-box bg-transparent p-0 m-0">
                  <span className="icon w-100 h-100">
                    <TeacherIcon />
                  </span>
                  {data && (
                    <CountUp
                      className="fh5co-counter js-counter"
                      end={data.certifiedTeachers}
                      redraw={true}
                    >
                      {({ countUpRef, start }) => (
                        <ReactVisibilitySensor onChange={start} delayedCall>
                          <span
                            ref={countUpRef}
                            className="fh5co-counter js-counter"
                          />
                        </ReactVisibilitySensor>
                      )}
                    </CountUp>
                  )}
                  <span className="fh5co-counter-label">
                    Certified Teachers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
