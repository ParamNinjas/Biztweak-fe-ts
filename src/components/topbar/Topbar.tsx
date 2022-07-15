import React from "react";
import "./topbar.css";
// import logo from "../../assets/logo.png";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonIcon from '@mui/icons-material/Person';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <div className="search">
            <input type="text" placeholder="Search"
            />
            <button><SearchIcon /></button>
          </div>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
          <HomeIcon />
          </div>
          <div className="topbarIconContainer">
          <PersonIcon />
          </div>
          <div className="topbarIconContainer">
            <h4>Admin</h4>
          </div>
          <div className="topbarIconContainer">
          <ArrowDropDownIcon/>
          </div>
        </div>
      </div>
    </div>
  );
}
