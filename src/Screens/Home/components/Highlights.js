import React, { useState } from "react";
import Stories from "react-insta-stories";
import Fullscreen from "react-full-screen";
import { useEffect } from "react";
import * as firebase from "firebase";
import "./Highlights.css";
import renderHTML from "react-render-html";

const Highlights = () => {
  const [data, setData] = useState([]);
  const [currentStory, setCurrentStory] = useState([]);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isStoryVisible, setIsStoryVisible] = useState(false);
  var idx;
  var touches = 0;
  const storyData = [
    {
      url: "https://picsum.photos/1000/1000",
      header: {
        heading: "Test",
        subheading: "Posted 2h ago",
        profileImage: "https://picsum.photos/1000/1000",
      },
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/Whatsapp%20Status%20New%20Video%20Outer%20Space.mp4?alt=media&token=b46f69d7-83ce-491b-86ff-6ce34da8f2fa",
      type: "video",
      duration: 1000,
    },
  ];

  const getNews = async () => {
    setData([]);
    let dataRef = firebase.database().ref("story");
    dataRef.on("value", (dataSnapshot) => {
      if (dataSnapshot.val()) {
        let result = Object.values(dataSnapshot.val());
        let contactKey = Object.keys(dataSnapshot.val());
        contactKey.forEach((value, key) => {
          result[key]["key"] = value;
        });
        result.forEach((v, i) => {
          let res = Object.values(v.storyData);
          let resKey = Object.keys(v.storyData);
          resKey.forEach((val, idx) => {
            res[idx]["key"] = val;
          });
        });
        setData(result);
      }
    });
  };

  useEffect(() => {
    getNews();
  }, []);

  useEffect(() => {}, [data]);

  const calculateMousePos = (e) => {};

  const setCurrentStoryData = (index) => {
    let story = [];
    let d = data[index];
    let obj = Object.values(d.storyData);
    obj.forEach((da, i) => {
      let temp = {
        url: da.url,
        seeMore: ({ close }) => (
          <div className="container seeMore h-100 w-100">
            <div className="row">
              <div className="col-11"></div>
              <div
                className="col-1 text-light"
                style={{ fontSize: 30 }}
                onClick={close}
              >
                <i className="far fa-arrow-alt-circle-down"></i>
              </div>
            </div>
            <div className="container seeMore-container">
              {da.snippet
                ? renderHTML(da.snippet)
                : '<h1 className="badge badge-light">No Info Available</h1>'}
            </div>
          </div>
        ),
        type: da.type,
        header: {
          heading: da.heading,
          subheading: da.subHeading,
          profileImage: da.profileImage,
        },
      };
      //console.log(temp)
      story.push(temp);
    });
    //console.log(story)
    //currentStory.push(item.storyData)
    setCurrentStoryIndex(index);
    setCurrentStory(story);
    console.log(currentStoryIndex);
  };

  return (
    <div>
      <Fullscreen
        enabled={isStoryVisible}
        onChange={(f) => setIsStoryVisible(f)}
      >
        {isStoryVisible && (
          <div
            onTouchMove={(e) => {
              e.preventDefault();
              touches += 16;
              console.log(touches);
              if (touches > 500) {
                setIsStoryVisible(false);
              }
            }}
            onClick={(e) => calculateMousePos(e)}
          >
            <div className="row">
              <div className="col-4"></div>
              <div className="col-4 text-center">
                <h4
                  className="text-light"
                  onClick={(e) => setIsStoryVisible(false)}
                >
                  <i className="fas fa-times-circle"></i>
                </h4>
              </div>
            </div>
            <Stories
              stories={currentStory}
              defaultInterval={5000}
              width={window.outerWidth}
              height={window.outerHeight}
              onAllStoriesEnd={() => {
                if (currentStoryIndex === data.length) {
                  setIsStoryVisible(false);
                } else {
                  // setCurrentStoryData(currentStoryIndex + 1)
                  setIsStoryVisible(false);
                  // data.forEach((dat,ind) => {
                  //   let obj = Object.values(dat.storyData)
                  //   var t;
                  //   obj.forEach((d1,i1) => {
                  //     if(i1 === 0){
                  //       t = d1
                  //     }
                  //   })
                  //   if(t.url === currentStory[0].url){
                  //     setCurrentStoryData(ind + 1)
                  //     console.log('OPENING ',ind + 1)

                  //   }
                  // })
                }
              }}
            />
          </div>
        )}
      </Fullscreen>
      <div className="scrolling-wrapper">
        {data.map((item, index) => (
          <div className="ml-3 story" key={index}>
            <img
              src={item.storyData[Object.keys(item.storyData)[0]].profileImage}
              className="rounded-circle"
              style={{ width: 70, height: 70 }}
              onClick={() => {
                setCurrentStoryData(index);
                //console.log(currentStory)
                setIsStoryVisible(true);
              }}
            />
            <br />
            <p
              className="text-center"
              style={{ fontWeight: "bold", font: "times new roman" }}
            >
              {item.heading}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
