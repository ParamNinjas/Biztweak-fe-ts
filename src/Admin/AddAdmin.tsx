import React , { useState, useEffect } from "react";
import { supabase } from '../supabaseClient'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import signin from '../Images/signin.png'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Navbar from "../components/Navbar/Navbar";
import pop2 from "../Images/pop2.png"
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
          })
          if (error){
            return null;
          }
        return user
      }
      async function ExtraAdminInfo(createdUser : any) {
        const { data, error } = await supabase
        .from('profile')
        .update([
        { display_name: name, email : email, Role: 0 },
        ])
        .eq('id' , createdUser.id)
        console.log('AddingUserInfo', name,email );
        }
        async function Run(){
            const createdAdmin = await newAdmin();
            if(createdAdmin){
                ExtraAdminInfo(createdAdmin);
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
                            src={pop2}
                            alt='ad'
                            className='addminIMG' 
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
