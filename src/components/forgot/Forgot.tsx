import React , { useState } from "react";
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Navbar from '../Navbar/Navbar'
import signin from '../../Images/signin.png'
import { supabase } from '../../supabaseClient';



const  Forgot=() =>{
   
    const [email, setEmail] = useState('')
    
    async function reset() {
        console.log('password resseting')
        const { data, error } = await supabase.auth.api
            .resetPasswordForEmail(email)
        
    }
    
  
return (
    <div className="login-container">
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
                    <div className="loginForm">
                        <div className="formTypo">
                            <Typography 
                            className="loginHeading"
                            variant="h3"
                            >
                                Forgot Password
                            </Typography>  
                        </div>
                        <p>
                        Enter your email and follow instructions inorder to reset your password
                        </p>
                        <div className="input1">
                            <TextField 
                                    id="filled-basic"  
                                    label="Email Address" 
                                    variant="filled" 
                                    fullWidth
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <Button 
                            variant="outlined"
                            className="Btnlogin"
                            onClick={()=> reset()}
                            >
                                Submit
                        </Button>
                    </div>
                </Grid>
            </Grid>    
    
        </Container>  

    </div>
)
}

export default Forgot