import React from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MuiAlert from '@material-ui/lab/Alert';
import UserNavbar from '../../UserNav/UserNav';
import company from '../../../Images/company.png';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Link } from 'react-router-dom';
import { Api } from '../../../services/endpoints';
import { ICustomer } from '../../../Interfaces/IRecomendation';
import { supabase } from '../../../supabaseClient';
import Footernew from '../../Footer/Footernew';
import '../Assessment.css';

const Customer = () => {
	const user = supabase.auth.user()
	function Alert(props: any) {
		return <MuiAlert elevation={6} variant="filled" {...props} />;
	}



  const createReport = async () =>{
    const payload = {
     "segment": "Customers",
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
       "MarketInt": [{"key"   :  marketResearchRecoKey ,"value": marketResearchReco},
                   {"key"  :  marketPlanRecoKey ,"value": marketPlanReco},
                   { "key" :  targetNetworkRecoKey  , "value" : targetNetworkReco}, 
                   { "key" :  postSalesRecoKey , "value" : postSalesReco},
                  
       ],
       "Cost": [{"key"  : deliveryCostRecoKey ,"value": deliveryCostReco},
                 {"key"  : acquiringCostRecoKey,"value": acquiringCostReco},
                 { "key" : cusRelationshipRecoKey, "value" : cusRelationshipReco}, 
                 { "key" :marketSegmentsRecoKey , "value" : marketSegmentsReco},
         ],
     } 
    
   
   } as ICustomer
     const result = await Api.POST_CreateCustomerRecommendation(payload)
     console.log('Result is' , result) 
  }

  
	//Channels
	const [ reachCustomer, setReachCustomer ] = React.useState<string>();
	const [ marketingPlan, setMarketingPlan ] = React.useState<string>();
	const [ developedNetwork, setDevelopedNetwork ] = React.useState<string>();
	const [ customerSupport, setCustomerSupport ] = React.useState<string>();

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

	let reachCusReco = '';
	let reachCusRecoKey = '';
	if (reachCustomer === 'yes') {
		reachCusReco = 'No recommendation';
		reachCusRecoKey = 'Customer profile has been determined.';
	} else {
		reachCusReco =
			'Social media marketing, marketing plan, marketing startegy, sales funnel, customer acquisition plan.';
		reachCusRecoKey = 'Customer profile not determined';
	}

	let marketingPlanReco = '';
	let marketingPlanRecoKey = '';
	if (marketingPlan === 'yes') {
		marketingPlanReco = 'No recommendation';
		marketingPlanRecoKey = 'Strategies to reach customers has been determined.';
	} else {
		marketingPlanReco = 'marketing plan';
		marketingPlanRecoKey = 'Strategies to reach customers not determined';
	}

	let developedNetworkReco = '';
	let developedNetworkRecoKey = '';
	if (developedNetwork === 'yes') {
		developedNetworkReco = 'No recommendation';
		developedNetworkRecoKey = 'Network to reach target audience has been determined.';
	} else {
		developedNetworkReco = 'Sales funnel';
		developedNetworkRecoKey = 'Network to to reach target audience not determined.';
	}

	let cusSupportReco = '';
	let cusSupportRecoKey = '';
	if (customerSupport === 'yes') {
		cusSupportReco = 'No recommendation';
		cusSupportRecoKey = 'Post sales support has been provided.';
	} else {
		cusSupportReco = 'Sales personnel';
		cusSupportRecoKey = 'No post sales support provided';
	}

	// Customer Segment
	const [ productOwner, setProductOwner ] = React.useState<string>();
	const [ tagetAudiance, setTargetAudiance ] = React.useState<string>();
	const [ tagetAudianceLocation, setTargetAudianceLocation ] = React.useState<string>();
	const [ tagetMarketSize, setTargetMarketSize ] = React.useState<string>();
	const [ cusReach, setCusReach ] = React.useState<string>();
	const [ competitor, setCompetitor ] = React.useState<string>();
	const [ marketAccess, setMarketAccess ] = React.useState<string>();
	const [ marketLocation, setMarketLocation ] = React.useState<string>();
	const [ idealCustomer, setIdealCustomer ] = React.useState<string>();
	const [ importantCustomer, setImportantCustomer ] = React.useState<string>();
	const [ customerReaserch, setCustomerReaserch ] = React.useState<string>();

	const handleProductOwner = (event: React.ChangeEvent<HTMLInputElement>) => {
		setProductOwner((event.target as HTMLInputElement).value);
	};

	const handleTargetAudiance = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTargetAudiance((event.target as HTMLInputElement).value);
	};

	const handleTargetAudianceLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTargetAudianceLocation((event.target as HTMLInputElement).value);
	};

	const handleTargetMarketSize = (event: React.ChangeEvent<HTMLInputElement>) => {
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

	let productReco = '';
	let productRecoKey = '';
	if (productOwner === 'yes') {
		productReco = 'No recommendation';
		productRecoKey = 'Customer profile has been determined.';
	} else {
		productReco = 'Market Research';
		productRecoKey = 'Customer profile not determined';
	}

	let targetReco = '';
	let targetRecoKey = '';
	if (tagetAudiance === 'yes') {
		targetReco = 'No recommendation';
		targetRecoKey = 'Target audience has been determined.';
	} else {
		targetReco = 'Market Intelligence';
		targetRecoKey = 'Target audience has not been selected';
	}

	let targetLocReco = '';
	let targetLocRecoKey = '';
	if (tagetAudianceLocation === 'yes') {
		targetLocReco = 'No recommendation';
		targetLocRecoKey = 'Target audience has been located geographically.';
	} else {
		targetLocReco = 'Market Research';
		targetLocRecoKey = 'Target audience has not been located geographically';
	}

	let targetSizeReco = '';
	let targetSizeRecoKey = '';
	if (tagetMarketSize === 'yes') {
		targetSizeReco = 'No recommendation';
		targetSizeReco = 'Target audience has been segmented.';
	} else {
		targetSizeReco = 'SAM SOM TAM';
		targetSizeRecoKey = 'Target audience has not been segmented.';
	}

	let reacReco = '';
	let reacRecoKey = '';
	if (cusReach === 'yes') {
		reacReco = 'No recommendation';
		reacRecoKey = 'Total accessible market has been determined.';
	} else {
		reacReco = 'Market Strategy';
		reacRecoKey = 'Total accessible market has not been determined';
	}

	let competitorReco = '';
	let competitorRecoKey = '';
	if (competitor === 'yes') {
		competitorReco = 'No recommendation';
		competitorRecoKey = 'Competitors have been identified';
	} else {
		competitorReco = 'Competitor Analysis';
		competitorRecoKey = 'competitors have not been identified';
	}

	let accessReco = '';
	let accessRecoKey = '';
	if (marketAccess === 'yes') {
		accessReco = 'No recommendation';
		accessRecoKey = 'Total accessible market has been determined.';
	} else {
		accessReco = 'Total Addressable market';
		accessRecoKey = 'Total accessible market has not been determined';
	}

	let marketLocReco = '';
	let marketLocRecoKey = '';
	if (marketLocation === 'yes') {
		marketLocReco = 'No recommendation';
		marketLocRecoKey = 'Total observable market has been determined.';
	} else {
		marketLocReco = 'Market Reasearch';
		marketLocRecoKey = 'Total observable market has not been determined.';
	}

	let idealCusReco = '';
	let idealCusRecoKey = '';
	if (idealCustomer === 'yes') {
		idealCusReco = 'No recommendation';
		idealCusRecoKey = 'Ideal customer profile has been determined.';
	} else {
		idealCusReco = 'Ideal Customer profile';
		idealCusRecoKey = 'Ideal customer profile has not been determined.';
	}

	let importantCusReco = '';
	let importantCusRecoKey = '';
	if (importantCustomer === 'yes') {
		importantCusReco = 'No recommendation';
		importantCusRecoKey = 'Most important not determined.';
	} else {
		importantCusReco = 'Market Research';
		importantCusRecoKey = 'Most important customers not determined';
	}

	let cusResearchReco = '';
	let cusResearchRecoKey = '';
	if (customerReaserch === 'yes') {
		cusResearchReco = 'No recommendation';
		cusResearchRecoKey = 'Customer research has been done';
	} else {
		cusResearchReco = 'Business Research Officer';
		cusResearchRecoKey = 'Customer research has not been done';
	}

  //Market Intelligence
  const [ marketResearch, setMarketResearch ] = React.useState<string>();
  const [ marketPlaninPlace, setMarketPlaninPlace ] = React.useState<string>();
  const [ targetNetwork, setTargetNetwork ] = React.useState<string>();
  const [ postSales, setPostSales ] = React.useState<string>();

  const handleMarketResearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setMarketResearch((event.target as HTMLInputElement).value);
	};
  const handleMarketPlaninPlace = (event: React.ChangeEvent<HTMLInputElement>) => {
		setMarketPlaninPlace((event.target as HTMLInputElement).value);
	};
  const handleTargetNetwork = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTargetNetwork((event.target as HTMLInputElement).value);
	};
  const handlePostSales = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPostSales((event.target as HTMLInputElement).value);
	};

  let marketResearchReco = '';
	let marketResearchRecoKey = '';
	if (marketResearch === 'yes') {
		marketResearchReco= 'No recommendation';
		marketResearchRecoKey = 'Customer research has been done';
	} else {
		marketResearchReco = 'Business Research Officer';
    marketResearchRecoKey = 'Customer research has not been done';
	}

  let marketPlanReco = '';
	let marketPlanRecoKey = '';
	if (marketPlaninPlace === 'yes') {
		marketPlanReco= 'No recommendation';
		marketPlanRecoKey = 'Customer research has been done';
	} else {
		marketPlanReco = 'Business Research Officer';
    marketPlanRecoKey = 'Customer research has not been done';
	}

  let targetNetworkReco = '';
	let targetNetworkRecoKey = '';
	if (targetNetwork === 'yes') {
		targetNetworkReco= 'No recommendation';
		targetNetworkRecoKey = 'Customer research has been done';
	} else {
		targetNetworkReco = 'Business Research Officer';
    targetNetworkRecoKey = 'Customer research has not been done';
	}

  let postSalesReco = '';
	let postSalesRecoKey = '';
	if (postSales === 'yes') {
		postSalesReco= 'No recommendation';
		postSalesRecoKey = 'Customer research has been done';
	} else {
		postSalesReco = 'Business Research Officer';
    postSalesRecoKey = 'Customer research has not been done';
	}


  //Cost Structure
  const [ deliveryCost, setDeliveryCost ] = React.useState<string>();
  const [ acquiringCost, setAcquiringCost ] = React.useState<string>();
  const [ customerRelationship, setCustomerRelationship ] = React.useState<string>();
  const [ marketSegments, setmarketSegments ] = React.useState<string>();

  const handleDeliveryCost = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDeliveryCost((event.target as HTMLInputElement).value);
	};
  const handleAcquiring = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAcquiringCost((event.target as HTMLInputElement).value);
	};
  const handleCustomerRelationship = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCustomerRelationship((event.target as HTMLInputElement).value);
	};
  const handleMarketSegments = (event: React.ChangeEvent<HTMLInputElement>) => {
		setmarketSegments((event.target as HTMLInputElement).value);
	};

  let deliveryCostReco = '';
	let deliveryCostRecoKey = '';
	if (deliveryCost === 'yes') {
		deliveryCostReco= 'No recommendation';
		deliveryCostRecoKey = 'Cos of sales has been determined.';
	} else {
		deliveryCostReco = 'Business Research Officer';
    deliveryCostRecoKey = 'Cost of sales not determined';
	}

  let acquiringCostReco = '';
	let acquiringCostRecoKey = '';
	if (acquiringCost === 'yes') {
		acquiringCostReco= 'No recommendation';
		acquiringCostRecoKey = 'Cos of sales has been determined.';
	} else {
		acquiringCostReco = 'Business Research Officer';
    acquiringCostRecoKey = 'Cost of sales not determined';
	}

  let cusRelationshipReco = '';
	let cusRelationshipRecoKey = '';
	if (customerRelationship === 'yes') {
		cusRelationshipReco= 'No recommendation';
		cusRelationshipRecoKey = 'Cost of customer retention not determined';
	} else {
		cusRelationshipReco = 'Business Research Officer';
    cusRelationshipRecoKey = 'Cost of customer retention not determined';
	}

  let marketSegmentsReco = '';
	let marketSegmentsRecoKey = '';
	if (marketSegments === 'yes') {
		marketSegmentsReco= 'No recommendation';
		marketSegmentsRecoKey = 'cost of market penetration has been determined.';
	} else {
		marketSegmentsReco = 'Business Research Officer';
    marketSegmentsRecoKey = 'Cost of market penetration not determined';
	}






	return (
		<div className="sell-con">
			<UserNavbar />
			<Container>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={12} md={4} lg={4}>
						<Typography>Company</Typography>
						<Button className="profAdd" variant="outlined">
							Add Company
						</Button>
						<div className="Accords">
							<div className="sideAccord">
								<Accordion>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls="panel1a-content"
										id="panel1a-header"
									>
										<Typography className="">No Name</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
											malesuada lacus ex, sit amet blandit leo lobortis eget.
										</Typography>
									</AccordionDetails>
								</Accordion>
							</div>
						</div>
					</Grid>
					<Grid item xs={12} sm={12} md={8} lg={8}>
						<Alert severity="info">Next Step! Complete your Company Assessment.</Alert>
						<Typography className="biz" variant="h5">
							Biz Assessment
						</Typography>
						<div className="companyBox">
							<img src={company} alt="comLogo" className="company" />
							<div className="companyInf">
								<div className="Location">
									<Typography>Location</Typography>
								</div>
								<div className="indust">
									<Typography>Industry</Typography>
								</div>
								<div className="phase">
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
									<Typography className="">Channels</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<div className="rev">
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
									<Typography className="">Customer segment</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<div className="cusSegmant-con">
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
														Do you have a designated Customer Researcher Specialist for
														this?
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
									<Typography className="">Market Intelligence</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<div className="rev">
										<div>
											<FormControl>
												<FormLabel id="demo-controlled-radio-buttons-group">
													Does the company conduct market research?
												</FormLabel>
												<RadioGroup
													aria-labelledby="demo-controlled-radio-buttons-group"
													name="controlled-radio-buttons-group"
													value={marketResearch}
													onChange={handleMarketResearch}
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
													value={marketPlaninPlace}
													onChange={handleMarketPlaninPlace}
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
													value={targetNetwork}
													onChange={handleTargetNetwork}
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
													value={postSales}
													onChange={handlePostSales}
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
									<Typography className="">Cost Structure</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<div className="rev">
										<div>
											<FormControl>
												<FormLabel id="demo-controlled-radio-buttons-group">
													Have the costs involved in delivering the key activities been
													determined?
												</FormLabel>
												<RadioGroup
													aria-labelledby="demo-controlled-radio-buttons-group"
													name="controlled-radio-buttons-group"
													value={deliveryCost}
													onChange={handleDeliveryCost}
												>
													<FormControlLabel value="yes" control={<Radio />} label="Yes" />
													<FormControlLabel value="no" control={<Radio />} label="No" />
												</RadioGroup>
											</FormControl>
										</div>

										<div>
											<FormControl>
												<FormLabel id="demo-controlled-radio-buttons-group">
													Have the costs involved in acquiring the key resources been
													determined?
												</FormLabel>
												<RadioGroup
													aria-labelledby="demo-controlled-radio-buttons-group"
													name="controlled-radio-buttons-group"
													value={acquiringCost}
													onChange={handleAcquiring}
												>
													<FormControlLabel value="yes" control={<Radio />} label="Yes" />
													<FormControlLabel value="no" control={<Radio />} label="No" />
												</RadioGroup>
											</FormControl>
										</div>

										<div>
											<FormControl>
												<FormLabel id="demo-controlled-radio-buttons-group">
													Do you know the costs involved in maintaining customer
													relationships?
												</FormLabel>
												<RadioGroup
													aria-labelledby="demo-controlled-radio-buttons-group"
													name="controlled-radio-buttons-group"
													value={customerRelationship}
													onChange={handleCustomerRelationship}
												>
													<FormControlLabel value="yes" control={<Radio />} label="Yes" />
													<FormControlLabel value="no" control={<Radio />} label="No" />
												</RadioGroup>
											</FormControl>
										</div>

										<div>
											<FormControl>
												<FormLabel id="demo-controlled-radio-buttons-group">
													Do you know the costs involved in determining and acquiring market
													segments?
												</FormLabel>
												<RadioGroup
													aria-labelledby="demo-controlled-radio-buttons-group"
													name="controlled-radio-buttons-group"
													value={marketSegments}
													onChange={handleMarketSegments}
												>
													<FormControlLabel value="yes" control={<Radio />} label="Yes" />
													<FormControlLabel value="no" control={<Radio />} label="No" />
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
			<div className='footCus'>
				<Footernew/>
			</div>
		</div>
	);
};
export default Customer;
