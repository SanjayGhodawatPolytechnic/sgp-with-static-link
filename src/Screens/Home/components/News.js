import React from "react";

import "./News.css";
import * as firebase from "firebase";
import { useState } from "react";
import { useEffect } from "react";

const GetNews = () => {
  const [newsData, newsSetData] = useState([]);
  const [links, setLinks] = useState([]);

  const getallNews = () => {
    const dbref = firebase.database().ref("news");
    dbref.on("value", (datasnapshot) => {
      if (datasnapshot.val()) {
        let result = Object.values(datasnapshot.val());
        result.forEach((v, i) => {
          let date = new Date(v.postedOn);
          let dateData = [];
          dateData.push(date.getDate().toString());
          dateData.push((date.getMonth() + 1).toString());
          dateData.push(date.getFullYear().toString());
          v.postedOn = dateData.join("/");
        });
        result.reverse();
        newsSetData(result);
      }
    });
  };

  const [circularData, circularSetData] = useState([]);

  const getAllLinks = () => {
    const dbRef = firebase.database().ref("impLinks");
    dbRef.on("value", (datasnapshot) => {
      if (datasnapshot.val()) {
        // console.log(datasnapshot.val());
        let result = Object.values(datasnapshot.val());
        let keys = Object.keys(datasnapshot.val());
        keys.forEach((val, idx) => {
          result[idx]["key"] = val;
        });
        result.forEach((v, i) => {
          let date = new Date(v.postedOn);
          let dateData = [];
          dateData.push(date.getDate().toString());
          dateData.push((date.getMonth() + 1).toString());
          dateData.push(date.getFullYear().toString());
          v.postedOn = dateData.join("/");
        });
        setLinks(result);
      }
    });
  };
  useEffect(() => {
    getallNews();
    getAllLinks();
  }, []);

  return (
    <div className="section-news">
      <div className="new_row">
        <div className="new_col">
          <section className="blog-cat mt-5 pb-5">
            {/* <h1 className="in-news h3 text-red font-italic">News</h1> */}
            <div className="m-0 p-0">
              <h4 className="news-title"> latest News</h4>
              <div className="news-line" />
            </div>
            <div className="news-cont-scrollable">
              {newsData.map((d, i) => {
                return (
                  <div
                    className={`fullbar-item w-100 cursor-pointer ${
                      i % 2 == 0 ? "bg-white" : "bg-light"
                    }`}
                    key={i}
                    id={i}
                  >
                    <div className="container" id={i}>
                      <div className="row py-1 py-md-4 align-items-center border-top">
                        <div className="col-md-10">
                          <h3 className="feed-item-heading m-0 font-weight-800">
                            <a
                              className="text-black"
                              href={d.FileURL}
                              target="blank"
                            >
                              {d.title}
                            </a>
                          </h3>
                        </div>
                        <div className="col-md-2">
                          <p className="m-0 text-pink text-uppercase">
                            {d.postedOn}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
        <div className="new_col">
          <section className="blog-cat mt-5 pb-5">
            {/* <h1 className="in-news h3 text-red font-italic">Circular</h1> */}
            <div>
              <h4 className="circular-title">Important Links</h4>
              <div className="circular-line" />
            </div>
            <div className="circular-cont-scrollable">
              {links.map((d, i) => {
                if (d.isFiles) {
                  return (
                    <div
                      className={`fullbar-item w-100 cursor-pointer `}
                      key={i}
                    >
                      <div
                        className={`container ${
                          i % 2 == 0 ? "bg-white" : "bg-light"
                        }`}
                        id={i}
                      >
                        <div className="row py-1 py-md-4 align-items-center border-top">
                          <div className="col-md-10">
                            <h3 className="feed-item-heading m-0 font-weight-800">
                              <a
                                className="text-black"
                                target="blank"
                                href={d.FileURL}
                                dangerouslySetInnerHTML={{ __html: d.content }}
                              ></a>
                            </h3>
                          </div>
                          <div className="col-md-2">
                            <p className="m-0 text-pink text-uppercase">
                              {d.postedOn}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="fullbar-item w-100 cursor-pointer" key={i}>
                      <div
                        className={`container ${
                          i % 2 == 0 ? "bg-white" : "bg-light"
                        }`}
                        id={i}
                      >
                        <div className="row py-1 py-md-4 align-items-center border-top">
                          <div className="col-md-10">
                            <div
                              className="feed-item-heading m-0 font-weight-800"
                              dangerouslySetInnerHTML={{ __html: d.content }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GetNews;
