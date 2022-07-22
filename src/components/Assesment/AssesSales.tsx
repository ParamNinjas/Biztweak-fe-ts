import React, { useState } from 'react';
import { Container, Grid, Button } from '@material-ui/core';
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
import { Link, useLocation } from 'react-router-dom';
import { createSlice } from '@reduxjs/toolkit';
import './Assessment.css'
import { Api } from '../../services/endpoints';
import { IRecomendation } from '../../Interfaces/IRecomendation'
import Footernew from '../Footer/Footernew';
import { supabase } from '../../supabaseClient';
import marketingSales from '../../json/marketingSales.json';
import customerSegment from '../../json/customerSegment.json';
import valuePropositionSegment from '../../json/valueProposition.json';
import keyActivitiesSegment from '../../json/keyActivities.json';
import keyResourcesSegment from '../../json/keyResources.json';

type LocationState = {
  bizInd: Array<{
    value: number;
    label: string
  }>,
  bizPhase: Array<{
    value: number;
    label: string
  }>
}



const AssessBasic = () => {
  const location = useLocation();
  const bizInd = (location.state as LocationState)?.bizInd;
  const bizPhase = (location.state as LocationState)?.bizPhase;
  const [value, setValue] = React.useState('');
  const [mkSales, setMkSales] = useState<{ question: string, field: string }[]>(marketingSales);
  const [CustomerSegment, setCustomerSegment] = useState<{ question: string, field: string }[]>(customerSegment);
  const [PropositionSegment, setPropositionSegment] = useState<{ question: string, field: string }[]>(valuePropositionSegment);
  const [KeyActivitiesSegment, setKeyActivitiesSegment] = useState<{ question: string, field: string }[]>(keyActivitiesSegment);
  const [KeyResourcesSegment, setKeyResourcesSegment] = useState<{ question: string, field: string }[]>(keyResourcesSegment);


  const [values, setValues] = useState<any>([]);
  const [customerSegmentValues, setCustomerSegmentValues] = useState<any>([]);
  const [propositionSegmentValues, setPropositionSegmentValues] = useState<any>([]);
  const [keyActivitiesSegmentValues, setKeyActivitiesSegmentValues] = useState<any>([]);
  const [keyResourcesSegmentValues, setKeyResourcesSegmentValues] = useState<any>([]);



  const user = supabase.auth.user()
  function Alert(props: any) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const createReport = async () => {
    // Customer Segment
    const customerSegment = [
      {
        key: customerSegmentValues.productOwner == "yes" ? "Customer profile has been determined." : "Customer profile not determined",
        value: customerSegmentValues.productOwner == "yes" ? "No recommendation" : "Market Research"
      },
      {
        key: customerSegmentValues.tagetAudiance == "yes" ? "Target audience has been determined." : "Target audience has not been selected",
        value: customerSegmentValues.tagetAudiance == "yes" ? "No recommendation" : "Market Intelligence"
      },
      {
        key: customerSegmentValues.tagetAudianceLocation == "yes" ? "Target audience has been located geographically." : "Target audience has not been located geographically",
        value: customerSegmentValues.tagetAudianceLocation == "yes" ? "No recommendation" : "Market Research"
      },
      {
        key: customerSegmentValues.tagetMarketSize == "yes" ? "Target audience has been segmented." : "Target audience has not been segmented.",
        value: customerSegmentValues.tagetMarketSize == "yes" ? "No recommendation" : "SAM SOM TAM"
      },
      {
        key: customerSegmentValues.cusReach == "yes" ? "Total accessible market has been determined." : "Total accessible market has not been determined",
        value: customerSegmentValues.cusReach == "yes" ? "No recommendation" : "Market Strategy"
      },
      {
        key: customerSegmentValues.competitor == "yes" ? "Competitors have been identified" : "competitors have not been identified",
        value: customerSegmentValues.competitor == "yes" ? "No recommendation" : "Competitor Analysis"
      },
      {
        key: customerSegmentValues.marketAccess == "yes" ? "Total accessible market has been determined." : "Total accessible market has not been determined",
        value: customerSegmentValues.marketAccess == "yes" ? "No recommendation" : "Total Addressable market"
      },
      {
        key: customerSegmentValues.marketLocation == "yes" ? "Total observable market has been determined." : "Total observable market has not been determined.",
        value: customerSegmentValues.marketLocation == "yes" ? "No recommendation" : "Market Reasearch"
      },
      {
        key: customerSegmentValues.idealCustomer == "yes" ? "Ideal customer profile has been determined." : "Ideal customer profile has not been determined.",
        value: customerSegmentValues.idealCustomer == "yes" ? "No recommendation" : "Ideal Customer profile"
      },
      {
        key: customerSegmentValues.importantCustomer == "yes" ? "Most important not determined." : "Most important customers not determined",
        value: customerSegmentValues.importantCustomer == "yes" ? "No recommendation" : "Market Research"
      },
      {
        key: customerSegmentValues.customerReaserch == "yes" ? "Customer research has been done" : "Customer research has not been done",
        value: customerSegmentValues.customerReaserch == "yes" ? "No recommendation" : "Business Research Officer"
      }
    ]


    // Market and Sales
    const Market = [
      {
        key: values.effectiveAd === "yes" ? "The advertising is effective" : "The advertising is not effective",
        value: values.effectiveAd === "yes" ? "No recommendation" : "marketing plan"
      }, {
        key: values.companyAd === "yes" ? "The company does advertise" : "The company does not advertise",
        value: values.companyAd === "yes" ? "No recommendation" : "marketing plan",
      },
      {
        key: values.planning === "yes" ? "Sales Planning is conducted" : "Sales Planning is not conducted",
        value: values.planning === "yes" ? "No recommendation" : "Sales planning, Customer acquistion plan.",
      }, {
        key: values.priceStrategy === "yes" ? "Price strategy planning is done" : "Price strategy planning is not done",
        value: values.priceStrategy === "yes" ? "No recommendation" : "Revenue models"
      }, {
        key: values.priceReview === "yes" ? "Prive reviews are done" : "Prive reviews are not done",
        value: values.priceReview === "yes" ? "No recommendation" : "Costing, product & service pricing"
      }
    ]

    // Key Proposition
    const valuePropositionSegment = [
      {
        key: propositionSegmentValues.problem === "yes" ? "Problem being solved has been determined." : "Problem being solved not determined",
        value: propositionSegmentValues.problem === "yes" ? "No recommendation" : "Value proposition canvas"
      },
      {
        key: propositionSegmentValues.cusValue === "yes" ? "Value being delivered has been determined." : "Value being delivered not determined.",
        value: propositionSegmentValues.cusValue === "yes" ? "No recommendation" : "Business model canvas"
      },
      {
        key: propositionSegmentValues.needsSatisfied === "yes" ? "Customer needs have been determined." : "Customer needs have not been determined.",
        value: propositionSegmentValues.needsSatisfied === "yes" ? "No recommendation" : "Value proposition canvas"
      },
      {
        key: propositionSegmentValues.productUniqueness === "yes" ? "uniques selling point has been determined." : "Uniques selling point not determined.",
        value: propositionSegmentValues.productUniqueness === "yes" ? "No recommendation" : "Value proposition canvas"
      },
      {
        key: propositionSegmentValues.elevatorPitch === "yes" ? "An elevator pitch has been prepared." : "elevator pitch template",
        value: propositionSegmentValues.elevatorPitch === "yes" ? "No recommendation" : "No elevator pitch"
      }
    ]

    //Key Activities
    const keyActivities = [
      {
        key: keyActivitiesSegmentValues.bizModel === "yes" ? "Key activities in the business have been determined" : "Key activities in the business not determined",
        value: keyActivitiesSegmentValues.bizModel === "yes" ? "No recommendation" : "Process development"
      }
    ]

    //Key Resources

    const keyResources = [{
      key: keyResourcesSegmentValues.resources === "yes" ? "Key resources needed have been determined." : "Key resources needed have not been determined",
      value: keyResourcesSegmentValues.resources === "yes" ? "No recommendation" : "organizational design and development"
    }]




    const payload = {
      "segment": "customer",
      "userId": user?.id,
      "segmentResponses": {
        "Customer": customerSegment,
        "Market": Market,
        "Value": valuePropositionSegment,
        "Activities": keyActivities,
        "Resources": keyResources
      }

    } as IRecomendation
    console.log("array of answers", payload)
    const result = await Api.POST_CreateRecommendation(payload)
    console.log('Result is' , result) 
  }

  const handleChangeMarketingAndSales = (question: string, field: string, event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    // console.log(index, question, field)
    const indexOfObject = mkSales.findIndex(object => {
      return object.question === question;
    });
    setValues({ ...values, [field]: (event.target as HTMLInputElement).value });

    mkSales.splice(indexOfObject, 1);
  };

  const handleChangeCustomerSegment = (question: string, field: string, event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const indexOfObject = CustomerSegment.findIndex(object => {
      return object.question === question;
    });
    setCustomerSegmentValues({ ...customerSegmentValues, [field]: (event.target as HTMLInputElement).value });

    CustomerSegment.splice(indexOfObject, 1);
  };

  const handleChangePropositionSegment = (question: string, field: string, event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const indexOfObject = PropositionSegment.findIndex(object => {
      return object.question === question;
    });
    setPropositionSegmentValues({ ...customerSegmentValues, [field]: (event.target as HTMLInputElement).value });

    PropositionSegment.splice(indexOfObject, 1);
  };

  const handleChangeKeyActivitiesSegment = (question: string, field: string, event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const indexOfObject = KeyActivitiesSegment.findIndex(object => {
      return object.question === question;
    });
    setKeyActivitiesSegmentValues({ ...keyActivitiesSegmentValues, [field]: (event.target as HTMLInputElement).value });

    KeyActivitiesSegment.splice(indexOfObject, 1);
  };

  const handleChangeKeyResourcesSegment = (question: string, field: string, event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const indexOfObject = KeyResourcesSegment.findIndex(object => {
      return object.question === question;
    });
    setKeyResourcesSegmentValues({ ...keyResourcesSegmentValues, [field]: (event.target as HTMLInputElement).value });

    KeyResourcesSegment.splice(indexOfObject, 1);
  };



  //Key Resources
  const [resources, setResources] = React.useState<string>();

  const handleReasources = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResources((event.target as HTMLInputElement).value);
  };

  return (
    <div className='Basic'>
      <UserNavbar />
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
                  <Typography>Location: N/A</Typography>
                </div>
                <div className='indust'>
                  <Typography>Industry: {bizInd[0].label}</Typography>
                </div>
                <div className='phase'>
                  <Typography>Business Phase: {bizPhase[0].label}</Typography>
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
                  <div className='rev'>
                    {
                      CustomerSegment.map((val, index) => {
                        return (
                          <div key={index}>
                            <FormControl>
                              <FormLabel id="demo-controlled-radio-buttons-group">
                                {val.question}
                              </FormLabel>
                              <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                //name="controlled-radio-buttons-group"
                                value={values[index]}
                                onChange={(e) => handleChangeCustomerSegment(val.question, val.field, e, index)}
                              >
                                <FormControlLabel value="yes" checked={false} control={<Radio />} label="Yes" />
                                <FormControlLabel value="no" checked={false} control={<Radio />} label="No" />

                              </RadioGroup>
                            </FormControl>
                          </div>
                        )

                      })
                    }
                  </div>
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
                    {
                      mkSales.map((val, index) => {
                        return (
                          <div key={index}>
                            <FormControl>
                              <FormLabel id="demo-controlled-radio-buttons-group">
                                {val.question}
                              </FormLabel>
                              <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                //name="controlled-radio-buttons-group"
                                value={values[index]}
                                onChange={(e) => handleChangeMarketingAndSales(val.question, val.field, e, index)}
                              >
                                <FormControlLabel value="yes" checked={false} control={<Radio />} label="Yes" />
                                <FormControlLabel value="no" checked={false} control={<Radio />} label="No" />

                              </RadioGroup>
                            </FormControl>
                          </div>
                        )

                      })
                    }
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
                  <div className='rev'>
                    {
                      PropositionSegment.map((val, index) => {
                        return (
                          <div key={index}>
                            <FormControl>
                              <FormLabel id="demo-controlled-radio-buttons-group">
                                {val.question}
                              </FormLabel>
                              <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                //name="controlled-radio-buttons-group"
                                value={values[index]}
                                onChange={(e) => handleChangePropositionSegment(val.question, val.field, e, index)}
                              >
                                <FormControlLabel value="yes" checked={false} control={<Radio />} label="Yes" />
                                <FormControlLabel value="no" checked={false} control={<Radio />} label="No" />

                              </RadioGroup>
                            </FormControl>
                          </div>
                        )

                      })
                    }
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
                  <div className='rev'>
                    {
                      KeyActivitiesSegment.map((val, index) => {
                        return (
                          <div key={index}>
                            <FormControl>
                              <FormLabel id="demo-controlled-radio-buttons-group">
                                {val.question}
                              </FormLabel>
                              <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                //name="controlled-radio-buttons-group"
                                value={values[index]}
                                onChange={(e) => handleChangeKeyActivitiesSegment(val.question, val.field, e, index)}
                              >
                                <FormControlLabel value="yes" checked={false} control={<Radio />} label="Yes" />
                                <FormControlLabel value="no" checked={false} control={<Radio />} label="No" />

                              </RadioGroup>
                            </FormControl>
                          </div>
                        )

                      })
                    }
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
                  <div className='rev'>
                    {
                      KeyResourcesSegment.map((val, index) => {
                        return (
                          <div key={index}>
                            <FormControl>
                              <FormLabel id="demo-controlled-radio-buttons-group">
                                {val.question}
                              </FormLabel>
                              <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                //name="controlled-radio-buttons-group"
                                value={values[index]}
                                onChange={(e) => handleChangeKeyResourcesSegment(val.question, val.field, e, index)}
                              >
                                <FormControlLabel value="yes" checked={false} control={<Radio />} label="Yes" />
                                <FormControlLabel value="no" checked={false} control={<Radio />} label="No" />

                              </RadioGroup>
                            </FormControl>
                          </div>
                        )

                      })
                    }
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
                <Link to='/HealthReport'>Save</Link>

              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
      <div className='footD'>
        <Footernew />
      </div>
    </div>
  )
}

export default AssessBasic;
// export const { save } = actions;
// export default reducer;

//try Export at the top