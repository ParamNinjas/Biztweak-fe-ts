import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import hero from '../Images/hero-bg.png';
import { Link } from "react-router-dom";
import './Home.css';

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'white'
  };
const Home=() => {
return(
    <div className="Home-con">
      
        <Container>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <div className="hometext">
                        <h1>
                        Learn How to:
                        </h1>
                        <h3>
                        1. Find Customers
                        2. Get ready for Funding
                        3. Makes sales
                        </h3>
                        <p>
                        BizTweak aims to help make entrepreneurship easier,
                        by helping you spot gaps in your business or business idea.
                        </p>
                        <Button
                            className="BtnTake"
                            variant="outlined"
                            >
                              <Link to="/sign_up" style={linkStyle}>Take Free Assessment</Link>  </Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <div className="homeimg">
                    <img
                            src={hero}
                            alt='hero'
                            className='heroIMG'
                        />
                    </div>
                </Grid>
            </Grid>
        </Container>
    </div>
)
}

export default Home