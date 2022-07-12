import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import signin from '../Images/signin.png'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
// import Nav from "../components/Nav/Nav";
import './Signup.css'


const Signup=()=>{
    return(
        <div className="Signup-con">
            {/* <Nav/> */}
             <Container maxWidth="sm">
            <Grid container>
                <Grid item xs={12} sm={12} md={5} lg={5}>
                    <div className="imagegrid">
                        {/* <img
                            src={signin}
                            alt='signin'
                            className='signinIMG'
                        /> */}
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={7}>
                    <div className="SignForm">
                        <div className="formTypo">
                            <Typography 
                            variant="h3"
                            // fontweight='Bold'
                            >
                                Create Account
                            </Typography>  
                        </div>
                        <div className="bodyText">
                        <p>
                        Follow the instructions to make it easier to login and you will be 
                        able to explore inside.
                        </p>
                        </div>
                  
                        <div className="input1">
                            <TextField 
                                    id="filled-basic"  
                                    label="Full Name" 
                                    variant="filled" 
                            />
                        </div>
                        <div className="input1">
                           <TextField 
                                id="filled-basic"  
                                label="Email Address" 
                                variant="filled" 
                            />
                        </div>
                        <div className="input1">
                            <TextField 
                                    id="filled-basic"  
                                    label="Password" 
                                    variant="filled" 
                            />
                        </div>
                        <div className="input1">
                           <TextField 
                                id="filled-basic"  
                                label="Confirm Password" 
                                variant="filled" 
                            />
                        </div>
                        <Button 
                            variant="outlined"
                            className="BtnSignup"
                            >
                                Signup
                        </Button>
                            <div className="haveAcc">
                                <p>Already have an account?</p> 
                            </div>
                    </div>
                </Grid>
            </Grid>    
    
        </Container>  

        </div>
    )
}

export default Signup