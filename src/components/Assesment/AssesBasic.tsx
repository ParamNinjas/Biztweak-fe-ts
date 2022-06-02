import React from 'react';
import { Container, Grid , Button } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MuiAlert from '@material-ui/lab/Alert';
import UserNavbar from '../UserNav/UserNav';
import company from '../../Images/company.png'
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Link } from 'react-router-dom';
import { createSlice } from '@reduxjs/toolkit';
import './Assessment.css'
import { Api } from '../../services/endpoints';
import { IRecomendation } from '../../Interfaces/IRecomendation'


const AssessBasic = () => {
  const [value, setValue] = React.useState('');
    function Alert(props : any) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }
  const createReport = async () =>{
    const payload = {
      "segment" : "Market Sales",
      "userId" : "U0001",
      "segmentResponses" : [{ key : "productReco " , value : productOwner}, 
                            { key : "targetReco" , value : tagetAudiance}, 
                            { key :"targetLocReco" , value : tagetAudianceLocation},
                            { key :"targetSizeReco" , value : tagetMarketSize}, 
                            { key : "reacReco" , value : cusReach}, 
                            { key : "competitorReco" , value : competitor},
                            { key : "accessReco" , value : marketAccess}, 
                            { key : "marketLocReco" , value : marketLocation},
                            { key : "idealCusReco" , value : idealCustomer}, 
                            { key : "importantCusReco" , value : importantCustomer}, 
                            { key : "cusResearchReco" , value : customerReaserch}] ,
    } as IRecomendation; 
    const result = await Api.POST_CreateRecommendation(payload)
    const filtered = payload.segmentResponses.filter(seg => {
      return seg.key = "productReco"
    })
    console.log('Result is' , result)
  }
      // Customer Segment
      const [productOwner, setProductOwner] = React.useState<string>();
      const [tagetAudiance, setTargetAudiance] = React.useState<string>();
      const [tagetAudianceLocation, setTargetAudianceLocation] = React.useState<
        string
      >();
      const [tagetMarketSize, setTargetMarketSize] = React.useState<string>();
      const [cusReach, setCusReach] = React.useState<string>();
      const [competitor, setCompetitor] = React.useState<string>();
      const [marketAccess, setMarketAccess] = React.useState<string>();
      const [marketLocation, setMarketLocation] = React.useState<string>();
      const [idealCustomer, setIdealCustomer] = React.useState<string>();
      const [importantCustomer, setImportantCustomer] = React.useState<string>();
      const [customerReaserch, setCustomerReaserch] = React.useState<string>();

    
      const handleProductOwner = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProductOwner((event.target as HTMLInputElement).value);
      };
    
      const handleTargetAudiance = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTargetAudiance((event.target as HTMLInputElement).value);
      };
    
      const handleTargetAudianceLocation = (
        event: React.ChangeEvent<HTMLInputElement>
      ) => {
        setTargetAudianceLocation((event.target as HTMLInputElement).value);
      };
    
      const handleTargetMarketSize = (
        event: React.ChangeEvent<HTMLInputElement>
      ) => {
        setTargetMarketSize((event.target as HTMLInputElement).value);
      };
      const handleCusReach = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCusReach((event.target as HTMLInputElement).value);
      };
      const handleCompetitor = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCompetitor((event.target as HTMLInputElement).value);
      };
      const handleMarketAccess = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMarketAccess((event.target as HTMLInputElement).value);
      };
      const handleMarketLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMarketLocation((event.target as HTMLInputElement).value);
      };
      const handleIdealCustomer = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIdealCustomer((event.target as HTMLInputElement).value);
      };
      const handleImportantCus = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImportantCustomer((event.target as HTMLInputElement).value);
      };
      const handleCusResearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCustomerReaserch((event.target as HTMLInputElement).value);
      };

      let productReco = ""
     if (productOwner === "yes"){
        productReco = "No recommendation"
     }else {
       productReco = "recommend course"
     }
  
     let targetReco = ""
     if (tagetAudiance === "yes"){
        targetReco = "No recommendation"
     }else {
       targetReco = "recommend course"
     }
     
     let targetLocReco = ""
     if (tagetAudianceLocation === "yes"){
      targetLocReco = "No recommendation"
     }else {
      targetLocReco = "recommend course"
     }
    

     let targetSizeReco = ""
     if (tagetMarketSize === "yes"){
      targetSizeReco = "No recommendation"
     }else {
      targetSizeReco = "recommend course"
     }

     let reacReco = ""
     if (cusReach === "yes"){
      reacReco = "No recommendation"
     }else {
      reacReco = "recommend course"
     }
  
     let competitorReco = ""
     if (competitor === "yes"){
      competitorReco = "No recommendation"
     }else {
      competitorReco = "recommend course"
     }
     
     let accessReco = ""
     if (marketAccess === "yes"){
      accessReco = "No recommendation"
     }else {
      accessReco = "recommend course"
     }
    

     let marketLocReco = ""
     if (marketLocation === "yes"){
      marketLocReco = "No recommendation"
     }else {
      marketLocReco = "recommend course"
     }

     let idealCusReco = ""
     if (idealCustomer === "yes"){
      idealCusReco = "No recommendation"
     }else {
      idealCusReco = "recommend course"
     }
     
     let importantCusReco = ""
     if (importantCustomer === "yes"){
      importantCusReco = "No recommendation"
     }else {
      importantCusReco = "recommend course"
     }
    

     let cusResearchReco = ""
     if (customerReaserch === "yes"){
      cusResearchReco = "No recommendation"
     }else {
      cusResearchReco = "recommend course"
     }
     
 

      // Market and Sales
      const [companyAd, setCompanyAd] = React.useState<string>();
      const [effectiveAd, setEffectiveAdd] = React.useState<string>();
      const [planning, setPlanning] = React.useState<string>();
      const [priceStrategy, setPriceStrategy] = React.useState<string>();
      const [priceReview, setPriceReview] = React.useState<string>();

      const handleCompanyAd = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCompanyAd((event.target as HTMLInputElement).value);
      };
      const handleEffectiveAd = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEffectiveAdd((event.target as HTMLInputElement).value);
      };
      const handlePlanning = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPlanning((event.target as HTMLInputElement).value);
      };
      const handlePriceStrategy = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPriceStrategy((event.target as HTMLInputElement).value);
      };
      const handlePriceReview = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPriceReview((event.target as HTMLInputElement).value);
      };
      
      let companyAdReco = ""
      if (companyAd === "yes"){
        companyAdReco = "No recommendation"
      }else {
        companyAdReco = "recommend course"
      }
   
      let effectiveReco = ""
      if (effectiveAd === "yes"){
         effectiveReco = "No recommendation"
      }else {
        effectiveReco = "recommend course"
      }
      
      let planningReco = ""
      if (planning === "yes"){
        planningReco  = "No recommendation"
      }else {
        planningReco  = "recommend course"
      }
     
 
      let stratReco = ""
      if (priceStrategy === "yes"){
        stratReco = "No recommendation"
      }else {
        stratReco = "recommend course"
      }
 
      let reviewReco = ""
      if (priceReview === "yes"){
        reviewReco = "No recommendation"
      }else {
        reviewReco = "recommend course"
      }
      //Value Proposition
      const [problem, setProblem] = React.useState<string>();
      const [cusValue, setCusValue] = React.useState<string>();
      const [needsSatisfied, setNeedsSatisfied] = React.useState<string>();
      const [productUniqueness, setProductUniqueness] = React.useState<string>();
      const [elevatorPitch, setElevatorPitch] = React.useState<string>();

      const handleProblem = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProblem((event.target as HTMLInputElement).value);
      };
      const handleCusValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCusValue((event.target as HTMLInputElement).value);
      };
      const handleNeeds = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNeedsSatisfied((event.target as HTMLInputElement).value);
      };
      const handleProductUnique = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProductUniqueness((event.target as HTMLInputElement).value);
      };
      const handleElevator = (event: React.ChangeEvent<HTMLInputElement>) => {
        setElevatorPitch((event.target as HTMLInputElement).value);
      };

      let problemReco = ""
      if (problem === "yes"){
        problemReco = "No recommendation"
      }else {
        problemReco = "recommend course"
      }
   
      let cusValueReco = ""
      if (cusValue === "yes"){
        cusValueReco = "No recommendation"
      }else {
        cusValueReco = "recommend course"
      }
      
      let needsReco = ""
      if (needsSatisfied === "yes"){
        needsReco  = "No recommendation"
      }else {
        needsReco  = "recommend course"
      }
     
 
      let uniqueReco = ""
      if (productUniqueness === "yes"){
        uniqueReco = "No recommendation"
      }else {
        uniqueReco = "recommend course"
      }
 
      let elevatorReco = ""
      if (elevatorPitch === "yes"){
        elevatorReco = "No recommendation"
      }else {
        elevatorReco = "recommend course"
      }

      //Key Activities
      const [bizModel, setBizModel] = React.useState<string>();

      const handleBizModel = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBizModel((event.target as HTMLInputElement).value);
      };
      let bizReco = ""
      if (bizModel === "yes"){
        bizReco  = "No recommendation"
      }else {
        bizReco  = "recommend course"
      }

      //Key Resources
      const [resources, setResources] = React.useState<string>();

      const handleReasources = (event: React.ChangeEvent<HTMLInputElement>) => {
        setResources((event.target as HTMLInputElement).value);
      };

      let resourcesReco = ""
      if (resources === "yes"){
        resourcesReco  = "No recommendation"
      }else {
        resourcesReco  = "recommend course"
      }
     

    return(
        <div className='Basic'>
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
           <div className='bassicAccords'>
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
                    value={productOwner}
                    onChange={handleProductOwner}
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
                    value={tagetAudiance}
                    onChange={handleTargetAudiance}
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
                    value={tagetAudianceLocation}
                    onChange={handleTargetAudianceLocation}
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
                    value={tagetMarketSize}
                    onChange={handleTargetMarketSize}
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
                    value={cusReach}
                    onChange={handleCusReach}
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
                    value={competitor}
                    onChange={handleCompetitor}
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
                    value={marketAccess}
                    onChange={handleMarketAccess}
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
                    value={marketLocation}
                    onChange={handleMarketLocation}
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
                    value={idealCustomer}
                    onChange={handleIdealCustomer}
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
                    value={importantCustomer}
                    onChange={handleImportantCus}
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
                    value={customerReaserch}
                    onChange={handleCusResearch}
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
          <Typography className=''>Marketing and Sales</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className='rev'>
              <div>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                  Does the company advertise?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={companyAd}
                    onChange={handleCompanyAd}
                  >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
              </div>

              <div>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                  Is the company’s advertising effective?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={effectiveAd}
                    onChange={handleEffectiveAd}
                  >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
              </div>

              <div>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                    Does the company conduct sales planning and developed targets?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={planning}
                    onChange={handlePlanning}
                  >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
              </div>

              <div>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                    Do you have a price strategy in place?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={priceStrategy}
                    onChange={handlePriceStrategy}
                  >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
              </div>

              <div>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                    Do you review your pricing strategy often?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={priceReview}
                    onChange={handlePriceReview}
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
          <Typography className=''>Value Proposition</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className='Value'>

              <div>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                  Do you know the problem you are solving?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={problem}
                    onChange={handleProblem}
                  >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
              </div>

              <div>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                  Do you know what value you deliver to the customer?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={cusValue}
                    onChange={handleCusValue}
                  >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
              </div>

              <div>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                  Are you aware of which customer needs you are satisfying?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={needsSatisfied}
                    onChange={handleNeeds}
                  >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
              </div>

              <div>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                  Can you describe the uniqueness of your product, and show key differences from existing alternatives?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={productUniqueness}
                    onChange={handleProductUnique}
                  >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
              </div>

              <div>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                  Do you have an elevator pitch?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={elevatorPitch}
                    onChange={handleElevator}
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
            <Typography className=''>Key Activities</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className='keyA'>
              <div>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                  Do you know the most important things you need to do to make your business model work?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={bizModel}
                    onChange={handleBizModel}
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
            <Typography className=''>Key Resources</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className='keyR'>
              <div>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                  Do you know what infrastructure and resources you need in order to deliver the key activities?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={resources}
                    onChange={handleReasources}
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
      
      <div className='AssesButtons'>
        <Button 
            variant='outlined'
            className='AssesBack'
        >
        Back 
        </Button>  
        <Button 
            variant='outlined'
            className='AssesSave'
            onClick={() => createReport()}
            
        >
          <Link to='/Report'>Save</Link>
        
        </Button>       
      </div>
        </Grid>
        </Grid>
        </Container>
      </div>
    )
}

export default AssessBasic;
// export const { save } = actions;
// export default reducer;

//try Export at the top