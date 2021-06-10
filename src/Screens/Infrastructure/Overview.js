import React from "react";
import "./CSS/Overview.css";
import Main from "../../ReusableComponents/Main";

const Overview = () => {
  const Items = [
    {
      image: "http://www.sgipolytechnic.in/Campus/01.jpg",
      caption: "Institute Top View",
    },

    {
      image: "http://www.sgipolytechnic.in/Campus/02.jpg",
      caption: "Campus View",
    },
    {
      image: "http://www.sgipolytechnic.in/Campus/03.jpg",
      caption: "Campus Entrance",
    },
    {
      image: "http://www.sgipolytechnic.in/Campus/04.jpg",
      caption: "Institute Buildings",
    },
    {
      image: "http://www.sgipolytechnic.in/Campus/05.jpg",
      caption: "Helipad at SGI",
    },
    {
      image: "http://www.sgipolytechnic.in/Campus/06.jpg",
      caption: "Internal View of Building",
    },
    {
      image: "http://www.sgipolytechnic.in/Campus/07.jpg",
      caption: "Internal View of Building",
    },
    {
      image: "http://www.sgipolytechnic.in/Campus/08.jpg",
      caption: "Internal View of Building",
    },
    {
      image: "http://www.sgipolytechnic.in/Campus/09.jpg",
      caption: "Internal View of Building",
    },
    {
      image: "http://www.sgipolytechnic.in/Campus/10.jpg",
      caption: "Institute Building",
    },
    {
      image: "http://www.sgipolytechnic.in/Campus/11.jpg",
      caption: "SGI beautiful campus",
    },
    {
      image: "http://www.sgipolytechnic.in/Campus/12.jpg",
      caption: "SGI beautiful campus",
    },
    {
      image: "http://www.sgipolytechnic.in/Campus/13.jpg",
      caption: "Institute Building",
    },
    {
      image: "http://www.sgipolytechnic.in/Campus/14.jpg",
      caption: "Research and Development Center",
    },
    {
      image: "http://www.sgipolytechnic.in/Campus/15.jpg",
      caption: "MBA Building - Front View",
    },
    {
      image: "http://www.sgipolytechnic.in/Campus/16.jpg",
      caption: "MBA Building",
    },
    {
      image: "http://www.sgipolytechnic.in/Campus/17.jpg",
      caption: "MBA Area",
    },
    {
      image: "http://www.sgipolytechnic.in/Campus/18.jpg",
      caption: "MBA Building Internal View",
    },
    {
      image: "http://www.sgipolytechnic.in/Campus/19.jpg",
      caption: "SGI Campus",
    },
    {
      image: "http://www.sgipolytechnic.in/Campus/20.jpg",
      caption: "MBA Building Internal View",
    },
    {
      image: "http://www.sgipolytechnic.in/Campus/21.jpg",
      caption: "Food Court",
    },
    {
      image: "http://www.sgipolytechnic.in/Campus/22.jpg",
      caption: "Food Court - Outside View",
    },
    {
      image: "http://www.sgipolytechnic.in/Campus/23.jpg",
      caption: "Food Court - Outside View",
    },
    {
      image: "http://www.sgipolytechnic.in/Campus/24.jpg",
      caption: "Helipad View",
    },
    {
      image: "http://www.sgipolytechnic.in/Campus/25.jpg",
      caption: "Food Court - Inside View",
    },
    {
      image: "http://www.sgipolytechnic.in/Campus/26.jpg",
      caption: "Food Court - Inside View",
    },
    {
      image: "http://www.sgipolytechnic.in/Campus/27.jpg",
      caption: "Amphi Theatre",
    },
    {
      image: "http://www.sgipolytechnic.in/Campus/28.jpg",
      caption: "Hostel Buildings",
    },
    {
      image: "http://www.sgipolytechnic.in/Campus/29.jpg",
      caption: "Playing Ground",
    },
    {
      image: "http://www.sgipolytechnic.in/Campus/30.jpg",
      caption: "Institute Top View",
    },
    {
      image: "http://www.sgipolytechnic.in/Campus/31.jpg",
      caption: "Institute Top View",
    },
    {
      image: "http://www.sgipolytechnic.in/Campus/32.jpg",
      caption: "Institute Top View",
    },
  ];

  return (
    <Main>
      <div className="main">
        <div className="grid-container">
          {Items.map((d, i) => (
            <div>
              <img
                alt="overview"
                className={`grid-item grid-item-${i}`}
                src={d.image}
              />
              <span className="badge badge-danger">{d.caption}</span>
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
};

export default Overview;
