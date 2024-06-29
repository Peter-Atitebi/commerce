import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="both-nav">
        <div className="laketek-div">
          <a href="#" className="main-shit">
            <p className="laketek">LakeTek Trove</p>

            <img src="\jumiaimg\laketek\lt.png" alt="LakeTek" />
          </a>
        </div>

        <div className="search-nav">
          <select name="all-options" id="all">
            <option value="all">All</option>
            <option value="all">Other</option>
          </select>
          <input
            type="text"
            className="sttw"
            placeholder="Search through The Waters"
          />
          <input type="button" value="Search" className="search" />
        </div>
        <div className="extras">
          <a href="#" className="extra-items">
            Account
          </a>
          <a href="#" className="extra-items">
            Help
          </a>
          <a href="#" className="extra-items">
            Source Points
          </a>
          <a href="#" className="extra-items">
            Cart
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
