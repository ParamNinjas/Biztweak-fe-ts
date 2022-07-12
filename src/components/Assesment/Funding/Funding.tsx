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
import { IFunding, IRecomendation } from '../../../Interfaces/IRecomendation'
import { supabase } from '../../../supabaseClient';
import Footernew from "../../Footer/Footernew";
import '../Assessment.css'




const Funding = () => {
  const user = supabase.auth.user()
    function Alert(props : any) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }
      const createReport = async () =>{
        const payload = {
         "segment": "customer",
         "userId": user?.id,
         "segmentResponses": {
          "Channels": [{"key"   :  reachCusRecoKey ,"value": reachCusReco},
                        {"key"  :  marketingPlanRecoKey ,"value": marketingPlanReco},
                        { "key" :  developedNetworkRecoKey , "value" : developedNetworkReco}, 
                        { "key" :  cusSupportRecoKey , "value" : cusSupportReco},
                        
          ],
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
           "Revenue": [{"key"   :  generatingRecoKey ,"value": generatingReco},
                       {"key"  :  willingRecoKey ,"value": willingReco},
                       { "key" :  cusPaymentRecoKey  , "value" : cusPaymentReco}, 
                       { "key" :  preferedRecoKey , "value" : preferedReco},
                      
           ],
           "Value": [{"key"  : problemRecoKey ,"value": problemReco},
                     {"key"  : problemRecoKey,"value": cusValueReco},
                     { "key" : problemRecoKey, "value" : needsReco}, 
                     { "key" :uniqueRecoKey , "value" : uniqueReco},
                     { "key" :elevatorRecoKey , "value" : elevatorReco}, 
             ],
               "Financial": [{"key"   :  budgetRecoKey  ,"value": budgetReco },
                              {"key"  :  reconsiliationRecoKey ,"value": reconsiliationReco},
                              { "key" :  cashFlowRecoKey  , "value" : cashFlowReco}, 
                              { "key" :  documentRecoKey  , "value" : documentReco},
                              { "key" :  financialManagerRecoKey  , "value" : financialManagerReco  }, 
                  ],
                  "Proof": [{"key": proofOfConceptRecoKey, "value": proofOfConceptReco},]
       
         } 
        
       
       } as IFunding
         const result = await Api.POST_CreateFundingRecommendation(payload)
         console.log('Result is' , result) 
      }
      

      //Channels
      const [reachCustomer, setReachCustomer] = React.useState<string>();
      const [marketingPlan, setMarketingPlan] = React.useState<string>();
      const [developedNetwork, setDevelopedNetwork] = React.useState<string>();
      const [customerSupport, setCustomerSupport] = React.useState<string>();

      const handlereachCustomer = (event: React.ChangeEvent<HTMLInputElement>) => {
        setReachCustomer((event.target as HTMLInputElement).value);
      };
      const handleMarketingPlan = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMarketingPlan((event.target as HTMLInputElement).value);
      };
      const handleDeveloped = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDevelopedNetwork((event.target as HTMLInputElement).value);
      };
      const handleCustomerSupport = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCustomerSupport((event.target as HTMLInputElement).value);
      };

      let reachCusReco = ""
      let reachCusRecoKey = ""
      if (reachCustomer === "yes"){
        reachCusReco  = "No recommendation"
        reachCusRecoKey  = "Customer profile has been determined."
      }else {
        reachCusReco  = "Social media marketing, marketing plan, marketing startegy, sales funnel, customer acquisition plan."
        reachCusRecoKey  = "Customer profile not determined"
      }

      let marketingPlanReco = ""
      let marketingPlanRecoKey = ""
      if (marketingPlan === "yes"){
        marketingPlanReco  = "No recommendation"
        marketingPlanRecoKey  = "Strategies to reach customers has been determined."
      }else {
        marketingPlanReco = "marketing plan"
        marketingPlanRecoKey = "Strategies to reach customers not determined"
      }

      let developedNetworkReco = ""
      let developedNetworkRecoKey = ""
      if (developedNetwork === "yes"){
        developedNetworkReco  = "No recommendation"
        developedNetworkRecoKey = "Network to reach target audience has been determined."
      }else {
        developedNetworkReco = "Sales funnel"
        developedNetworkRecoKey = "Network to to reach target audience not determined."
      }

      let cusSupportReco = ""
      let cusSupportRecoKey = ""
      if (customerSupport === "yes"){
        cusSupportReco   = "No recommendation"
        cusSupportRecoKey = "Post sales support has been provided."
      }else {
        cusSupportReco  = "Sales personnel"
        cusSupportRecoKey = "No post sales support provided"
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
        //Revenue Streams
        const [generatingRevenue, setGeneratingRevenue] = React.useState<string>();
        const [willingPay, setWillingPay] = React.useState<string>();
        const [cusPaymentMethod, setCusPaymentMethod] = React.useState<string>();
        const [preferedPayment, setPreferedPayment] = React.useState<string>();

        const handleGenerating = (event: React.ChangeEvent<HTMLInputElement>) => {
          setGeneratingRevenue((event.target as HTMLInputElement).value);
        };
        const handleWilling = (event: React.ChangeEvent<HTMLInputElement>) => {
          setWillingPay((event.target as HTMLInputElement).value);
        };
        const handleCusPayment = (event: React.ChangeEvent<HTMLInputElement>) => {
          setCusPaymentMethod((event.target as HTMLInputElement).value);
        };
        const handlePrefered = (event: React.ChangeEvent<HTMLInputElement>) => {
          setPreferedPayment((event.target as HTMLInputElement).value);
        };

        let generatingReco = ""
        let generatingRecoKey = ""
        if (generatingRevenue === "yes"){
          generatingReco = "No recommendation"
          generatingRecoKey = "Has Knowledge of how revenue is generated."
        }else {
          generatingReco = "Revenue models"
          generatingRecoKey = "Does not have Knowledge of how revenue is generated."
        }

        let willingReco = ""
        let willingRecoKey = ""
        if (willingPay === "yes"){
          willingReco  = "No recommendation"
          willingRecoKey = "Value customers are willing to pay for has been determined"
        }else {
          willingReco  = "Proof of concept"
          willingRecoKey = "Value customers are willing to pay fpr not determined"
        }

        let cusPaymentReco = ""
        let cusPaymentRecoKey = ""
        if (cusPaymentMethod === "yes"){
          cusPaymentReco  = "No recommendation"
          cusPaymentRecoKey = "Current payment trends of customers are known"
        }else {
          cusPaymentReco  = "Competitor analysis"
          cusPaymentRecoKey = "Current payment trends of customers not known."
        }

        let preferedReco = ""
        let preferedRecoKey = ""
        if (preferedPayment === "yes"){
          preferedReco  = "No recommendation"
          preferedRecoKey = "Preferred paymet method of customers has been determined."
        }else {
          preferedReco  = " Market research, competitor analysis"
          preferedRecoKey = "Preferred paymet method of customers not determined."
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



      //Financial Management
      const [budgetForecast, setBudgetForecast] = React.useState<string>();
      const [reconsiliation, setReconsiliation] = React.useState<string>();
      const [cashFlow, setCashFlow] = React.useState<string>();
      const [documentFinancials, setDocumentFinancials] = React.useState<string>();
      const [FinancialManager, setFinancialManager] = React.useState<string>();

      const handleBudget = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBudgetForecast((event.target as HTMLInputElement).value);
      };
      const handleReconsiliation = (event: React.ChangeEvent<HTMLInputElement>) => {
        setReconsiliation((event.target as HTMLInputElement).value);
      };
      const handleCashFlow = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCashFlow((event.target as HTMLInputElement).value);
      };
      const handleDocument = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDocumentFinancials((event.target as HTMLInputElement).value);
      };
      const handleManager = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFinancialManager((event.target as HTMLInputElement).value);
      };

  
      let budgetReco = ""
      let budgetRecoKey = ""
      if (budgetForecast === "yes"){
        budgetReco = "No recommendation"
        budgetRecoKey = "Proper Budget forecasting in place."
      }else {
        budgetReco = "Budget Forecasting"
        budgetRecoKey = "No Proper Budget Forecasting in place."
      }

      let reconsiliationReco = ""
      let reconsiliationRecoKey = ""
      if (reconsiliation === "yes"){
        reconsiliationReco = "No recommendation"
        reconsiliationRecoKey = "Company does not perfom Reconciliation."
      }else {
        reconsiliationReco = "Reconsiliation"
        reconsiliationRecoKey = "Company Performs Reconsilistions"
      }

      let cashFlowReco = ""
      let cashFlowRecoKey = ""
      if (cashFlow === "yes"){
        cashFlowReco = "No recommendation"
        cashFlowRecoKey = "Has proper cash flow management."
      }else {
        cashFlowReco  = "Cash Flow Management"
        cashFlowRecoKey = "Does not have proper cash flow management"
      }

      let documentReco = ""
      let documentRecoKey = ""
      if (documentFinancials === "yes"){
        documentReco = "No recommendation"
        documentRecoKey = "Financials are documented"
      }else {
        documentReco  = "Documenting Financials"
        documentRecoKey = "There are no Documented Financials"
      }

      let financialManagerReco = ""
      let financialManagerRecoKey = ""
      if (FinancialManager === "yes"){
        financialManagerReco = "No recommendation"
        financialManagerRecoKey = "Has a financial Manager"
      }else {
        financialManagerReco = "Hire a Financial Manager"
        financialManagerRecoKey = "Does Not have a financial Manager"
      }

         //Proof of Concept
         const [proofOfConcept, setProofOfConcept] = React.useState<string>();

         const handleProof = (event: React.ChangeEvent<HTMLInputElement>) => {
           setProofOfConcept((event.target as HTMLInputElement).value);
         };


         let proofOfConceptReco = ""
         let proofOfConceptRecoKey = ""
         if (proofOfConcept === "yes"){
          proofOfConceptReco = "No recommendation"
          proofOfConceptRecoKey = "Ideal customer experience has been determined."
         }else {
          proofOfConceptReco = "Proof of Concept"
          proofOfConceptRecoKey = "Ideal customer experience has not been determined."
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
                        value={reachCustomer}
                        onChange={handlereachCustomer}
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
                    Do you have a marketing plan in place?
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={marketingPlan}
                        onChange={handleMarketingPlan}
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
                    Have you developed a network to reach your target audience?
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={developedNetwork}
                        onChange={handleDeveloped}
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
                    Do you provide post-sales customer support?
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={customerSupport}
                        onChange={handleCustomerSupport}
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
          <Typography className=''>Revenue Streams</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className='rev'>
              <div>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                  How are you generating revenue from each customer segment?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={generatingRevenue}
                    onChange={handleGenerating}
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
                  Do you know the value that your customers are willing to pay for?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={willingPay}
                    onChange={handleWilling}
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
                  Do you know how your customers are currently paying?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={cusPaymentMethod}
                    onChange={handleCusPayment}
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
                  Do you know how your customers prefer to pay?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={preferedPayment}
                    onChange={handlePrefered}
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
          <Typography className=''>Financial Management</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className='Value'>

              <div>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                  Does the company perform budgeting and forecasting?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={budgetForecast}
                    onChange={handleBudget}
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
                  Does the company perform reconciliations?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={reconsiliation}
                    onChange={handleReconsiliation}
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
                  Does the company implement cash flow management?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={cashFlow}
                    onChange={handleCashFlow}
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
                  Does the company document the financials of the business?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={documentFinancials}
                    onChange={handleDocument}
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
                  Does the company have a dedicated person responsible for financial management?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={FinancialManager}
                    onChange={handleManager}
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
            <Typography className=''>Proof of concept</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className='keyA'>
              <div>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                  Have you conducted a process of proving that your target auience is willing to pay for your service/prouct, at the price you want?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={proofOfConcept}
                    onChange={handleProof}
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
        <div className='AssesButtons'>
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
        </div>
        </Grid>
        </Grid>
        </Container>
        <div className="footAs">
          <Footernew/>
        </div>
        </div>
    )

}
export default Funding