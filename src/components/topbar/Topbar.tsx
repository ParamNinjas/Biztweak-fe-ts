import React from "react";
import "./topbar.css";
// import logo from "../../assets/logo.png";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          {/* <span className="logo"><img src={logo} alt="logo"/></span> */}
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://resources.tidal.com/images/3e29689c/351e/4832/9c33/45619c5e46dc/750x750.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
