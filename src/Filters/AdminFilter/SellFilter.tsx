import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
// import Container from '@material-ui/core/Container';
import { Typography, Button } from "@material-ui/core";
// import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
// import SearchBar from "material-ui-search-bar";
import Search from "../../components/topbar/Topbar";
import Side from "../../Admin/AdminComponents/sidebar/Sidebar";
import UserList from "../../Admin/List";
import { Api } from '../../services/endpoints';
import { IProfile, IRecomendation } from "../../Interfaces/IRecomendation";
import BoxN from "../Box"
// import { BarChart, Bar, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import Icon from '@material-ui/core/Icon';
// import Details from "../../Admin/AdminComponents/featuredInfo/WidgetSm"
// import MailIcon from '@mui/icons-material/Mail';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import CancelIcon from '@mui/icons-material/Cancel';
// import OpenWithIcon from '@mui/icons-material/OpenWith';
// import GroupIcon from '@mui/icons-material/Group';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import GroupsIcon from '@mui/icons-material/Groups';
// import PaidIcon from '@mui/icons-material/Paid';


const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'white'
};


const SellFilter = () => {
  const [allRecommendations, setAllRecommendations] = useState<IRecomendation[]>([]);
  const [allProfiles, setAllProfiles] = useState<IProfile[]>([]);
  const test = async () => {
    const allRecommendations = await Api.GET_AllRecommendations()
    const result = allRecommendations.result ? allRecommendations.result : [] as IRecomendation[];
    setAllRecommendations(result)

  }

  
  useEffect(() => {
    test()
    // getUsers()

  });

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
              <div className="Assesment">
                <div className="pleasefit">
                <BoxN />
                </div>
                <div className="pleasefit">
                </div>
              </div>

              <div className="overView">
                  <div className="buttongrp">
                <div className="bottom">
                  <div className="phaseBTNs">
                    <div className="Phase1">
                    </div>
                    <div className="Phase2">
                    </div>
                    <div className="phase2">
                    </div>

                  </div>
                </div>
              </div>
                </div>
             
              
              <div className="filButtons">
                <div className="newUsersBTN">
                  
                </div>
                <div className="regUsersBTN">
                  
                </div>
                <div className="AllAssesBTN">
                  
                </div>
              </div>

              <div className="prof">
                <Typography className="proftxt">Profiles by registered</Typography>
                <div className="SeeMore">
                  <Link to='/List'>See All Profiles {'>'}</Link>
                </div>
                <div className="list">
                  <UserList />
                </div>

              </div>
            </Grid>
          </Grid>

        </div>
      </div>
    </div>
  )

}



export default SellFilter