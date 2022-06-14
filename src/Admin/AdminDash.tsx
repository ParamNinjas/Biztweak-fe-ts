import React , { useState } from "react";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import SearchBar from "material-ui-search-bar";
import Side from "./sideNav";
import './AdminDash.css'



const Admin=() => {

    return(
        <div>
            <Side/>
            <Container>
                <div className="adminCon">
                <div className="adminTop">
                <SearchBar/>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={8} lg={8}>
                        <div className="Assesments">
                                <div className="comAsses">
                        
                                </div>
                                <div className="inComAsses">

                                </div>
                                <div className="totAsses">

                                </div>
                                <div className="totUsers">

                                </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <div className="newUsers">
                            <h4>New Users</h4>
                        </div>
                    </Grid>

                </Grid>
               </div>
                </div>
            </Container>

        </div>
    )

}

export default Admin