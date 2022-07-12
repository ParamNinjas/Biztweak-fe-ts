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
import './Assessment.css'
import { Api } from '../../services/endpoints';
import { IRecomendation } from '../../Interfaces/IRecomendation'
import Footernew from '../Footer/Footernew';
import { supabase } from '../../supabaseClient';

// const linkStyle = {
//   margin: "1rem",
//   textDecoration: "none", 
  
// };


const AssessBasic = () => {
  const [value, setValue] = React.useState('');
  const user = supabase.auth.user()
    function Alert(props : any) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }
      console.log("user id", user?.id)
  const createReport = async () =>{
     const payload = {
      "segment": "customer",
      "userId": user?.id,
      "segmentResponses": {
        "Customer": [{"key": productRecoKey ,"value": productReco},
                      {"key": targetRecoKey ,"value": targetReco},
                      {"key": targetLocRecoKey , "value": targetLocReco },
                      {"key": targetSizeRecoKey ,"value": targetSizeReco},
                      {"key": reacRecoKey,"value": reacReco},
                      {"key": competitorRecoKey ,"value": competitorReco},
                      {"key": accessRecoKey, "value": accessReco },
                      {"key": marketLocRecoKey,"value": marketLocReco},
                      {"key": idealCusRecoKey,"value": idealCusReco},
                      {"key": importantCusRecoKey, "value": importantCusReco},
                      {"key": cusResearchRecoKey, "value": cusResearchReco }
                    ],
        "Market": [{"key"   :  companyAdReco ,"value": companyAdReco},
                    {"key"  :  effectiveRecoKey ,"value": effectiveReco},
                    { "key" :  planningRecoKey  , "value" : planningReco}, 
                    { "key" :  stratRecoKey  , "value" : stratReco},
                    { "key" :  reviewRecoKey  , "value" : reviewReco }, 
        ],
        "Value": [{"key"  : problemRecoKey ,"value": problemReco},
                  {"key"  : problemRecoKey,"value": cusValueReco},
                  { "key" : problemRecoKey, "value" : needsReco}, 
                  { "key" :uniqueRecoKey , "value" : uniqueReco},
                  { "key" :elevatorRecoKey , "value" : elevatorReco}, 
          ],
          "Activities": [{"key": bizRecoKey,"value": bizReco},
                        ],
          "Resources": [{"key": resourcesRecoKey ,"value": resourcesReco},
                      ],
  
    
      } 
    
    } as IRecomendation
      const result = await Api.POST_CreateRecommendation(payload)
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
      let productRecoKey = ""
     if (productOwner === "yes"){
        productReco = "No recommendation"
        productRecoKey = "Customer profile has been determined."
     }else {
       productReco = "Market Research"
       productRecoKey = "Customer profile not determined"
     }
  
     let targetReco = ""
     let targetRecoKey = ""
     if (tagetAudiance === "yes"){
        targetReco = "No recommendation"
        targetRecoKey = "Target audience has been determined."
     }else {
       targetReco = "Market Intelligence"
       targetRecoKey = "Target audience has not been selected"
     }
     
     let targetLocReco = ""
     let targetLocRecoKey = ""
     if (tagetAudianceLocation === "yes"){
      targetLocReco = "No recommendation"
      targetLocRecoKey = "Target audience has been located geographically."
     }else {
      targetLocReco = "Market Research"
      targetLocRecoKey = "Target audience has not been located geographically"
     }
    

     let targetSizeReco = ""
     let targetSizeRecoKey = ""
     if (tagetMarketSize === "yes"){
      targetSizeReco = "No recommendation"
      targetSizeReco = "Target audience has been segmented."
     }else {
      targetSizeReco = "SAM SOM TAM"
      targetSizeRecoKey = "Target audience has not been segmented."
     }

     let reacReco = ""
     let reacRecoKey = ""
     if (cusReach === "yes"){
      reacReco = "No recommendation"
      reacRecoKey = "Total accessible market has been determined."
     }else {
      reacReco = "Market Strategy"
      reacRecoKey = "Total accessible market has not been determined"
     }
  
     let competitorReco = ""
     let competitorRecoKey = ""
     if (competitor === "yes"){
      competitorReco = "No recommendation"
      competitorRecoKey = "Competitors have been identified"
     }else {
      competitorReco = "Competitor Analysis"
      competitorRecoKey = "competitors have not been identified"
     }
     
     let accessReco = ""
     let accessRecoKey = ""
     if (marketAccess === "yes"){
      accessReco = "No recommendation"
      accessRecoKey = "Total accessible market has been determined."
     }else {
      accessReco = "Total Addressable market"
      accessRecoKey = "Total accessible market has not been determined"
     }
    

     let marketLocReco = ""
     let marketLocRecoKey = ""
     if (marketLocation === "yes"){
      marketLocReco = "No recommendation"
      marketLocRecoKey = "Total observable market has been determined."
     }else {
      marketLocReco = "Market Reasearch"
      marketLocRecoKey = "Total observable market has not been determined."
     }

     let idealCusReco = ""
     let idealCusRecoKey = ""
     if (idealCustomer === "yes"){
      idealCusReco = "No recommendation"
      idealCusRecoKey = "Ideal customer profile has been determined."
     }else {
      idealCusReco = "Ideal Customer profile"
      idealCusRecoKey = "Ideal customer profile has not been determined."
     }
     
     let importantCusReco = ""
     let importantCusRecoKey = "" 
     if (importantCustomer === "yes"){
      importantCusReco = "No recommendation"
      importantCusRecoKey = "Most important not determined."
     }else {
      importantCusReco = "Market Research"
      importantCusRecoKey = "Most important customers not determined"
     }
    

     let cusResearchReco = ""
     let cusResearchRecoKey = ""
     if (customerReaserch === "yes"){
      cusResearchReco = "No recommendation"
      cusResearchRecoKey = "Customer research has been done"
     }else {
      cusResearchReco = "Business Research Officer"
      cusResearchRecoKey = "Customer research has not been done"
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
      let companyAdRecoKey = ""
      if (companyAd === "yes"){
        companyAdReco = "No recommendation"
        companyAdRecoKey = "The company does advertise"
      }else {
        companyAdReco = "marketing plan"
        companyAdRecoKey = "The company does not advertise"
      }
   
      let effectiveReco = ""
      let effectiveRecoKey = ""
      if (effectiveAd === "yes"){
         effectiveReco = "No recommendation"
         effectiveRecoKey = "The advertising is effective"
      }else {
        effectiveReco = "rmarketing plan"
        effectiveRecoKey = "The advertising is not effective"
      }
      
      let planningReco = ""
      let planningRecoKey = ""
      if (planning === "yes"){
        planningReco  = "No recommendation"
        planningRecoKey = "Sales Planning is conducted"
      }else {
        planningReco  = "Sales planning, Customer acquistion plan,  "
        planningRecoKey = "Sales Planning is not conducted"
      }
     
 
      let stratReco = ""
      let stratRecoKey = ""
      if (priceStrategy === "yes"){
        stratReco = "No recommendation"
        stratRecoKey = "Price strategy planning is done"
      }else {
        stratReco = "Revenue models"
        stratRecoKey = "Price strategy planning is not done"
      }
 
      let reviewReco = ""

      let reviewRecoKey = ""
      if (priceReview === "yes"){
        reviewReco = "No recommendation"
        reviewRecoKey = "Prive reviews are done"
      }else {
        reviewReco = "Costing, product & service pricing"
        reviewRecoKey = "Prive reviews are not done"
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
      let problemRecoKey = ""
      if (problem === "yes"){
        problemReco = "No recommendation"
        problemRecoKey = "Problem being solved has been determined."
      }else {
        problemReco = "Value proposition canvas"
        problemRecoKey = "Problem being solved not determined"
      }
   
      let cusValueReco = ""
      let cusValueRecoKey = ""
      if (cusValue === "yes"){
        cusValueReco = "No recommendation"
        cusValueRecoKey = "Value being delivered has been determined."
      }else {
        cusValueReco = "Business model canvas"
        cusValueRecoKey = "Value being delivered not determined."
      }
      
      let needsReco = ""
      let needsRecoKey = ""
      if (needsSatisfied === "yes"){
        needsReco  = "No recommendation"
        needsRecoKey = "Customer needs have been determined."
      }else {
        needsReco  = "Value proposition canvas"
        needsRecoKey = "Customer needs have not been determined."
      }
     
 
      let uniqueReco = ""
      let uniqueRecoKey = ""
      if (productUniqueness === "yes"){
        uniqueReco = "No recommendation"
        uniqueRecoKey = "uniques selling point has been determined."
      }else {
        uniqueReco = "Value proposition canvas"
        uniqueRecoKey = "Uniques selling point not determined."
      }
 
      let elevatorReco = ""
      let elevatorRecoKey = ""
      if (elevatorPitch === "yes"){
        elevatorReco = "No recommendation"
        elevatorRecoKey = "An elevator pitch has been prepared."
      }else {
        elevatorReco = "elevator pitch template"
        elevatorRecoKey = "No elevator pitch"
      }

      //Key Activities
      const [bizModel, setBizModel] = React.useState<string>();

      const handleBizModel = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBizModel((event.target as HTMLInputElement).value);
      };
      let bizReco = ""
      let bizRecoKey = ""
      if (bizModel === "yes"){
        bizReco  = "No recommendation"
        bizRecoKey = "Key activities in the business have been determined"
      }else {
        bizReco  = "Process development"
        bizRecoKey = "Key activities in the business not determined"
      }

      //Key Resources
      const [resources, setResources] = React.useState<string>();

      const handleReasources = (event: React.ChangeEvent<HTMLInputElement>) => {
        setResources((event.target as HTMLInputElement).value);
      };

      let resourcesReco = ""
      let resourcesRecoKey = ""
      if (resources === "yes"){
        resourcesReco  = "No recommendation"
        resourcesRecoKey = "Key resources needed have been determined."
      }else {
        resourcesReco  = "organizational design and development"
        resourcesRecoKey = "Key resources needed have not been determined"
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
              <div className='rad'>
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
                    <div className="asRes">
                      <div className="yes">
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                      </div>
                      <div className="no">
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                      </div>
                    </div>
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
                   <div className="asRes">
                      <div className="yes">
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                      </div>
                      <div className="no">
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                      </div>
                    </div>
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
                   <div className="asRes">
                      <div className="yes">
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                      </div>
                      <div className="no">
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                      </div>
                    </div>
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
                    <div className="asRes">
                      <div className="yes">
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                      </div>
                      <div className="no">
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                      </div>
                    </div>
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
                    <div className="asRes">
                      <div className="yes">
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                      </div>
                      <div className="no">
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                      </div>
                    </div>
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
                    <div className="asRes">
                      <div className="yes">
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                      </div>
                      <div className="no">
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                      </div>
                    </div>
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
                    <div className="asRes">
                      <div className="yes">
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                      </div>
                      <div className="no">
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                      </div>
                    </div>
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
                    <div className="asRes">
                      <div className="yes">
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                      </div>
                      <div className="no">
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                      </div>
                    </div>
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
                    <div className="asRes">
                      <div className="yes">
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                      </div>
                      <div className="no">
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                      </div>
                    </div>
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
                   <div className="asRes">
                      <div className="yes">
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                      </div>
                      <div className="no">
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                      </div>
                    </div>
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
                    value={customerReaserch}
                    onChange={handleCusResearch}
                  >
                    <div className="asRes">
                      <div className="yes">
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                      </div>
                      <div className="no">
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                      </div>
                    </div>
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
                    <div className="asRes">
                      <div className="yes">
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                      </div>
                      <div className="no">
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                      </div>
                    </div>
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
                    <div className="asRes">
                      <div className="yes">
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                      </div>
                      <div className="no">
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                      </div>
                    </div>
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
                  <div className="asRes">
                      <div className="yes">
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                      </div>
                      <div className="no">
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                      </div>
                    </div>
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
                    <div className="asRes">
                      <div className="yes">
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                      </div>
                      <div className="no">
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                      </div>
                    </div>
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
                  <div className="asRes">
                      <div className="yes">
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                      </div>
                      <div className="no">
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                      </div>
                    </div>
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
                  <div className="asRes">
                      <div className="yes">
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                      </div>
                      <div className="no">
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                      </div>
                    </div>
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
                   <div className="asRes">
                      <div className="yes">
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                      </div>
                      <div className="no">
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                      </div>
                    </div>
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
                    <div className="asRes">
                      <div className="yes">
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                      </div>
                      <div className="no">
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                      </div>
                    </div>
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
                    <div className="asRes">
                      <div className="yes">
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                      </div>
                      <div className="no">
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                      </div>
                    </div>
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
                    <div className="asRes">
                      <div className="yes">
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                      </div>
                      <div className="no">
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                      </div>
                    </div>
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
                   <div className="asRes">
                      <div className="yes">
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                      </div>
                      <div className="no">
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                      </div>
                    </div>
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
               <div className="asRes">
                      <div className="yes">
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                      </div>
                      <div className="no">
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                      </div>
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      
      <div className='AssesButtons1'>
        <div className='back'>
        <Button 
            variant='outlined'
            className='AssesBack'
        >
        Back 
        </Button>  
        </div>
        <div className='save'>
        <Button 
            variant='outlined'
            className='AssesSave'
            onClick={() => createReport()}
            
        >
          <Link to='/HealthReport' >Save</Link>
        
        </Button>       
        </div>
      </div>
        </Grid>
        </Grid>
        </Container>
        <div className='footD'>
          <Footernew/>
        </div>
      </div>
    )
}

export default AssessBasic;
