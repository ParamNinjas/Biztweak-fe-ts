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
        {value:0, label: 'Please Select Industry'},
        {value:1, label: 'Admin/ Business support'},
        {value:2, label: 'Agrigulture,Forestry and hunting'},
        {value:3, label: 'Arts, Entertainment and Recreation'},
        {value:4, label: 'Construstion'},
        {value:5, label: 'Education'},
        {value:6, label: 'Finance and Insurance'},
        {value:7, label: 'Healthcare and Social assistance'},
        {value:8, label: 'Hospitality'},
        {value:9, label: 'Information Technology'},
        {value:10, label: 'Manufacturing'},
        {value:11, label: 'Mining and Mineral Processing'},
        {value:12, label: 'Professional, Scientific and Technical service'},
        {value:13, label: 'Real Estate'},
        {value:14, label: 'Retail/ Fasion'},
        {value:15, label: 'Transport and Logistics'},
        {value:16, label: 'Other'},
    ])
    const [bizPhaseList, setBizPhaseList] = useState([
        {value:1, label: 'Please Select phase'},
        {value:2, label: 'I want to sell'},
        {value:3, label: 'I want to learn how to find customers'},
        {value:4, label: 'I want to learn how to fundraise'},
    ])

    const [bizInd, setBizind] = useState<string>('')
    const [bizPhase, setBizPhase] = useState<string>('')

    const NavigateFunc = () => {
        if(bizPhase == '2'){
            navigate('/AssesSales',{ state: {bizInd: bizIndlist.filter(x => x.value === parseInt(bizInd)), bizPhase:  bizPhaseList.filter(x => x.value === parseInt(bizPhase))}});
        } else if(bizPhase == '3'){
            navigate('/Customer',{ state: {bizInd: bizIndlist.filter(x => x.value === parseInt(bizInd)), bizPhase:  bizPhaseList.filter(x => x.value === parseInt(bizPhase))} });
        } else {
            navigate('/Funding',{ state: {bizInd: bizIndlist.filter(x => x.value === parseInt(bizInd)), bizPhase:  bizPhaseList.filter(x => x.value === parseInt(bizPhase))} });
        }
        console.log('BizPhase is =' , bizPhase)
        console.log('BizPhase is =' , bizInd)
    }

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
                            onChange={(e) => {setBizind(e.target.value)}}
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
                            onChange={(e) => {setBizPhase(e.target.value)}}
                        
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
                        onClick={(e) => NavigateFunc()}
                        >
                        Save
                        
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
          <div className='footerD'>
            <Footernew/>
          </div>
        </div>
      
        </>
    )


}

export default Dashboard;