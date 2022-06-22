import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid;
import Container from '@material-ui/core/Container';
import { Typography, Button } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import SearchBar from "material-ui-search-bar";
import Side from "./sideNav";
import UserList from "./List";
import { Api } from '../services/endpoints'; 
import { IRecomendation } from "../Interfaces/IRecomendation";
import { BarChart, Bar, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './AdminDash.css'   



const Admin=() => {
    const [allRecommendations, setAllRecommendations] = useState<IRecomendation[]>([]);
    const test = async () =>{
        const allRecommendations = await Api.GET_AllRecommendations()
        const result = allRecommendations.result? allRecommendations.result : [] as IRecomendation[];
        setAllRecommendations(result)
   
      }
      useEffect(() => {
        test()
       
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




    return(
        <div>
          
           
                <div className="adminCon">
                <div className="adminTop">
                <SearchBar/>
                <div className="end">
                    <HomeIcon/>
                </div>
                </div>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={2} lg={2}>
                    <Side/>
                </Grid>
                    <Grid item xs={12} sm={12} md={7} lg={7}>
                        <div className="Assesments">
                                <div className="comAsses">
                                    <Typography className="num">{allRecommendations.length}</Typography>
                                    <Typography>Completed Assesments</Typography>
                                </div>
                                <div className="inComAsses">
                                <Typography className="num">0</Typography>
                                <Typography>incomplete Assesments</Typography>
                                </div>
                                <div className="totAsses">
                                <Typography className="num">{allRecommendations.length}</Typography>
                                <Typography>Total Assesments</Typography>
                                </div>
                                <div className="totUsers">
                                <Typography className="num">3</Typography>
                                <Typography>Total Users</Typography>
                                </div>
                        </div>
                        <div className="overView">
                            <Typography variant='h3'>Overview</Typography>
                            <div className="bars">
                            <div className="bar1">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                    width={500}
                                    height={300}
                                    data={data}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                    >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    {/* <XAxis dataKey="name" /> */}
                                    {/* <YAxis /> */}
                                    <Tooltip />
                                    {/* <Legend /> */}
                                    <Bar dataKey="pv" fill="#fd7e14" />
                                    {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
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
                                    {/* <XAxis dataKey="name" /> */}
                                    {/* <YAxis /> */}
                                    <Tooltip />
                                    {/* <Legend /> */}
                                    <Bar dataKey="pv" fill="#28a745" />
                                    {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                                    </BarChart>
                                </ResponsiveContainer>

                            </div>
                            </div>
                        </div>
                        <div className="filButtons">
                          <div className="newUsersBTN">
                              <Button
                                className="AddUsers"
                                variant="outlined"
                                >
                                <Link to='/AddUser'>Add New Users</Link>
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
                                <Link to='/AllAsses'>All Assesments</Link>
                                </Button>
                          </div>
                        </div>
                        <div className="prof">
                            <Typography className="proftxt">Profiles by registered</Typography>
                            <div className="SeeMore">
                              <Link to='/List'>See All Profiles {'>'}</Link>
                            </div>
                            <div className="list">
                                <UserList/>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                    <div className="SeeMoreU">
                              <Link to='/List'>See all users {'>'}</Link>
                            </div>
                        <div className="newUsers">
                            <h4>New Users</h4>
                            <div className="new">

                            </div>
                            <Button
                              className="sendMail"
                              variant="outlined"
                            >
                              {/* <ion-icon name="mail"></ion-icon> */}
                              Send Mail
                            </Button>
                            <div className="phaseBTNs">
                              <div className="Phase1">
                                <Button
                                  className="phase1BTN"
                                  variant="outlined"
                                >How To Sell
                                </Button>
                              </div>
                              <div className="Phase2">
                                <Button
                                  className="phase1BTN"
                                  variant="outlined"
                                >Get Customers
                                </Button>
                              </div>
                            </div>
                            <div className="phase3">
                            <Button
                                  className="phase3BTN"
                                  variant="outlined"
                                >Get Customers
                                </Button>
                            </div>
                            
                        </div>
                    </Grid>

                </Grid>
               
                </div>
          

        </div>
    )

}

export default Admin