import React from 'react';
import DashNav from '../DasNav/Nav';
import { Container, Grid , Button , Typography, Divider } from '@material-ui/core';
import banner from "../../Images/banner.png"
import avatar from '../../Images/avatar.png'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Report.css'



const Report = () => {

    return(
        <div className='report-con'>
            <DashNav/>
            <Container>
                <div className='report'>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={3} lg={3}>
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
                        <Grid item xs={12} sm={12} md={9} lg={9}>
                        <img
                        src={banner}
                        alt='RepBanner'
                        className='banner'
                    />
                    <Typography variant='h5'>Full Summary</Typography>

                    <div className='report-accord'>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Typography>Full Report</Typography>
                                        <Accordion >
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        className='repoAccord'
                                        >
                                        <Typography >Business Concept</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography>
                                           
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion >
                                    <Typography variant='h5'>Business Diagnosis</Typography>
                                    <Accordion >
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                        className='repoAccord'
                                        >
                                        <Typography >Priority Elements</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography>
                                            
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>

                                    <Accordion >
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                        className='repoAccord'
                                        >
                                        <Typography >Best Performing Areas</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography>
                                            
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>

                                    <Accordion >
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                        className='repoAccord'
                                        >
                                        <Typography >Major Gaps</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography>
                                            
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                
                                        <Accordion > 
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        className='repoAccord'
                                        >
                                        <Typography >Business Concept</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography>
                                            
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Typography variant='h5'>Business Diagnosis</Typography>
                                    <Accordion>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                        className='repoAccord'
                                        >
                                        <Typography >Priority Elements</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography>
                                            
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>

                                    <Accordion >
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                        className='repoAccord'
                                        >
                                        <Typography >Best Performing Areas</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography>
                                            
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>

                                    <Accordion>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                        className='repoAccord'
                                        >
                                        <Typography >Major Gaps</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography>
                                           
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>

                            </Grid>
                            </Grid>
                        
                    </div>
                    <div className='recommendations'>
                        <Typography>Report Recommendations</Typography>
                        <p>
                            Please share your details if you interested in receiving the learning metarial to help you with the weaknesses
                             in your bussiness or business idea
                        </p>

                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <Accordion >
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                        >
                                        <Typography >Strategic Planning</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography>
                                            
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                        >
                                        <Typography >Marketing and Sales</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography>
                                            
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                        >
                                        <Typography >Product Development</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography>
                                            
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                        
                                        >
                                        <Typography >Financial Management</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography>
                                            
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion >
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                        >
                                        <Typography >Legal + Compliance</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography>
                                            
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>


                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <Accordion>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                        >
                                        <Typography >Market Intelligence</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography>
                                            
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>

                                    <Accordion>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                        >
                                        <Typography >Talent Management</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography>
                                            
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>

                                    <Accordion >
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                        >
                                        <Typography >Business Process Management</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography>
                                            
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    
                                    </Grid>
                            </Grid>
                      

                    </div>    
                        </Grid>
                    </Grid>
                   

                </div>
            </Container>
        </div>
    )


}

export default Report