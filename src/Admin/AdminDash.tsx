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
import { IRecomendation } from "../Interfaces/IRecomendation";
import './AdminDash.css'   



const Admin=() => {
    const [allRecommendations, setAllRecommendations] = useState<IRecomendation[]>([]);
    const test = async () =>{
        const allRecommendations = await Api.GET_AllRecommendations()
        const result = allRecommendations.result? allRecommendations.result : [] as IRecomendation[];
        setAllRecommendations(result)
        // console.log('reco',allRecommendations)
      }
      useEffect(() => {
        test()
       
      });



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