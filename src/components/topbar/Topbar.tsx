import React from "react";
import "./topbar.css";
// import logo from "../../assets/logo.png";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonIcon from '@mui/icons-material/Person';
import Typography from "@material-ui/core/Typography";
import { supabase } from "../../supabaseClient";

export default function Topbar() {


  const user = supabase.auth.user();
  const email = user?.email;
  console.log("Admin email", email)
  
  
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
            <Typography>{email}</Typography>
          </div>
          <div className="topbarIconContainer">
          <ArrowDropDownIcon/>
          </div>
        </div>
      </div>
    </div>
  );
}
