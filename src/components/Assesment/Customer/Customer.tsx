import React from "react";
import { Container, Grid , Button } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MuiAlert from '@material-ui/lab/Alert';
import UserNavbar from '../../UserNav/UserNav';
import company from '../../../Images/company.png'
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Link } from 'react-router-dom';
import { createSlice } from '@reduxjs/toolkit';
import { Api } from '../../../services/endpoints';
import { IRecomendation } from '../../../Interfaces/IRecomendation'
import { supabase } from '../../../supabaseClient';
import '../Assessment.css'




const Customer = () => {
    function Alert(props : any) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }

    return (
        <div className="sell-con">
             <UserNavbar/>
            <Container>
            <Grid container spacing={2}>
           <Grid item xs={12} sm={12} md={4} lg={4}>
             <Typography>Company</Typography>
             <Button 
             className='profAdd'
             variant='outlined'
             >
               Add Company 
            </Button>
            <div className='Accords'>
            <div className='sideAccord'>
              <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className=''>No Name</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            </div>      
           </Grid>
           <Grid item xs={12} sm={12} md={8} lg={8}>
           <Alert severity="info">Next Step! Complete your Company Assessment.</Alert>
           <Typography className='biz' variant='h5'>Biz Assessment</Typography>
           <div className='companyBox'>
              <img
                src={company}
                alt='comLogo'
                className='company'
                />
                <div className='companyInf'>
                  <div className='Location'>
                  <Typography>Location</Typography>
                  </div>
                  <div className='indust'>
                  <Typography>Industry</Typography>
                  </div>
                  <div className='phase'>
                  <Typography>Business Phase</Typography>
                </div>
                </div>
           </div>
        <div className="questionare">
            <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography className=''>Channels</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <div className='rev'>
                <div>
                    <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">
                    Do you know how you are going to reach your customers?
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        // value={companyAd}
                        // onChange={handleCompanyAd}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                    </FormControl>
                </div>

                <div>
                    <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">
                    Do you have a marketing plan in place?
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        // value={effectiveAd}
                        // onChange={handleEffectiveAd}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                    </FormControl>
                </div>

                <div>
                    <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">
                    Have you developed a network to reach your target audience?
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        // value={planning}
                        // onChange={handlePlanning}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                    </FormControl>
                </div>

                <div>
                    <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">
                    Do you provide post-sales customer support?
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        // value={priceStrategy}
                        // onChange={handlePriceStrategy}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                    </AccordionDetails>
                </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography className=''>Customer segment</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                <div className='cusSegmant-con'>
                    <div>
                        <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group">
                            Do you know who your product is for?
                        </FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            // value={productOwner}
                            // onChange={handleProductOwner}
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                        </FormControl>
                    </div>

                    <div>
                        <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group">
                            Do you know who is your target market/audience?
                        </FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            // value={tagetAudiance}
                            // onChange={handleTargetAudiance}
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                        </FormControl>
                    </div>

                    <div>
                        <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group">
                            Do you know where they are located?
                        </FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            // value={tagetAudianceLocation}
                            // onChange={handleTargetAudianceLocation}
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                        </FormControl>
                    </div>

                    <div>
                        <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group">
                            Do you know the Total market size?
                        </FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            // value={tagetMarketSize}
                            // onChange={handleTargetMarketSize}
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                        </FormControl>
                    </div>
                    
                    <div>
                        <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group">
                            Do you know how you are going to reach your Customer?
                        </FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            // value={cusReach}
                            // onChange={handleCusReach}
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                        </FormControl>
                    </div>

                    <div>
                        <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group">
                            Has the company actively identified a competitor in the market?
                        </FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            // value={competitor}
                            // onChange={handleCompetitor}
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                        </FormControl>
                    </div>

                    <div>
                        <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group">
                            Do you know how much of your market is accessible?
                        </FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            // value={marketAccess}
                            // onChange={handleMarketAccess}
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                        </FormControl>
                    </div>

                    <div>
                        <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group">
                        Do you know how much of your market is in your region/locality?
                        </FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            // value={marketLocation}
                            // onChange={handleMarketLocation}
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                        </FormControl>
                    </div>

                    <div>
                        <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group">
                        Do you have a profile for your ideal customer?
                        </FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            // value={idealCustomer}
                            // onChange={handleIdealCustomer}
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                        </FormControl>
                    </div>

                    <div>
                        <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group">
                        Do you know who your most important customers are?
                        </FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            // value={importantCustomer}
                            // onChange={handleImportantCus}
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                        </FormControl>
                    </div>

                    <div>
                        <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group">
                        Do you have a designated Customer Researcher Specialist for this?
                        </FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            // value={customerReaserch}
                            // onChange={handleCusResearch}
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                        </FormControl>
                    </div>
                </div>
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className=''>Market Intelligence</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className='rev'>
              <div>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                  Does the company conduct market research?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    // value={companyAd}
                    // onChange={handleCompanyAd}
                  >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
              </div>

              <div>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                  Has the company actively identified a competitor in the market?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    // value={effectiveAd}
                    // onChange={handleEffectiveAd}
                  >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
              </div>

              <div>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                  Has the company identified a key competitive advantage?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    // value={planning}
                    // onChange={handlePlanning}
                  >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
              </div>

              <div>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                  Do you know the company’s product or service differentiation?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    // value={priceStrategy}
                    // onChange={handlePriceStrategy}
                  >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                        </FormControl>
                    </div>
                </div>
                </AccordionDetails>
            </Accordion>
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className=''>Cost Structure</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className='rev'>
              <div>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                  Have the costs involved in delivering the key activities been determined?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    // value={companyAd}
                    // onChange={handleCompanyAd}
                  >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
              </div>

              <div>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                  Have the costs involved in acquiring the key resources been determined?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    // value={effectiveAd}
                    // onChange={handleEffectiveAd}
                  >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
              </div>

              <div>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                  Do you know the costs involved in maintaining customer relationships?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    // value={planning}
                    // onChange={handlePlanning}
                  >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
              </div>

              <div>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                  Do you know the costs involved in determining and acquiring market segments?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    // value={priceStrategy}
                    // onChange={handlePriceStrategy}
                  >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                        </FormControl>
                    </div>
                </div>
                </AccordionDetails>
            </Accordion>
        </div>
        </Grid>
        </Grid>
        </Container>
        </div>
    )

}
export default Customer