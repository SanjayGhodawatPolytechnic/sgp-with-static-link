import React, { useState, useEffect } from "react";
import Main from "./Main";
import * as firebase from "firebase";
import ReactLoading from "react-loading";

export default function MoreUpdates(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getNews = async () => {
    setIsLoading(true);
    let dataRef = firebase.database().ref("updates");
    dataRef.on("value", (dataSnapshot) => {
      if (dataSnapshot.val()) {
        let result = Object.values(dataSnapshot.val());
        let contactKey = Object.keys(dataSnapshot.val());
        contactKey.forEach((value, key) => {
          result[key]["key"] = value;
        });
        result.forEach((v, i) => {
          let date = new Date(v.postedOn);
          let dateData = [];
          dateData.push(date.getDate());
          dateData.push(date.getMonth());
          dateData.push(date.getFullYear());
          dateData.push(date.getHours());
          dateData.push(date.getMinutes());
          dateData.push(date.getSeconds());
          v.postedOn = dateData;
        });
        result.reverse();
        setData(result);
        setIsLoading(false);
      }
    });
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <Main>
      <div className="row">
        {isLoading && <ReactLoading type={"bars"} color="#000" />}
        {data.map((d, i) => (
          <div className="card m-4" style={{ width: "18rem" }} key={i}>
            <img src={d.imageDownloadUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{d.title}</h5>
              <p className="card-text">{d.description}</p>
            </div>
            <div className="card-body">
              {d.fileDownloadUrl !== "empty" ? (
                <a
                  href={d.fileDownloadUrl}
                  className="card-link"
                  target="blank"
                >
                  More Info
                </a>
              ) : (
                ""
              )}
            </div>
            <div className="card-body">
              <span className="text-muted">
                Posted On:{" "}
                <span className="badge badge-danger text-white">
                  {d.postedOn[0]}-{d.postedOn[1]}-{d.postedOn[2]}
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
      {console.log(data)}
      {/* <button onClick={e => setIsFull(true)}>Full</button> */}
      {/* <Fullscreen enabled={isFull}>
                <div className="row">
                    <div className="col-6">
            <Stories 
        stories={stories}
        defaultInterval={1500}
        width={432}
        height={768}
      />      
      </div>
      <div className="col-6">
      <button onClick={e => setIsFull(false)}>Exit</button>
      </div>
      </div>
      </Fullscreen>

      <div className="scrolling-wrapper">          
    <img src="https://picsum.photos/1000/1000" className="rounded-circle" style={{width:50, height:50, margin:2}} />
    <img src="https://picsum.photos/1000/1000" className="rounded-circle" style={{width:50, height:50, margin:2}} />
    <img src="https://picsum.photos/1000/1000" className="rounded-circle" style={{width:50, height:50, margin:2}} />
    <img src="https://picsum.photos/1000/1000" className="rounded-circle" style={{width:50, height:50, margin:2}} />
    <img src="https://picsum.photos/1000/1000" className="rounded-circle" style={{width:50, height:50, margin:2}} />
    <img src="https://picsum.photos/1000/1000" className="rounded-circle" style={{width:50, height:50, margin:2}} />
    <img src="https://picsum.photos/1000/1000" className="rounded-circle" style={{width:50, height:50, margin:2}} />
    <img src="https://picsum.photos/1000/1000" className="rounded-circle" style={{width:50, height:50, margin:2}} />
    <img src="https://picsum.photos/1000/1000" className="rounded-circle" style={{width:50, height:50, margin:2}} />
    <img src="https://picsum.photos/1000/1000" className="rounded-circle" style={{width:50, height:50, margin:2}} />    
    </div> */}
    </Main>
  );
}
