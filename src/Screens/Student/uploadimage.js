import React, { useState } from "react";
import Main from "../../ReusableComponents/Main";
import * as firebase from "firebase";
import uuid from "react-native-uuid";
import ReactLoading from "react-loading";

const Uploadimage = () => {
  const [isLoading, setIsLoading] = useState(false);
  let mediaName;

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    var nm = document.getElementById("name").value;
    var dept =
      document.getElementById("deptSelector").options[
        document.getElementById("deptSelector").selectedIndex
      ].text;
    var yr =
      document.getElementById("yrSelector").options[
        document.getElementById("yrSelector").selectedIndex
      ].text;
    var image = document.getElementById("imageSelector").files[0];
    console.log(nm, dept, yr);
    console.log(image);
    const dbReference = firebase.database().ref("student_pics");
    const storageRef = firebase.storage().ref();
    var imageUrl = "null";
    if (image !== "") {
      const downloadUrl = await uploadImageAsync(image, storageRef);
      imageUrl = downloadUrl;
    }
    var data = {
      fullName: nm,
      department: dept,
      year: yr,
      imageDownloadUrl: imageUrl,
      mediaName: mediaName,
      postedOn: firebase.database.ServerValue.TIMESTAMP,
    };

    await dbReference.push(data, (err) => {
      if (!err) {
        //console.log("StudentAdded");
        setIsLoading(false);
        document.getElementById("name").value = "";
        document.getElementById("deptSelector").selectedIndex = 0;
        document.getElementById("yrSelector").selectedIndex = 0;
        document.getElementById("imageSelector").value = null;
      }
    });
  };
  const uploadImageAsync = async (image, storageRef) => {
    mediaName = uuid.v4();
    const ref = storageRef.child("studentpics").child(mediaName);
    const snapshot = await ref.put(image);
    return await snapshot.ref.getDownloadURL();
  };

  return (
    <div>
      <Main>
        <div>
          <form className="text-center border border-light p-5">
            <p className="h4 mb-4">Add Photo</p>
            <p>Be a part of SGP community by adding your Pics</p>

            <input
              type="text"
              id="name"
              className="form-control mb-4"
              placeholder="Name"
            />

            <label>Department</label>
            <select
              className="browser-default custom-select mb-4"
              id="deptSelector"
            >
              <option value="0" disabled>
                Department
              </option>
              <option value="1" selected>
                Computer Science
              </option>
              <option value="2">Mechanical</option>
              <option value="3">E &amp; TC</option>
              <option value="4">Civil</option>
              <option value="5">Electrical</option>
            </select>

            <label>Year</label>
            <select
              className="browser-default custom-select mb-4"
              id="yrSelector"
            >
              <option value="0" disabled>
                Year
              </option>
              <option value="1" selected>
                FY
              </option>
              <option value="2">SY</option>
              <option value="3">TY</option>
            </select>

            <label for="imageSelector">Add Photo &nbsp; </label>
            <br />
            <input type="file" className=" mb-4" id="imageSelector" />
            <button
              className="btn btn-info btn-block text-center"
              type="submit"
              onClick={(e) => onSubmit(e)}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {isLoading ? (
                <ReactLoading
                  className="text-center"
                  type="balls"
                  color="#FFF"
                />
              ) : (
                "Add"
              )}
            </button>
          </form>
        </div>
      </Main>
    </div>
  );
};

export default Uploadimage;
