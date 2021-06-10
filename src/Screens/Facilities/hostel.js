import React from "react";

import Main from "../../ReusableComponents/Main";
import _ from "lodash";
const hostel = () => {
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
            {_.range(1, 10).map((val, idx) => (
              <div className="col-lg-3 col-md-4 col-6">
                <a href="#" className="d-block mb-4 h-100">
                  <img
                    className="img-fluid img-thumbnail"
                    src={require(`../../img/facilities/hostel/hostel${val}.jpg`)}
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
