import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, TextField } from "@material-ui/core";
import signin from '../Images/signin.png'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from '@material-ui/core/Radio';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
// import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import './AddUser.css';
import { supabase } from "../../../supabaseClient";

const useStyles = makeStyles(() => ({
    textField: {
      borderColor : '#00a9b1',
    },
    input: {
      color: "black",
      borderColor : '#00a9b1',
    }
  }));

const AddUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [registered, setRegistered] = useState("");
    const [industry, setIndustry] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [numEmpoyees, setNumEmpoyees] = useState("");
    const [monTurnover, setMonTurnover] = useState("");
    const [yearsOperating, setYearsOperating] = useState("");
    const [bank, setBank] = useState("");
    const [phase, setPhase] = useState("");
    const [logo, setLogo] = useState([]);
    const [location, setLocation] = useState("");
    const [annTurnover, setAnnTurnover] = useState("");
    const [product, setProduct] = useState("");
    const [yearsOnPremises, setyearOnPremises] = useState("");
    const [cashPercentage, setCashPercentage] = useState("");
    const [cardPercentage, setCardPercentage] = useState("");
    const [eftPercentage, setEftPercentage] = useState("");


    const classes = useStyles();

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
      async function UserProfileInfo(createdUser : any) {
            const { data, error } = await supabase
            .from('profile')
            .update([
            { display_name: name, email : email, Role: 1 },
            ])
            .eq('id' , createdUser.id)
            console.log('AddingUserInfo', name,email,  );
            // navigate('/login');
      }
      async function CompanyInfo(createdUser : any){
        const { data, error } = await supabase
            .from('Company')
            .insert([
                { companyName: companyName },
                { employees: numEmpoyees },
                { monTurnover: monTurnover },
                { yearsOperating:  yearsOperating},
                { phase:  phase},
                { industry:  industry},
                { registered:  registered},
                { some_column:  bank},
                { location:  location},
                { annTurnover:  annTurnover},
                { product:  product},
                { yearsOnPremises:  yearsOnPremises},
                { cashPercentage:  cashPercentage},
                { cardPercentage:  cardPercentage},
                { eftPercentage:  eftPercentage},
                // { some_column:  yearsOperating},
            ])
      }
      async function Run(){
        const createdUser = await newUser();
        if(createdUser){
            UserProfileInfo(createdUser);
            CompanyInfo(createdUser);
            // handleClickOpen()
        }
        
        console.log("running both fuctions")
      }
      const handleRegistered = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRegistered((event.target as HTMLInputElement).value);
        console.log('it works', registered)
      };
      const handleIndustry = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIndustry((event.target as HTMLInputElement).value);
      };
      const handleBank = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBank((event.target as HTMLInputElement).value);
      };
    return (
        <div className="Adduser-con">
            <Container>
                <div className="content">
                    <Typography className="ANUser">Add New User</Typography>
                    <Typography>Pleas complete your company profile</Typography>
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography>Name</Typography>
                        <TextField
                            variant="outlined"
                            className={classes.textField}
                            fullWidth
                            label="Full Name"
                            size="small"
                            onChange={(e)=> setName(e.target.value)}
                            InputProps={{
                                className: classes.input
                              }}
                            />
                        <Typography>Password</Typography>
                        <TextField
                            variant="outlined"
                            className="txtfield"
                            fullWidth
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            onChange={(e)=> setPassword(e.target.value)}
                            size="small"
                            />
                        <Typography>Company Name</Typography>
                        <TextField
                            variant="outlined"
                            className="txtfield"
                            label="Company Name"
                            onChange={(e)=> setCompanyName(e.target.value)}
                            fullWidth
                            size="small"
                            />
                            <FormControl>
                                <FormLabel id="demo-controlled-radio-buttons-group">
                                    Is you company registered?
                                </FormLabel>
                                
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={registered}
                                    onChange={handleRegistered}
                                >
                                    <div className="Rgroup">
                                    <div className="r1">
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    </div>
                                    <div className="r2">
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                    </div>
                                    </div>
                                </RadioGroup>
                            </FormControl>
                        <Typography>Business Industry</Typography>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            fullWidth
                            label="Select Industry"
                            variant="outlined"
                            value={industry}
                            onSelect={handleIndustry}
                            >
                                
                            <MenuItem value={1}>Admin/Business Support</MenuItem>
                            <MenuItem value={2}>Agriculture,Forestry,Fishing and Hunting</MenuItem>
                            <MenuItem value={3}>Arts,Entertainment and Recreation</MenuItem>
                            <MenuItem value={4}>Construction</MenuItem>
                            <MenuItem value={5}>Education</MenuItem>
                            <MenuItem value={6}>Finance and Insurance</MenuItem>
                            <MenuItem value={7}>Healthcare and Social assistance</MenuItem>
                            <MenuItem value={8}>Hospitality</MenuItem>
                            <MenuItem value={9}>Information Technology</MenuItem>
                            <MenuItem value={10}>Manufacturing</MenuItem>
                            <MenuItem value={11}>Mining and Mineral Processing</MenuItem>
                            <MenuItem value={12}>Professional, Scientific and Technical Services</MenuItem>
                            <MenuItem value={13}>Real Estate</MenuItem>
                            <MenuItem value={14}>Retail</MenuItem>
                            <MenuItem value={15}>Transport and other Logistics</MenuItem>
                            <MenuItem value={16}>Other</MenuItem>      
                        </Select>
                        <Typography>Number of employees</Typography>
                        <TextField
                            variant="outlined"
                            className="txtfield"
                            label="Number of Employees"
                            onChange={(e)=> setNumEmpoyees(e.target.value)}
                            fullWidth
                            size="small"
                            />
                        <Typography>Monthly Turnover (Over 6 months) </Typography>
                        <TextField
                            variant="outlined"
                            className="txtfield"
                            label="Monthly turnover"
                            onChange={(e)=> setMonTurnover(e.target.value)}
                            fullWidth
                            size="small"
                            />

                        <Typography>Since when has your business been in operation?</Typography>
                        <TextField
                            variant="outlined"
                            className="txtfield"
                            label="Number of years operating"
                            onChange={(e)=> setYearsOperating(e.target.value)}
                            fullWidth
                            size="small"
                            />
                             <Typography>Which bank does your company bank with?</Typography>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            fullWidth
                            variant="outlined"
                            value={bank}
                            onSelect={handleBank}
                            >
                            <MenuItem value={1}>ABSA</MenuItem>
                            <MenuItem value={1}>Capitec Bank</MenuItem>
                            <MenuItem value={2}>Standard Bank</MenuItem>
                            <MenuItem value={3}>FNB/RNB</MenuItem>
                            <MenuItem value={4}>Nedbank</MenuItem>
                            <MenuItem value={5}>Tyme Bank</MenuItem>   
                        </Select>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography>Email</Typography>
                        <TextField
                            variant="outlined"
                            className="txtfield"
                            label="Email"
                            fullWidth
                            size="small"
                            onChange={(e)=> setEmail(e.target.value)}
                            />
                    <Typography>Confirm Password</Typography>
                        <TextField
                            variant="outlined"
                            className="txtfield"
                            fullWidth
                            label="Confirm Password"
                            type="password"
                            autoComplete="current-password"
                            size="small"
                            />
                              <Typography>Company Logo</Typography>
                        <TextField
                            variant="outlined"
                            className="txtfield"
                            fullWidth
                            size="small"
                            />
                    <Typography>Company Location</Typography>
                        <TextField
                            variant="outlined"
                            className="txtfield"
                            label="Location"
                            onChange={(e)=> setLocation(e.target.value)}
                            fullWidth
                            size="small"
                            />
                    <Typography>Business Phase</Typography>
                    <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            fullWidth
                            // size="small"
                            variant="outlined"
                            // value={age}
                            // onChange={handleChange}
                            >
                            <MenuItem value={1}>I want to learn how to sell</MenuItem>
                            <MenuItem value={1}>I want to learn how to find customers</MenuItem>
                            <MenuItem value={2}>I want to learn how to raise funds</MenuItem>  
                        </Select>
                    <Typography>Annual Turnover</Typography>
                        <TextField
                            variant="outlined"
                            className="txtfield"
                            label="Annual turnover"
                            onChange={(e)=> setAnnTurnover(e.target.value)}
                            fullWidth
                            size="small"
                            />
                    <Typography>Products/Services</Typography>
                        <TextField
                            variant="outlined"
                            className="txtfield"
                            label="Products and Services"
                            onChange={(e)=> setProduct(e.target.value)}
                            fullWidth
                            size="small"
                            />
                    <Typography>Since when has your business been operating on the premise?</Typography>
                        <TextField
                            variant="outlined"
                            className="txtfield"
                            label="years on Premises"
                            onChange={(e)=> setyearOnPremises(e.target.value)}
                            fullWidth
                            size="small"
                            />
                    <Typography>What % of your turnover is</Typography>
                    <div className="percentages">
                        <div className="Card">
                        <Typography>Card</Typography>
                            <TextField
                                variant="outlined"
                                className="txtfield"
                                label="Card %"
                                onChange={(e)=> setCardPercentage(e.target.value)}
                                // fullWidth
                                size="small"
                            />
                        </div>
                        <div className="Cash">
                        <Typography>Cash</Typography>
                            <TextField
                                variant="outlined"
                                className="txtfield"
                                onChange={(e)=> setCashPercentage(e.target.value)}
                                label="Card %"
                                // fullWidth
                                size="small"
                            />
                        </div>
                        <div className="EFT">
                        <Typography>EFT</Typography>
                            <TextField
                                variant="outlined"
                                className="txtfield"
                                onChange={(e)=> setEftPercentage(e.target.value)}
                                label="EFT %"
                                // fullWidth
                                size="small"
                            />
                        </div>
                    </div>
                    </Grid>
                    <Button
                        onClick={()=> Run()}
                          variant="contained"
                          className="AdduserSave"  
                    >Save</Button>
                </Grid>
            </Container>
        </div>
    )

}

export default AddUser