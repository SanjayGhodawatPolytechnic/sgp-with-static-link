import React from "react";
import "./CSS/Overview.css";
import Main from "../../ReusableComponents/Main";
import _ from "lodash";

const auditorium = () => {

  return (
    <Main>
      <div className="main">
        <div className="grid-container">
         {_.range(1, 10).map((val, idx) => (
            <div>
              <img
                className={`grid-item grid-item-${idx}`}
                 src={require(`../../img/facilities/Auditorium/Auditorium1${val}.jpg`)}

                alt="auditorium"
              />
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
};

export default auditorium;
