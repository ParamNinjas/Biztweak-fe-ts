import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
// import Container from '@material-ui/core/Container';
import { Typography, Button } from "@material-ui/core";
// import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
// import SearchBar from "material-ui-search-bar";
import Search from "../components/topbar/TopbarFull";
import UserList from "./AdminComponents/featuredInfo/UserList";
import Side from "./AdminComponents/sidebar/Sidebar";
import List from "./List";
import { Api } from '../services/endpoints';
import { IProfile, IRecomendation } from "../Interfaces/IRecomendation";
import './AdminUserList.css';


const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'white'
};


const AdminUserList = () => {
  const [allRecommendations, setAllRecommendations] = useState<IRecomendation[]>([]);
  const [allProfiles, setAllProfiles] = useState<IProfile[]>([]);
  const test = async () => {
    const allRecommendations = await Api.GET_AllRecommendations()
    const result = allRecommendations.result ? allRecommendations.result : [] as IRecomendation[];
    setAllRecommendations(result)

  }

  return (
    <div>
      <div className="adminCon">
        <div className="adminTop">
          <div className="end">
            {/* <HomeIcon/> */}
          </div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={2} lg={2}>
              <Side />
            </Grid>

            <Grid item xs={12} sm={12} md={10} lg={10}>
              <Search />
                <div className="Userlist">
                  <UserList />
              
                </div>
            </Grid>
          </Grid>

        </div>
      </div>
    </div>
  )

}



export default AdminUserList