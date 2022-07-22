import React, {useState} from "react";
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
import UserNavbar from "../components/UserNav/UserNav";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import { Api } from '../services/endpoints';
import './Profile.css';
import Footernew from "../components/Footer/Footernew";
import { ICompany } from "src/Interfaces/IRecomendation";
import { Link } from "react-router-dom";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Icon from '@material-ui/core/Icon';
import { supabase } from "../supabaseClient";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
const linkStyle = {
    margin: "1rem",
    textDecoration: "none", 
  };
  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }),
);

const Profile = () => {
  const [companyName, setCompanyName] = useState<string>("");
  const [logo, setLogo] = useState([]);
  const [phase, setPhase] =  useState<string>("Sell");
  const [registered, setRegistered] =  useState<string>("yes");  
  const [location, setLocation] = useState<string>("");
  const [employees, setEmployees] = useState<number>(0);
  const [annTurnover, setAnnTurnover] = useState<number>(0);
  const [monTurnover, setMonTurnover] = useState<number>(0);
  const [industry, setIndustry] = useState<string>();
  const [product, setProduct] = useState<string>();
//   const [logoUploaded, setLogoUploaded] = useState<string>();
//   const [value, setValue] = React.useState('female');
  
  const classes = useStyles();

  const createProfile = async () =>{
    const payload = {
     "companyName": companyName,
    //  "logo" : logo[],
     "location": location,
     "phase" : registered,
     "industry" : industry,
     "employees" : employees,
     "registered" : registered,
     "monTurnover" : monTurnover,
     "annTurnover" : annTurnover,
     "product" : product,
   } as ICompany
     const result = await Api.POST_CreateCompany(payload)
     console.log('Result is' , result) 
   } 
   async function uploadLogo(event : any) {
    const logoFile = event.target.files[0]
    const mineType = logoFile.type;
    const ext = mineType.replace('image/png')
    const { data, error } = await supabase
      .storage
      .from('logo')
      .upload(`${new Date().getTime()}.${ext}`, logoFile, {
        cacheControl: '3600',
        upsert: false
      })
      if (error) {
              alert('Could not upload your logo, please try again');
            } else {
                alert('Logo Uploaded');
            }
            console.log("image file",data)
}



   const create = () => {
    createProfile();
    
   }


//   const handleRegistered = (event: React.ChangeEvent<HTMLInputElement>) => {
//     console.log("testing")
//     setRegistered((event.target as HTMLInputElement).value);
//     console.log('it works', registered)
//   };
//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     console.log("testing",(event.target as HTMLInputElement).value )
//     setValue((event.target as HTMLInputElement).value);
//   };
    
    return (
        <div className="profile-con">
            <UserNavbar/>
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
                                    onChange={(e) => setCompanyName(e.target.value)}
                                    size="small"
                                    />
                            </div>
                            <div className="companyLogo">
                                <Typography>Logo</Typography>
                                <div className="uplaodBtn">
                             <input
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    onChange={uploadLogo}
                                />
                                <label htmlFor="contained-button-file">
                                    <Button variant="contained" color="primary" component="span">
                                    Upload
                                    </Button>
                                </label>
                                <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                                <label htmlFor="icon-button-file">
                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera />
                                    </IconButton>
                                </label>
                                </div>
                            </div>
                         
                            <div className="registered">
                            {/* <FormControl component="fieldset">
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                    <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                                </RadioGroup>
                                </FormControl> */}
                            </div>
                            <div className="companyIn">
                                <Typography>Industry</Typography>
                                <TextField
                                    variant="outlined"
                                    className="comin"
                                    label="Industry"
                                    onChange={(e) => setIndustry(e.target.value)}
                                    size="small"
                                    />
                            </div>
                            <div className="sort">
                            <Typography>Company Location</Typography>
                            <div className="companyLocation">
                                
                                <TextField
                                    variant="outlined"
                                    className="comName"
                                    label="Company Location"
                                    onChange={(e) => setLocation(e.target.value)}
                                    size="small"
                                    />
                            </div>
                            <Typography>Number of employees</Typography>
                            <div className="numEmployees">
                                
                                <TextField
                                    variant="outlined"
                                    className="comName"
                                    placeholder="Number of employees at your company..."
                                    onChange={(e) => setEmployees(Number(e.target.value))}
                                    label="Number of employees"
                                    size="small"
                                    />
                            </div>
                            <Typography>Annual Turnover</Typography>
                            <div className="annualTurnover">
                               
                                <TextField
                                    variant="outlined"
                                    className="comName"
                                    placeholder="What is your yearly turnover..." name="annual_turnover"
                                    label="Annual Turnover"
                                    onChange={(e) => setAnnTurnover(Number(e.target.value))}
                                    size="small"
                                    />
                            </div>
                            <Typography>Monthly Turnover (6 months)</Typography>
                            <div className="turnover">
                                
                                <TextField
                                    variant="outlined"
                                    className="comName"
                                    placeholder="What was your monthly turnover in the past 6 months..."
                                    label="Monthly Turnover"
                                    onChange={(e) => setMonTurnover(Number(e.target.value))}
                                    size="small"
                                    />
                            </div>
                            <Typography>Products/Services</Typography>
                            <div className="Products">
                                
                                <TextField
                                    variant="outlined"
                                    className="comName"
                                    label="Products"
                                    size="small"
                                    onChange={(e) => setProduct(e.target.value)}
                                    placeholder="What products or services is your company offering?"
                                    />
                            </div>
                            <Link to='/HealthR' style={linkStyle}>
                            <Button 
                                    variant='outlined' 
                                    className='btnProfSave'
                                    onClick={() => create()}
                            >
                                    Save
                            </Button>
                            </Link>
                            </div>
                          
                            
                        </Grid>
                    </Grid>
                </div>
            </Container>
            <div className="footProf">
                <Footernew/>
            </div>
        </div>
        
    )
}

export default Profile