import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
// import Container from '@material-ui/core/Container';
import { Typography, Button } from "@material-ui/core";
// import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
// import SearchBar from "material-ui-search-bar";
import Search from "../components/topbar/Topbar";
import Side from "../Admin/AdminComponents/sidebar/Sidebar";
import UserList from "./List";
import { Api } from '../services/endpoints';
import { IProfile, IRecomendation } from "../Interfaces/IRecomendation";
import { BarChart, Bar, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import Icon from '@material-ui/core/Icon';
import Details from './AdminComponents/featuredInfo/WidgetSm'
import MailIcon from '@mui/icons-material/Mail';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import GroupIcon from '@mui/icons-material/Group';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import GroupsIcon from '@mui/icons-material/Groups';
import PaidIcon from '@mui/icons-material/Paid';


const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'white'
};


const Admin = () => {
  const [allRecommendations, setAllRecommendations] = useState<IRecomendation[]>([]);
  const [allProfiles, setAllProfiles] = useState<IProfile[]>([]);
  const test = async () => {
    const allRecommendations = await Api.GET_AllRecommendations()
    const result = allRecommendations.result ? allRecommendations.result : [] as IRecomendation[];
    setAllRecommendations(result)

  }

  // const getUsers = async () =>{
  //     const allProfiles = await Api.GET_AllProfiles()
  //     const profiles = allProfiles.result? allProfiles.result : [] as IProfile[];
  //     setAllProfiles(profiles)

  //   }
  useEffect(() => {
    test()
    // getUsers()

  });
  const data = [
    {
      name: 'Customer',
      //   uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      //   uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      //   uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      //   uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      //   uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      //   uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      //   uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page F',
      //   uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      //   uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const data2 = [
    {
      name: 'Customer',
      //   uv: 4000,
      pv: 4400,
      amt: 2400,
    },
    {
      name: 'Page B',
      //   uv: 3000,
      pv: 1398,
      amt: 2210,
    },
  ];




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
              <div className="Assesments">
                <div className="fitplease">
                  <div className="widgetblk">
                    <Typography className="num"><CheckCircleIcon className="checklogo"></CheckCircleIcon>{allRecommendations.length}</Typography>
                    <div>
                    <Typography className="word">Completed Assesments</Typography>
                    </div>
                  </div>
                  <div className="widgetblk">
                    <Typography className="num"><CancelIcon className="crosslogo"/>11</Typography>
                    <Typography className="word">Incomplete Assesments</Typography>
                  </div>

                  <div className="widgetblk">
                    <Typography className="num"><OpenWithIcon className="movelogo"/>{allRecommendations.length}</Typography>
                    <Typography className="word">Total Assesments</Typography>
                  </div>
                  <div className="widgetblk">
                    <Typography className="num"><GroupIcon className="grouplogo"/>21</Typography>
                    <Typography className="word">Total Users</Typography>
                  </div>
                </div>
                <div className="fitplease">
                  <div className="newUsers">
                    <div className="SeeMoreU">
                      <Link to='/List' >See all users {'>'}</Link>
                    </div>
                    <h4>New Users</h4>
                    <div className="new">
                    <Details/>
                    </div>

                  </div>
                </div>
              </div>

              <div className="overView">
                <Typography variant='h3' className="Bar-Title">Overview</Typography>
                <div className="bars">
                  <div className="bar1">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        width={400}
                        height={300}
                        data={data}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 10,
                          bottom: 3,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Bar dataKey="pv" fill="#fd7e14" />
                      </BarChart>
                    </ResponsiveContainer>

                  </div>
                  <div className="bar2">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        width={500}
                        height={300}
                        data={data2}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Bar dataKey="pv" fill="#28a745" />
                      </BarChart>
                    </ResponsiveContainer>

                  </div>
                  <div className="buttongrp">
                <div className="bottom">
                  <Button
                    className="sendMail"
                    variant="outlined"
                  >
                    <MailIcon/><Link to='/AdminFilter' style={linkStyle}>SendMail</Link>

                  </Button>
                  <div className="phaseBTNs">
                    <div className="Phase1">
                      <Button
                        className="phase1BTN"
                        variant="outlined"
                      >< AddShoppingCartIcon/> How To Sell
                      </Button>
                    </div>
                    <div className="Phase2">
                      <Button
                        className="phase1BTN"
                        variant="outlined"
                      > < PaidIcon /> Get Funding
                      </Button>
                    </div>
                    <div className="phase2">
                      <Button
                        className="phase1BTN"
                        variant="outlined"
                      ><GroupsIcon /> Get Customers
                      </Button>
                    </div>

                  </div>
                </div>
              </div>
                </div>
              </div>
              
              <div className="filButtons">
                <div className="newUsersBTN">
                  <Button
                    className="AddUsers"
                    variant="outlined"
                  >
                    <Link to='/AddUser' style={linkStyle}>Add New Users</Link>
                  </Button>
                </div>
                <div className="regUsersBTN">
                  <Button
                    className="RegUsers"
                    variant="outlined"
                  >
                    Total Registered Users
                  </Button>
                </div>
                <div className="AllAssesBTN">
                  <Button
                    className="AllAsses"
                    variant="outlined"
                  >
                    <Link to='/AllAsses' style={linkStyle}>All Assesments</Link>
                  </Button>
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



export default Admin