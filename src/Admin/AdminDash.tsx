import React , { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Typography } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import SearchBar from "material-ui-search-bar";
import Side from "./sideNav";
import UserList from "./List";
import { Api } from '../services/endpoints';
import './AdminDash.css'
import { Bar } from "react-chartjs-2";



const Admin=() => {
   



    return(
        <div>
            <Side/>
            <Container>
                <div className="adminCon">
                <div className="adminTop">
                <SearchBar/>
                <div className="end">
                    <HomeIcon/>
                </div>
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={8} lg={8}>
                        <div className="Assesments">
                                <div className="comAsses">
                                    <Typography className="num">67</Typography>
                                    <Typography>Completed Assesments</Typography>
                                </div>
                                <div className="inComAsses">
                                <Typography className="num">67</Typography>
                                <Typography>incomplete Assesments</Typography>
                                </div>
                                <div className="totAsses">
                                <Typography className="num">67</Typography>
                                <Typography>Total Assesments</Typography>
                                </div>
                                <div className="totUsers">
                                <Typography className="num">67</Typography>
                                <Typography>Total Users</Typography>
                                </div>
                        </div>
                        <div className="overView">
                            <Typography variant='h3'>Overview</Typography>
                            <div className="bars">
                            <div className="bar1">
                            <div className="App">
      <h1>GEEKSFORGEEKS BAR CHART REACTJS</h1>
      <div style={{ maxWidth: "650px" }}>
        <Bar
          data={{
            // Name of the variables on x-axies for each bar
            labels: ["1st bar", "2nd bar", "3rd bar", "4th bar"],
            datasets: [
              {
                // Label for bars
                label: "total count/value",
                // Data or value of your each variable
                data: [1552, 1319, 613, 1400],
                // Color of each bar
                backgroundColor: ["aqua", "green", "red", "yellow"],
                // Border color of each bar
                borderColor: ["aqua", "green", "red", "yellow"],
                borderWidth: 0.5,
              },
            ],
          }}
          // Height of graph
          height={400}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
      </div>
    </div>
  );
}

                            </div>
                            <div className="bar2">
                                
                            </div>
                            </div>
                        </div>
                        <div className="prof">
                            <Typography className="proftxt">Profiles by registered</Typography>
                            <div className="list">
                                <UserList/>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <div className="newUsers">
                            <h4>New Users</h4>
                            <div className="new">

                            </div>
                        </div>
                    </Grid>

                </Grid>
               
                </div>
            </Container>

        </div>
    )

}

export default Admin