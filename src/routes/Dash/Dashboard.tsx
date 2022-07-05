import React, {useState} from 'react';
import { Container } from '@material-ui/core';
import { Grid , Typography , Button , Divider } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DashNav from '../../components/DasNav/Nav';
import dash from '../../Images/Dash.png'
import avatar from '../../Images/avatar.png'
import pop1 from '../../Images/pop1.png'
import pop2 from '../../Images/pop2.png'
import Select from '@material-ui/core/Select';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Footernew from '../../components/Footer/Footernew';
import './Dashboard.css'

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'white'
  };
  
const Dashboard = () => {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    
    const [bizIndlist, setBizindlist] = useState([
        {value:0, label: 'Admin/ Business support'},
        {value:1, label: 'IT/ Communication'},
        {value:2, label: 'Fashion/ Retail'},
    ])
    const [bizPhaseList, setBizPhaseList] = useState([
        {value:0, label: 'I want to sell'},
        {value:2, label: 'I want to learn how to find customers'},
        {value:3, label: 'I want to learn how to fundraise'},
    ])

    const [bizInd, setBizind] = useState([])
    const [bizPhase, setBizPhase] = useState([])

    // const navigationFunction = () => {
    //     if(bizPhaseList.value === 0 ){
    //         navigate('/AssesSell');
    //     } else if()
    // }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
        <>
        <div className='Dash-con'>
            <DashNav/>
            <Container>
                <div>
                    <Grid container >
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
                            <Button variant='outlined' className='btnCompany2' onClick={handleClickOpen}>
                                    + Add Company
                                </Button>
                        </Grid>
                        <Grid item xs={12} sm={12} md={8} lg={8}>
                            <img
                                src={dash}
                                alt='dashimage'
                                className='dashImg'
                                /> 
                                <Button 
                                    variant='outlined' 
                                    className='btnCompany'
                                    onClick={handleClickOpen}
                                    >
                                    + Add Company
                                </Button>
                            </Grid>

                    </Grid>

                </div>
            </Container>
            {/*******************
             * Add pop up
             * ******************* */}
             <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    {/* <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle> */}
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    <img
                        src={pop1}
                        alt='pop1image'
                        className='pop1Img'
                    />
                        <img
                        src={pop2}
                        alt='pop2image'
                        className='pop2Img'
                    />
                    <Typography className='bizIndustry'>Business Industry</Typography>
                <div className="dropdown">
                   
                    <select 
                            className='dropdownItem' 
                        
                            >
                                
                            {
                                bizIndlist?.map((bizInd) => (
                                <option value={bizInd.value}>{bizInd.label}</option>
                            ))
                            }
                    </select>
                    </div>
                    <Typography className='bizIndustry'>Business Phase</Typography>
                    <div className="dropdown2">
                    <select 
                            className='dropdownItem2' 
                        
                            >
                                
                            {
                                bizPhaseList?.map((bizPhase) => (
                                <option value={bizPhase.value}>{bizPhase.label}</option>
                            ))
                            }
                    </select>
                    </div>
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                
                    <Button 
                        className='popSave'
                        variant='outlined'
                        style={linkStyle}
                        onClick={handleClose}
                        >
                        <Link to='/Funding'>Save</Link>
                        
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
          
        </div>
      
        </>
    )


}

export default Dashboard;