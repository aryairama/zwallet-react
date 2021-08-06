import React from "react";
import Avatar from "../../../assets/img/avatar/1.png";

function index() {
  return (
    <>
      <div>
        <div className="d-flex">
          <div>
            <div>
              <img src={Avatar} alt="profile"></img>
            </div>
            <div className="d-flex">
              <div>
                <p>Name</p>
                <p>Number</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
