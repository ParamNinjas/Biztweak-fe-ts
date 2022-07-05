import React from "react";
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

    const classes = useStyles();
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
                            size="small"
                            InputProps={{
                                className: classes.input
                              }}
                            />
                        <Typography>Password</Typography>
                        <TextField
                            variant="outlined"
                            className="txtfield"
                            fullWidth
                            size="small"
                            />
                        <Typography>Company Name</Typography>
                        <TextField
                            variant="outlined"
                            className="txtfield"
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
                                    // value={registered}
                                    // onChange={handleRegistered}
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
                            // size="small"
                            variant="outlined"
                            // value={age}
                            // onChange={handleChange}
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
                            fullWidth
                            size="small"
                            />
                        <Typography>Monthly Turnover (Over 6 months) </Typography>
                        <TextField
                            variant="outlined"
                            className="txtfield"
                            fullWidth
                            size="small"
                            />

                        <Typography>Since when has your business been in operation?</Typography>
                        <TextField
                            variant="outlined"
                            className="txtfield"
                            fullWidth
                            size="small"
                            />
                             <Typography>Which bank does your company bank with?</Typography>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            fullWidth
                            // size="small"
                            variant="outlined"
                            // value={age}
                            // onChange={handleChange}
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
                            fullWidth
                            size="small"
                            />
                    <Typography>Confirm Password</Typography>
                        <TextField
                            variant="outlined"
                            className="txtfield"
                            fullWidth
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
                            fullWidth
                            size="small"
                            />
                    <Typography>Products/Services</Typography>
                        <TextField
                            variant="outlined"
                            className="txtfield"
                            fullWidth
                            size="small"
                            />
                    <Typography>Since when has your business been operating on the premise?</Typography>
                        <TextField
                            variant="outlined"
                            className="txtfield"
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
                                // fullWidth
                                size="small"
                            />
                        </div>
                        <div className="Cash">
                        <Typography>Cash</Typography>
                            <TextField
                                variant="outlined"
                                className="txtfield"
                                // fullWidth
                                size="small"
                            />
                        </div>
                        <div className="EFT">
                        <Typography>EFT</Typography>
                            <TextField
                                variant="outlined"
                                className="txtfield"
                                // fullWidth
                                size="small"
                            />
                        </div>
                    </div>
                    </Grid>
                    <Button
                          variant="contained"
                          className="AdduserSave"  
                    >Save</Button>
                </Grid>
            </Container>
        </div>
    )

}

export default AddUser