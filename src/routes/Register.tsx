import React , { useState, useEffect } from "react";
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { supabase } from '../supabaseClient'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import signin from '../Images/signin.png'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Navbar from "../components/Navbar/Navbar";
import Footernew from '../components/Footer/Footernew';
import '../Signup/Signup.css'

const linkStyle = {
	margin: "1rem",
	textDecoration: "none", 
	color: 'black'
  };
const Signup=()=>{

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
      async function newUser() {
        console.log('AddingUser', email,password );
        const { user, session, error } = await supabase.auth.signUp({
            email: email,
            password: password,
          })
          if (error){
            return null;
          }
        return user
      }
      async function ExtraInfo(createdUser : any) {
            const { data, error } = await supabase
            .from('profile')
            .update([
            { display_name: name, email : email, Role: 1 },
            ])
            .eq('id' , createdUser.id)
            console.log('AddingUserInfo', name,email,  );
            navigate('/login');
      }
      async function Run(){
        const createdUser = await newUser();
        if(createdUser){
            ExtraInfo(createdUser);
        }
        
        console.log("running both fuctions")
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
                                Create Account
                            </Typography>  
                        </div>
                        <p className="bodyText">
                        Follow the instructions to make it easier to login and you will be 
                        able to explore inside.
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
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                variant="filled" 
                                fullWidth
                                onChange={(e)=> setPassword(e.target.value)}
                            />
                        </div>
                        <div className="input1">
                           <TextField 
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                variant="filled" 
                                fullWidth
                                onChange={(e)=> setPassword(e.target.value)}
                            />
                        </div>
                        <Button 
                            variant="outlined"
                            className="BtnSignup"
                            onClick={()=> Run()}
                            >
                                Signup
                        </Button>
                            <div className="haveAcc">
                            <Link to='/login' style={linkStyle}>Already have an account</Link>
                            </div>
                    </div>
                </Grid>
            </Grid>    
      
        </Container>  
        <div className='footsz'>
                  <Footernew/>
                </div>
        </div>
    )
}

export default Signup