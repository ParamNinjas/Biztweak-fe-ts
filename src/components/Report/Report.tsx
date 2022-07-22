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
import { Link } from 'react-router-dom';
import NewBar from './BarChart';
import PChart from './PieChart';
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
  console.log("All User Reccom in state", AllRecomendations)
  const SelectedRecommendation = state?.persistedReducer?.RecomendationReducer?.selectedRecomendation ?? [];
  console.log("User selected recomm" , SelectedRecommendation)
  let reData = [] as any[]
  if (SelectedRecommendation?.segmentResponses != null){
    reData.push(SelectedRecommendation.segmentResponses)
    console.log("pushing ReData", SelectedRecommendation?.segmentResponses)
  }
  
  console.log("ReData list", reData)
  const objectToArray = (obj : any) => Object.assign([], Object.values(obj))
  console.log("object conversion" , reData)
  console.log("testing 123", SelectedRecommendation?.segmentResponses)

  let testData = [] as any[]
  if (SelectedRecommendation?.segmentResponses != null){
    testData  = Object.keys(SelectedRecommendation?.segmentResponses)
    console.log("testing 123", SelectedRecommendation?.segmentResponses)
  }
  

  useEffect(() => {
    _setSelectedRecomendation(AllRecomendations[0])
  });

  // Filtere outputs
  const filteredMark = SelectedRecommendation.segmentResponses?.Market && SelectedRecommendation.segmentResponses?.Market.filter((seg : any) => {
    return seg.value !== "No recommendation"
  }) 
  console.log("Market list", filteredMark)

  const filteredFin = SelectedRecommendation.segmentResponses?.Financial && SelectedRecommendation.segmentResponses?.Financial.filter((seg : any) => {
    return seg.value !== "No recommendation"
  }) 
  console.log("Market list", filteredFin)

  const filteredMarkInt = SelectedRecommendation.segmentResponses?.MarketInt && SelectedRecommendation.segmentResponses?.MarketInt.filter((seg : any) => {
    return seg.value !== "No recommendation"
  }) 
  console.log("Market list", filteredMarkInt)

  // const filteredEmp = SelectedRecommendation.segmentResponses && SelectedRecommendation.segmentResponses?.filter((seg : any) => {
  //   return seg.value !== "No recommendation"
  // }) 
  // console.log("Market list", filteredEmp)



  return (
    <div className='report-con'>
      <DashNav />
      <Container>
        <div className='report'>
        {/* <Button onClick={() => _setSelectedRecomendation(AllRecomendations[0])}>test</Button> */}
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
                <PChart />
              </div>
              <div className='bGraph'>
                {<NewBar />}
              </div>
             

              <div className='report-accord'>
              <Typography variant='h5'>Full Summary</Typography>
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
                          {reData && reData.map((x : any , index : number ) => {
                           
                        return (
                          <>
                          { Object.values(x).map((accord : any, index : number) => {
                             const filtered = accord && accord.filter((seg : any) => {
                              return seg.value == "No recommendation"
                          
                            })
                            const Empoylent = accord && accord.filter((seg : any) => {
                              return seg.value == "No recommendation"
                          
                            })
                           const total = accord?.length
                          const accordPercent = Math.floor(((filtered?.length * 100) / total ))
                    

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
                                    <div className='Header'>
                                      <div className='Header1'>
                                      <Typography>{testData[index]}</Typography>
                                      </div>
                                      <div className='Header2'>
                                      <Typography>{accordPercent}{"%"}</Typography>
                                      </div>
                                    </div>
                                    
                                    </AccordionSummary>
                                  <AccordionDetails>
                                  <div className='list'>
                                    {accord.map((list : any, index : number) => {
                                        const recoColor = list.value === "No recommendation" ? "#8FBC8B" : "#FBCEB1";
                                        
                                           return (
                                            <div className='divider' key={index}>
                                            <Accordion>
                                              <AccordionDetails style={{ backgroundColor: recoColor }}>
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
                              return seg.value == "No recommendation"
                          
                            })
                           const total = accord?.length
                           const accordPercent = Math.floor((filtered?.length * 100) / total )
                         
                          
                          

                              return (
                                <div key={index}>
                                  <Accordion>
                                  <AccordionSummary
                                      expandIcon={<ExpandMoreIcon />}
                                      aria-controls="panel1a-content"
                                      id="panel1a-header"
                                      className='repoAccord'
                                    >
                                      
                                      <div className='Header'>
                                        <div className='Header1'>
                                        <Typography>{testData[index]}</Typography>
                                        </div>
                                        <div className='Header2'>
                                        <Typography>{accordPercent}{"%"}</Typography>
                                        </div>
                                      </div>
                                      </AccordionSummary>
                                    <AccordionDetails>
                                    <div className='list'>
                                      {accord.map((list : any, index : number) => {
                                      
                                      const recoColor = list.value === "No recommendation" ? "#8FBC8B" : "#FBCEB1";
                                             return (
                                              <div className='divider' key={index}>
                                               
                                              <Accordion>
                                                <AccordionDetails style={{ backgroundColor: recoColor }}>
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
                            // }else{
                            //   return null
                            // }
                           
                          
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
                          {reData.map((x : any , index : number ) => {
                           
                        return (
                          <>
                          { Object.values(x).map((accord : any, index : number) => {
                             const filtered = accord && accord.filter((seg : any) => {
                              return seg.value == "No recommendation"
                          
                            })
                           const total = accord?.length
                           const accordPercent = Math.floor((filtered?.length * 100) / total )
                         
                          // if (accord)
                          
                            if(accordPercent >= 60 ){
                              return (
                                <div key={index}>
                                  <Accordion>
                                  <AccordionSummary
                                      expandIcon={<ExpandMoreIcon />}
                                      aria-controls="panel1a-content"
                                      id="panel1a-header"
                                      className='repoAccord'
                                    >
                                      
                                      <div className='Header'>
                                        <div className='Header1'>
                                        <Typography>{testData[index]}</Typography>
                                        </div>
                                        <div className='Header2'>
                                        <Typography>{accordPercent}{"%"}</Typography>
                                        </div>
                                      </div>
                                      </AccordionSummary>
                                    <AccordionDetails>
                                    <div className='list'>
                                      {accord.map((list : any, index : number) => {
                                      
                                      const recoColor = list.value === "No recommendation" ? "#8FBC8B" : "#FBCEB1";
                                             return (
                                              <div className='divider' key={index}>
                                               
                                              <Accordion>
                                                <AccordionDetails style={{ backgroundColor: recoColor }}>
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
                            }else{
                              return null
                            }
                           
                          
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
                        <Typography >Major Gaps</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                      <div className='list'>
                          {reData.map((x : any , index : number ) => {
                           
                        return (
                          <>
                          { Object.values(x).map((accord : any, index : number) => {
                             const filtered = accord && accord.filter((seg : any) => {
                              return seg.value == "No recommendation"
                          
                            })
                           const total = accord?.length
                           const accordPercent = Math.floor((filtered?.length * 100) / total )
                         
                          // if (accord)
                          
                            if(accordPercent < 60 ){
                              return (
                                <div key={index}>
                                  <Accordion>
                                  <AccordionSummary
                                      expandIcon={<ExpandMoreIcon />}
                                      aria-controls="panel1a-content"
                                      id="panel1a-header"
                                      className='repoAccord'
                                    >
                                      
                                      <div className='Header'>
                                        <div className='Header1'>
                                        <Typography>{testData[index]}</Typography>
                                        </div>
                                        <div className='Header2'>
                                        <Typography>{accordPercent}{"%"}</Typography>
                                        </div>
                                      </div>
                                      </AccordionSummary>
                                    <AccordionDetails>
                                    <div className='list'>
                                      {accord.map((list : any, index : number) => {
                                      
                                      const recoColor = list.value === "No recommendation" ? "#8FBC8B" : "#FBCEB1";
                                             return (
                                              <div className='divider' key={index}>
                                               
                                              <Accordion>
                                                <AccordionDetails style={{ backgroundColor: recoColor }}>
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
                            }else{
                              return null
                            }
                           
                          
                          })}
                          </>
                        )
                         
                       
                        } 
                        )
                      }
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
                        {/* <div className='list'>
                          {reData?.map(
                            (reco, index) => {
                              return (
                                <>
                                  <p>{reco.Market.value}</p>
                                  <Button onClick={() => _setSelectedRecomendation(AllRecomendations[index])}>test</Button>
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
                        <Typography >Marketing and Sales</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className='list'>
                          {filteredMark?.map(
                            (mark : any) => {
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
                          {filteredFin?.map(
                            (fin : any) => {
                              return (
                                <>
                                  <p>{fin.value}</p>
                                </>
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
                          {filteredMarkInt ?.map(
                            (reco : any) => {
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
                          </div>
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
                          <div className='list'>
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
          <Footernew />
        </div>
      </Container>
    </div>
  )


}

export default Report
