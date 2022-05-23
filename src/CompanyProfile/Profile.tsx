import React from "react";
import { Grid , 
        Container , 
        Typography , 
        TextField , 
        Divider ,
        Button
        } 
from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
import avatar from '../Images/avatar.png'
import './Profile.css';


const Profile = () => {
    

   

    return (
        <div className="profile-con">
            <Container>
                <div className="profile-grid">
                    <Grid container>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
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
                        <Grid item xs={12} sm={12} md={8} lg={8}>
                            <Typography>Company Profile</Typography>
                            <div className="companyName">
                                <Typography>Company Name</Typography>
                                <TextField
                                    variant="outlined"
                                    className="comName"
                                    label="Company name"
                                    size="small"
                                    />
                            </div>
                            <div className="companyLogo">
                                <Typography>Logo</Typography>
                                <TextField
                                    variant="outlined"
                                    className="comLogo"
                                    size="small"
                                    />
                            </div>
                            <div className="registered">
                                <Typography className="Radio">Is your company Registered</Typography>
                                 <Radio
                                    value="a"
                                    name="radio-button-demo"
                                    
                                />
                                <Typography className="Radio">No</Typography>
                                <Radio
                                    value="a"
                                    name="radio-button-demo"
                                    
                                />
                                <Typography className="Radio">Yes</Typography>
                            </div> <div className="companyName">
                                <Typography>Company Location</Typography>
                                <TextField
                                    variant="outlined"
                                    className="comName"
                                    label="Company name"
                                    size="small"
                                    />
                            </div>
                            <div className="companyName">
                                <Typography>Number of employees</Typography>
                                <TextField
                                    variant="outlined"
                                    className="comName"
                                    placeholder="Number of employees at your company..."
                                    label="Company name"
                                    size="small"
                                    />
                            </div>
                            <div className="companyName">
                                <Typography>Annual Turnover</Typography>
                                <TextField
                                    variant="outlined"
                                    className="comName"
                                    placeholder="What is your yearly turnover..." name="annual_turnover"
                                    label="Company name"
                                    size="small"
                                    />
                            </div>
                            <div className="companyName">
                                <Typography>Monthly Turnover (Over 6 months)</Typography>
                                <TextField
                                    variant="outlined"
                                    className="comName"
                                    placeholder="What was your monthly turnover in the past 6 months..."
                                    label="Company name"
                                    size="small"
                                    />
                            </div>
                            <div className="companyName">
                                <Typography>Products/Services</Typography>
                                <TextField
                                    variant="outlined"
                                    className="comName"
                                    label="Company name"
                                    size="small"
                                    placeholder="What products or services is your company offering?"
                                    columns={50}
                                    rows={10}
                                    defaultValue={""}
                                    />
                            </div>
                            
                            
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
        
    )
}

export default Profile