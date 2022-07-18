import React, { useState, useEffect } from 'react';
import DashNav from '../DasNav/Nav';
import { Container, Grid, Button, Typography, Divider } from '@material-ui/core';
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
import { useDispatch, useSelector } from "react-redux";
import { selectRecomendationState, setAllUserRecomendations, setSelectedRecomendation } from "../../Slice/createSlice";
import './Report.css'


const Report = () => {
  // const { Recomendations } = useSelector(state=>state)
  const dispatch = useDispatch();

  const [initialize, setInitialize] = useState(false)
  const user = supabase.auth.user()
  const recommendations: Array<IRecomendation> = [];
  const [allRecommendations, setAllRecommendations] = useState<IRecomendation[]>([]);
  useEffect(() => {
    !initialize &&
      getReco();
  });

  const getReco = async () => {
    const user = supabase.auth.user()

    const activeUser =  user?.id
    setInitialize(true)
    const { data, error } = await supabase
      .from('Recomendations')
      .select('*')
      .eq('userId', activeUser)
    const recoData = data
    dispatch(setAllUserRecomendations(recoData))

  }

  const state = useSelector(selectRecomendationState)


  const _setSelectedRecomendation = (selected: any) => {
    dispatch(setSelectedRecomendation(selected))

  }






  const AllRecomendations = state?.persistedReducer?.RecomendationReducer?.allUserRecomendations ?? [];
  // console.log("All User Reccom in state", AllRecomendations)
  const SelectedRecommendation = state?.persistedReducer?.RecomendationReducer?.selectedRecomendation ?? [];
  // console.log("User selected recomm" , SelectedRecommendation)
  const reData  = []
  reData.push(SelectedRecommendation.segmentResponses)
  console.log("ReData list", reData)
  const objectToArray = (obj : any) => Object.assign([], Object.values(obj))
  // console.log("object conversion" , reData)
  const testData = Object.keys(SelectedRecommendation?.segmentResponses)
  console.log("testing 123", testData)

  useEffect(() => {
    _setSelectedRecomendation(AllRecomendations[0])
  });


  return (
    <div className='report-con'>
      <DashNav />
      <Container>
        <div className='report'>
          <Button onClick={() => _setSelectedRecomendation(AllRecomendations[0])}>test</Button>
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
                <Divider />
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
                <Donut />
              </div>
              <div className='bGraph'>
                {<Bargraph />}
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
                        
                        <Typography>Business Concept</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <div className='list'>
                          {reData.map((x : any , index : number ) => {
                           
                        return (
                          <>
                          { Object.values(x).map((accord : any, index : number) => {
                             const filtered = accord && accord.filter((seg : any) => {
                              return seg.value !== "No recommendation"
                          
                            })
                           const total = accord?.length
                          const accordPercent = ((filtered?.length / total) * 100)
                            console.log("accord", accordPercent)
                            return (
                              <div key={index}>
                                <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    className='repoAccord'
                                  >
                                    
                                     <Typography>{testData[index]}  {accordPercent}{"%"}</Typography>
                                    </AccordionSummary>
                                  <AccordionDetails>
                                  <div className='list'>
                                    {accord.map((list : any, index : number) => {
                                      
                                           return (
                                            <div className='divider' key={index}>
                                            <Accordion>
                                              <AccordionDetails>
                                                {list.key}
                                              </AccordionDetails>
                                            </Accordion>
                                            </div>
                                          )
                                    })}
                                    </div>
                                  </AccordionDetails>
                                </Accordion>
                                </div>
                              )
                          
                          })}
                          </>
                        )
                         
                       
                        } 
                        )
                      }
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
                      <div className='list'>
                          {reData.map((x : any , index : number ) => {
                           
                        return (
                          <>
                          { Object.values(x).map((accord : any, index : number) => {
                             const filtered = accord && accord.filter((seg : any) => {
                              return seg.value !== "No recommendation"
                          
                            })
                           const total = accord?.length
                          const accordPercent = ((filtered?.length / total) * 100)
                            console.log("accord", filtered)
                            return (
                              <div key={index}>
                                <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    className='repoAccord'
                                  >
                                    
                                     <Typography>{testData[index]}  {accordPercent}{"%"}</Typography>
                                    </AccordionSummary>
                                  <AccordionDetails>
                                  <div className='list'>
                                    {accord.map((list : any, index : number) => {
                                    //   const filteredList = list && list?.filter((seg : any) => {
                                    //     return seg.value !== "No recommendation"
                                    
                                    //   })
                                    //  const total = list?.length
                                    // const accordPercent = ((filteredList?.length / total) * 100)
                                    //   console.log("Filtered", filteredList)
                                           return (
                                            <div className='divider' key={index}>
                                            <Accordion>
                                              <AccordionDetails>
                                                {list.key}
                                              </AccordionDetails>
                                            </Accordion>
                                            </div>
                                          )
                                    })}
                                    </div>
                                  </AccordionDetails>
                                </Accordion>
                                </div>
                              )
                          
                          })}
                          </>
                        )
                         
                       
                        } 
                        )
                      }
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
                        <Typography >Best Performing Areas</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className='list'>
                          {allRecommendations.map(
                            reco => {
                              return (

                                reco.segmentResponses.Market && reco.segmentResponses.Market.map(
                                  markList => {
                                    const recoColor = markList.value === "No recommendation" ? "#8FBC8B" : "#FBCEB1";
                                    return (
                                      <>
                                        <li style={{ backgroundColor: recoColor }}>{markList.key}</li>
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
                                    const recoColor = cusList.value === "No recommendation" ? "#8FBC8B" : "#FBCEB1";
                                    return (
                                      <>
                                        <li style={{ backgroundColor: recoColor }}>{cusList.key}</li>
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
                          {reData?.map(
                            reco => {
                              return (
                                <>
                                  <p>{reco.Market.value}</p>
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
                          {reData?.map(
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
                        {/* <div className='list'>
                          {ReData?.map(
                            val => {
                              return (
                                <>
                                  <p>{val.value}</p>
                                </>
                              )
                            }
                          )}
                        </div> */}
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
                        {/* <div className='list'>
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
                        </div> */}
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
                        {/* <div className='list'>
                          {filtered?.map(
                            reco => {
                              return (
                                <>
                                  <p>{reco.value}</p>
                                </>
                              )
                            }
                          )}
                        </div> */}
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
                        {/* <div className='list'>
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
                        </div> */}
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
                          {/* <div className='list'>
                            {allRecommendations.map(
                              reco => {
                                return (

                                  reco.segmentResponses.Activities && reco.segmentResponses.Activities.map(
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
                          </div> */}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Typography >Employment Opportunities</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          {/* <div className='list'>
                            {allRecommendations.map(
                              reco => {
                                return (

                                  reco.segmentResponses.Activities && reco.segmentResponses.Activities.map(
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
                          </div> */}
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
          <Footernew />
        </div>
      </Container>
    </div>
  )


}

export default Report