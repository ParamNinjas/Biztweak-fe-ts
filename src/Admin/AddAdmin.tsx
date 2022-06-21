import React , { useState, useEffect } from "react";
// import axios from 'axios';
import { Link } from 'react-router-dom'
import { supabase } from '../supabaseClient'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import signin from '../Images/signin.png'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Navbar from "../components/Navbar/Navbar";
import hero from "../Images/hero-bg.png"
import '../Signup/Signup.css'


const AddAdmin=()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
      async function newAdmin() {
        console.log('AddingUser', email,password , name);
        const { user, session, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            // name: name
          })

      }
           
      

    return(
        <div className="Signup-con">
            <Navbar/>
             <Container maxWidth="sm">
            <Grid container>
                <Grid item xs={12} sm={12} md={5} lg={5}>
                    <div className="imagegrid">
                        <img
                            src={signin}
                            alt='signin'
                            className='signinIMG' 
                        />
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={7}>
                    <div className="SignForm">
                        <div className="formTypo">
                            <Typography 
                            variant="h3"
                            // fontweight='Bold'
                            >
                                Create Admin Account
                            </Typography>  
                        </div>
                        <p>
                        This Page is meant for adding Admin Users only 
                        </p>
                        <div className="input1">
                            <TextField 
                                    id="filled-basic"  
                                    label="Full Name" 
                                    variant="filled" 
                                    fullWidth
                                    onChange={(e)=> setName(e.target.value)}
                            />
                        </div>
                        <div className="input1">
                           <TextField 
                                id="filled-basic"  
                                label="Email Address" 
                                variant="filled" 
                                fullWidth
                                onChange={(e)=> setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input1">
                            <TextField 
                                    id="filled-basic"  
                                    label="Password" 
                                    variant="filled" 
                                    fullWidth
                                    onChange={(e)=> setPassword(e.target.value)}
                            />
                        </div>
                        <div className="input1">
                           <TextField 
                                id="filled-basic"  
                                label="Confirm Password" 
                                variant="filled" 
                                fullWidth
                                onChange={(e)=> setPassword(e.target.value)}
                            />
                        </div>
                        <Button 
                            variant="outlined"
                            className="BtnSignup"
                            onClick={()=> newAdmin()}
                            > Add Admin
                                
                        </Button>
                            {/* <div className="haveAcc">
                            <Link to='/login'>Already have an account</Link>
                            </div> */}
                    </div>
                </Grid>
            </Grid>    
      
        </Container>  
  
        </div>
    )
}

export default AddAdmin
