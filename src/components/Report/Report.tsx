import React, {useState, useEffect} from 'react';
import DashNav from '../DasNav/Nav';
import { Container, Grid , Button , Typography, Divider } from '@material-ui/core';
import banner from "../../Images/banner.png"
// import avatar from '../../Images/avatar.png'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Api } from '../../services/endpoints';
import { IRecomendation } from '../../Interfaces/IRecomendation';
import Bargraph from './Bar';
import { Link } from 'react-router-dom';
import Donut from './Donut';
import Footernew from '../Footer/Footernew';
import { supabase } from '../../supabaseClient';
import './Report.css'


const Report = () => {
  const [initialize, setInitialize] = useState(false)
  const user = supabase.auth.user()
    const recommendations : Array<IRecomendation> = [];
    const [allRecommendations, setAllRecommendations] = useState<IRecomendation[]>([]);
    const test = async () =>{
        const allRecommendations = await Api.GET_AllRecommendations()
        const result = allRecommendations.result? allRecommendations.result : [] as IRecomendation[];
        setAllRecommendations(result)
        setInitialize(true)
      }
    // console.log('Report ID', user?.id,)
    // const getReco = async () => {
    //   const { data, error } = await supabase
    //   .from('Recomendations')
    //   .select('*')
    //   .eq('Recomendations?.userId', 'user?.id')
    //   const recoData = data
    //   console.log("user data", recoData)
    // }
  

    useEffect(() => {
      test()
    //  getReco();
    });
      

      // Filtered Data
    
       const filtered = allRecommendations[0]?.segmentResponses.Customer && allRecommendations[0]?.segmentResponses.Customer.filter(seg => {
        return seg.value !== "No recommendation"
       
      }) 
      const filteredNeg = allRecommendations[0]?.segmentResponses.Customer && allRecommendations[0]?.segmentResponses.Customer.filter(seg => {
        return seg.value !== "No recommendation"
       
      })
      // typeof filteredResPos !== "undefined" ? filteredResPos.length : 0

      const cusPercentage = (((typeof filtered !== "undefined" ? filtered.length : 0) / (typeof filtered !== "undefined" ? filteredNeg.length : 0)  ) * 100)

      // console.log('filtered list Percentage', cusPercentage , '%')

      const filteredMark = allRecommendations[0]?.segmentResponses.Market && allRecommendations[0]?.segmentResponses.Market.filter(seg => {
        return seg.value !== "No recommendation"
       
      }) 
    //   console.log('filtered listm', filteredMark)

      const filteredVal = allRecommendations[0]?.segmentResponses.Value && allRecommendations[0]?.segmentResponses.Value.filter(seg => {
        return seg.value !== "No recommendation"
       
      }) 
    //   console.log('filtered listv', filteredVal)
    

    return(
        <div className='report-con'>
            <DashNav/>
            <Container>
                <div className='report'>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={3} lg={3}>
                        <div className='profileInfo'>
                                <Typography>Profile</Typography>
                                {/* <img
                                    src={avatar}
                                    alt='avimage'
                                    className='avImg'
                                    /> */}
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
                   <Typography variant='h3'>Report Summary</Typography>
                   <Typography>Company</Typography>
                    <div className='pChart'>
                        <Donut/>
                    </div>
                    <div className='bGraph'>
                        {<Bargraph/>}
                    </div>
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
                                        <div className='con'>
                                          <div className='cus'>
                                        <Accordion >
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        className='repoAccord'
                                        >
                                        <Typography >Customer Segment</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        
                                            <div className='list'>
                                        {allRecommendations.map(
                                          reco => {
                                            return (
                                                
                                                reco.segmentResponses.Customer && reco.segmentResponses.Customer.map(
                                                   cusList => {
                                                    const recoColor = cusList.value === "No recommendation" ? "#8FBC8B" : "#FBCEB1" ;
                                                       return (
                                                           <>
                                                           <li style={{backgroundColor : recoColor}}>{cusList.key}</li>
                                                           </>

                                                       )
                                                   } 
                                                )
                                                
                                            )
                                          }
                                        )}
                                        </div>
                                        </AccordionDetails>
                                    </Accordion >
                                    </div>
                                    <div className='Mark'>
                                    <Accordion >
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        className='repoAccord'
                                        >
                                        <Typography >Market</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div className='list'>
                                        {allRecommendations.map(
                                          reco => {
                                            return (
                                                
                                                reco.segmentResponses.Market && reco.segmentResponses.Market.map(
                                                   cusList => {
                                                    const recoColor = cusList.value === "No recommendation" ? "#8FBC8B" : "#FBCEB1" ;
                                                       return (
                                                           <>
                                                           <li style={{backgroundColor : recoColor}}>{cusList.key}</li>
                                                           </>

                                                       )
                                                   } 
                                                )
                                                
                                            )
                                          }
                                        )}
                                        </div>
                                        
                                        </AccordionDetails>
                                    </Accordion >
                                    </div>
                                    <div className='cus'>
                                        <Accordion >
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        className='repoAccord'
                                        >
                                        <Typography >Value Proposition</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        
                                            <div className='list'>
                                        {allRecommendations.map(
                                          reco => {
                                            return (
                                                
                                                reco.segmentResponses.Value && reco.segmentResponses.Value.map(
                                                   cusList => {
                                                    const recoColor = cusList.value === "No recommendation" ? "#8FBC8B" : "#FBCEB1" ;
                                                       return (
                                                           <>
                                                           <li style={{backgroundColor : recoColor}}>{cusList.key}</li>
                                                           </>

                                                       )
                                                   } 
                                                )
                                                
                                            )
                                          }
                                        )}
                                        </div>
                                        </AccordionDetails>
                                    </Accordion >
                                    </div>
                                    <div className='cus'>
                                        <Accordion >
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        className='repoAccord'
                                        >
                                        <Typography >Key Resources</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        
                                            <div className='list'>
                                        {allRecommendations.map(
                                          reco => {
                                            return (
                                                
                                                reco.segmentResponses.Resources && reco.segmentResponses.Resources.map(
                                                   cusList => {
                                                    const recoColor = cusList.value === "No recommendation" ? "#8FBC8B" : "#FBCEB1" ;
                                                       return (
                                                           <>
                                                           <li style={{backgroundColor : recoColor}}>{cusList.key}</li>
                                                           </>

                                                       )
                                                   } 
                                                )
                                                
                                            )
                                          }
                                        )}
                                        </div>
                                        </AccordionDetails>
                                    </Accordion >
                                    </div>
                                    <div className='cus'>
                                        <Accordion >
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        className='repoAccord'
                                        >
                                        <Typography >Key Activities</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        
                                            <div className='list'>
                                        {allRecommendations.map(
                                          reco => {
                                            return (
                                                
                                                reco.segmentResponses.Activities && reco.segmentResponses.Activities.map(
                                                   cusList => {
                                                    const recoColor = cusList.value === "No recommendation" ? "#8FBC8B" : "#FBCEB1" ;
                                                       return (
                                                           <>
                                                           <li style={{backgroundColor : recoColor}}>{cusList.key}</li>
                                                           </>

                                                       )
                                                   } 
                                                )
                                                
                                            )
                                          }
                                        )}
                                        </div>
                                        </AccordionDetails>
                                    </Accordion >
                                    </div>
                                    </div>
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
                                        <div className='list'>
                                        {allRecommendations.map(
                                          reco => {
                                            return (
                                                
                                                reco.segmentResponses.Market && reco.segmentResponses.Market.map(
                                                   markList => {
                                                    const recoColor = markList.value === "No recommendation" ? "#8FBC8B" : "#FBCEB1" ;
                                                       return (
                                                           <>
                                                           <li style={{backgroundColor: recoColor}}>{markList.key}</li>
                                                           </>

                                                       )
                                                   } 
                                                )
                                                
                                            )
                                          }
                                        )}
                                        </div>
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
                                        <div className='list'>
                                        {allRecommendations.map(
                                          reco => {
                                            return (
                                                
                                                reco.segmentResponses.Customer && reco.segmentResponses.Customer.map(
                                                   cusList => {
                                                    const recoColor = cusList.value === "No recommendation" ? "#8FBC8B" : "#FBCEB1" ;
                                                       return (
                                                           <>
                                                           <li style={{backgroundColor: recoColor}}>{cusList.key}</li>
                                                           </>

                                                       )
                                                   } 
                                                )
                                                
                                            )
                                          }
                                        )}
                                        </div>
                                        </AccordionDetails>
                                    </Accordion>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                
                                        {/* <Accordion > 
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
                                        <div className='list'>
                                        {allRecommendations.map(
                                          reco => {
                                            return (
                                                
                                                reco.segmentResponses.Market &&  reco.segmentResponses.Market.map(
                                                   markList => {
                                                    const recoColor = markList.value === "No recommendation" ? "#8FBC8B" : "#FBCEB1" ;
                                                       return (
                                                           <>
                                                           
                                                           <li style={{color : recoColor}}>{markList.key}</li>
                                                           </>

                                                       )
                                                   } 
                                                )
                                                
                                            )
                                          }
                                        )}
                                        </div>
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
                                    </Accordion> */}

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
                                        <div className='list'>
                                        {filtered?.map(
                                          reco => {
                                            return (       
                                            <>
                                            <p>{reco.value}</p>
                                            </>     
                                            )
                                          }
                                        )}
                                        </div>
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
                                        <div className='list'>
                                          {filteredMark?.map(
                                          mark => {
                                            return (       
                                            <>
                                            <p>{mark.value}</p>
                                            </>     
                                            )
                                          }
                                        )}
                                        </div>
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
                                        <div className='list'>
                                        {filteredVal?.map(
                                          val => {
                                            return (       
                                            <>
                                            <p>{val.value}</p>
                                            </>     
                                            )
                                          }
                                        )}
                                        </div>
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
                                        <div className='list'>
                                        {allRecommendations.map(
                                          reco => {
                                            return (
                                                
                                                reco.segmentResponses.Resources && reco.segmentResponses.Resources.map(
                                                   resList => {
                                                       return (
                                                           <>
                                                           <li>{resList.value}</li>
                                                           </>

                                                       )
                                                   } 
                                                )
                                                
                                            )
                                          }
                                        )}
                                        </div>
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
                                        <div className='list'>
                                        {filtered?.map(
                                          reco => {
                                            return (       
                                            <>
                                            <p>{reco.value}</p>
                                            </>     
                                            )
                                          }
                                        )}
                                        </div>
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
                                        <div className='list'>
                                        {allRecommendations.map(
                                          reco => {
                                            return (
                                                
                                                reco.segmentResponses.Resources && reco.segmentResponses.Resources.map(
                                                   resList => {
                                                       return (
                                                           <>
                                                           <li>{resList.value}</li>
                                                           </>

                                                       )
                                                   } 
                                                )
                                                
                                            )
                                          }
                                        )}
                                        </div>
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
                                        <div className='list'>
                                        {allRecommendations.map(
                                          reco => {
                                            return (
                                                
                                                reco.segmentResponses.Activities &&  reco.segmentResponses.Activities.map(
                                                   actList => {
                                                       return (
                                                           <>
                                                           <li>{actList.value}</li>
                                                           </>

                                                       )
                                                   } 
                                                )
                                                
                                            )
                                          }
                                        )}
                                        </div>
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    
                                    </Grid>
                            </Grid>
                            {/* <Button
                            variant='outlined'
                             onClick={() => getReco()}
                            >
                                Get
                            </Button> */}
                            <Button
                            variant='outlined'
                            >
                                <Link to='/Profile'>Next</Link>
                            </Button>
                      

                    </div>    
                        </Grid>
                    </Grid>
                   

                </div>
                <div className='foot'>
                  <Footernew/>
                </div>
            </Container>
        </div>
    )


}

export default Report