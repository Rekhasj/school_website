import React from "react";
import Navbar from "./Navbar";
import CustomNavbar from "./Navbar";

const Header = () => {
  return (
    <header>
      {/* <div id="top-bar" style={{ background: "blue" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <ul>
                <li>
                  <i className="fa fa-phone"></i> (+91) 99523 21179
                </li>
                <li>
                  <i className="fa fa-envelope"></i>{" "}
                  hawkingsintlschool@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
      <CustomNavbar />
    </header>
  );
};

export default Header;
