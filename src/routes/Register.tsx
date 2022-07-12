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
import Footernew from '../components/Footer/Footernew';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import pop3 from '../Images/pop3.png'
import '../Signup/Signup.css'

const linkStyle = {
	margin: "1rem",
	textDecoration: "none", 
	color: 'black'
  };


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const Signup=()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    
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
      }
      async function Run(){
        const createdUser = await newUser();
        if(createdUser){
            ExtraInfo(createdUser);
            handleClickOpen()
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
                        <p>
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
                <div className="Alert">
                    <Dialog
                        open={open}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogTitle id="alert-dialog-slide-title">{"User Succesfuly created"}</DialogTitle>
                        <DialogContent>
                        <img className="pop3" alt="pop3" src={pop3} />
                        <DialogContentText id="alert-dialog-slide-description">
                        An email has been sent to you please check and confrim your email address before signing in
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            OK
                        </Button>
                        </DialogActions>
                    </Dialog>
                </div>
        </div>
    )
}

export default Signup