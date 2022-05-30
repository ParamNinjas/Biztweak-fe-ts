import React from 'react';
import DashNav from '../DasNav/Nav';
import { Container, Grid , Button , Typography, Divider } from '@material-ui/core';
import banner from "../../Images/banner.png"
import avatar from '../../Images/avatar.png'
import './Report.css'



const Report = () => {

    return(
        <div className='report-con'>
            <DashNav/>
            <Container>
                <div className='report'>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={3} lg={3}>
                        <div className='profileInfo'>
                                <Typography>Profile</Typography>
                                <img
                                    src={avatar}
                                    alt='avimage'
                                    className='avImg'
                                    />
                                <Typography>John Smith</Typography>
                                <Divider/>
                                <div className='conInfo'>
                                    <Typography>JohnSmith@gmail.com</Typography>
                                    <p>
                                    2009 MA in English Literature
                                    Harvard University, Cambridge, MA
                                    3.7 GPA
                                    </p>
                                </div>
                            </div>
                            <Button variant='outlined' className='btnCompany2'>
                                    + Add Company
                                </Button>
                        
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} lg={9}>
                        <img
                        src={banner}
                        alt='RepBanner'
                        className='banner'
                    />
                    <Typography variant='h5'>Full Summary</Typography>

                    <div className='report-accord'>
                            <Grid item >
                                <Typography>Full Report</Typography>
                            </Grid>
                        
                    </div>
                    <div className='recommendations'>
                        <Typography>Report</Typography>
                        
                    </div>    
                        </Grid>
                    </Grid>
                   

                </div>
            </Container>
        </div>
    )


}

export default Report