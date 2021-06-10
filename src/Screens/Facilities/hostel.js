import React from "react";

import Main from "../../ReusableComponents/Main";

const hostel = () => {
  const Items = [
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2Fhostel1.jpg?alt=media&token=cd08096b-ad89-4105-8951-544a596fa58c",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2Fhostel2.jpg?alt=media&token=c5d67009-9fb5-4b9e-a531-e657e9fadd76",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2Fhostel3.jpg?alt=media&token=2c37eebd-f1c8-419b-92c6-d7a6577d6bc2",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2Fhostel4.jpg?alt=media&token=fef171a9-2e93-4c68-9376-33324100c960",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2Fhostel5.jpg?alt=media&token=9ec89ef7-461c-4afb-ab7f-1ad058e93430",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2Fhostel6.jpg?alt=media&token=e761ff14-6f8c-4890-bdde-98ea43f3bb39",
    },
  ];

  return (
    <Main>
      <div className="main container p-4">
        {/* <div className="grid-container">
          {Items.map((d, i) => (
            <div>
              <img
                className={`grid-item grid-item-${i}`}
                src={d.image}
                alt="hostel"
              />
            </div>
          ))}
        </div> */}

        <div className="container">
          <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">
            Hostel
          </h1>
          <hr className="mt-2 mb-5" />
          <div className="row text-center text-lg-left">
            {Items.map((d, i) => (
              <div className="col-lg-3 col-md-4 col-6">
                <a href="#" className="d-block mb-4 h-100">
                  <img
                    className="img-fluid img-thumbnail"
                    src={d.image}
                    alt=""
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
        <br />
        <br />
        <br />
        <h5>HOSTEL FEE STRUCTURE</h5>
        <br />
        <br />
        <table className="table  table-borderless  ">
          <tbody>
            <tr>
              <th>Hostel Fees</th>
              <td>Rs. 34000</td>
            </tr>
            <tr>
              <th>Hostel Deposite</th>
              <td>Rs. 2000</td>
            </tr>
            <tr>
              <th>
                <h5>Total Fee</h5>
              </th>
              <td>
                <h5>Rs. 36000</h5>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Main>
  );
};

export default hostel;
