import React from 'react';
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
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'


const Dashboard = () => {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
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
                            <Button variant='outlined' className='btnCompany2'>
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
                    <button className="dropbtn">⬇</button>
                    <div className="dropdown-content">
                        <a href="#">Admin/ Business support</a>
                        <a href="#">IT / Communication</a>
                        <a href="#">Fashion / Retail</a>
                    </div>
                    </div>
                    <Typography className='bizIndustry'>Business Phase</Typography>
                    <div className="dropdown2">
                    <button className="dropbtn">⬇</button>
                    <div className="dropdown-content">
                        <a href="#">Admin/ Business support</a>
                        <a href="#">IT / Communication</a>
                        <a href="#">Fashion / Retail</a>
                    </div>
                    </div>
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                
                    <Button 
                        className='popSave'
                        variant='outlined'>
                        Save
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )


}

export default Dashboard;