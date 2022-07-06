import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import signin from '../Images/signin.png';
import Container from '@material-ui/core/Container';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Navbar from '../components/Navbar/Navbar';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
import Footernew from '../components/Footer/Footernew';
// import cookie from 'cookiejs';
import '../Login/Login.css';
// import { sign } from 'crypto';

const linkStyle = {
	margin: "1rem",
	textDecoration: "none", 
	color: 'black'
  };
  

const Login = () => {
	const [ loading, setLoading ] = useState(false);
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const navigate = useNavigate();

    const signIn = async () => {
        console.log('Signed In');
        const { user, session, error } = await supabase.auth.signIn({
                    email: email,
                    password: password,
                  })
    }
      const user = supabase.auth.user()
	  const _user = user?.id
    const getUserData = async () => {
                const { data, error } = await supabase
	            .from('profile')
	            .select(`
	                id, display_name, Role
	            `)
	            .eq('id', _user)
                const role = data && data[0]?.Role
        console.log('role number', role)
		try {
			        if (role === 1 ){
			            navigate('/Dashboard');
		
			            }else if (role !== 1){
			                navigate('/AdminDash');
		
			    }
			    }   catch (error) {
			        console.log(error);
			    }
    }

    const runFunctions = async () => {
        const login = await signIn()
        console.log(login)
        const data = await getUserData()
        console.log(data)
    }
   
	return (
		<div className="login-container">
			<Navbar />
			<Container maxWidth="sm">
				<Grid container>
					<Grid item xs={12} sm={12} md={5} lg={5}>
						<div className="imagegrid">
							<img src={signin} alt="signin" className="signinIMG" />
						</div>
					</Grid>
					<Grid item xs={12} sm={12} md={7} lg={7}>
						<div className="loginForm">
							<div className="formTypo">
								<Typography className="loginHeading" variant="h3">
									Login Account
								</Typography>
							</div>
							<p>
								Follow the instructions to make it easier to login and you will be able to explore
								inside.
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
							<div className="input1">
								<TextField
									id="outlined-password-input"
									label="Password"
									type="password"
									autoComplete="current-password"
									fullWidth
									variant="filled"
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
							<div className="checkP">
								<div className="checkBox">
									<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
								</div>
								<div className="chackPara">
									<p>Keep me logged in</p>
								</div>
							</div>
							<Button variant="outlined" className="Btnlogin" onClick={() => runFunctions()}>
								Login
							</Button>
							<div className="forgotLinks">
								<div className="forgotPass">
									<Link to="/Forgot"style={linkStyle}>Forgot Password?</Link>
								</div>
								<div className="noAcc">
									<Link to="/sign_up"style={linkStyle}>Don't have an account?</Link>
								</div>
							</div>
						</div>
					</Grid>
				</Grid>
				
			</Container>
			<div className='footsi'>
                  <Footernew/>
                </div>
		</div>
	);
};

export default Login;
