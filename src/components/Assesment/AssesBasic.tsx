import React from 'react';
import { Container, Grid , Button } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Radio from '@material-ui/core/Radio';
import MuiAlert from '@material-ui/lab/Alert';
import UserNavbar from '../UserNav/UserNav';
import company from '../../Images/company.png'
import './Assessment.css'


const AssessBasic = () => {
    function Alert(props : any) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
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
          <div className='q1'>
            <Typography>
            1.  Do you know who your product is for?
            </Typography>
            <div className='radio1'>
              <Typography>Yes</Typography>
                <Radio
                  // checked={selectedValue === 'a'}
                  // onChange={handleChange}
                  value="a"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'A' }}
                />
                <Typography>No</Typography>
                <Radio
                  // checked={selectedValue === 'b'}
                  // onChange={handleChange}
                  value="b"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'B' }}
                />
            </div>
          </div>
          <div className='q2'>
            <Typography>
            2. Do you know who is your target market/audience?
            </Typography>
            <div className='radio2'>
              <Typography>Yes</Typography>
                <Radio
                  // checked={selectedValue === 'c'}
                  // onChange={handleChange}
                  value="c"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'A' }}
                />
                <Typography>No</Typography>
                <Radio
                  // checked={selectedValue === 'd'}
                  // onChange={handleChange}
                  value="d"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'B' }}
                />
            </div>
          </div>
          <div className='q1'>
            <Typography>
              3. Do you know where they are located?
            </Typography>
            <div className='radio1'>
              <Typography>Yes</Typography>
                <Radio
                  // checked={selectedValue === 'a'}
                  // onChange={handleChange}
                  value="a"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'A' }}
                />
                <Typography>No</Typography>
                <Radio
                  // checked={selectedValue === 'b'}
                  // onChange={handleChange}
                  value="b"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'B' }}
                />
            </div>
          </div>
          <div className='q2'>
            <Typography>
              4. Do you know the Total market size?
            </Typography>
            <div className='radio2'>
              <Typography>Yes</Typography>
                <Radio
                  // checked={selectedValue === 'c'}
                  // onChange={handleChange}
                  value="c"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'A' }}
                />
                <Typography>No</Typography>
                <Radio
                  // checked={selectedValue === 'd'}
                  // onChange={handleChange}
                  value="d"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'B' }}
                />
            </div>
          </div>
          <div className='q1'>
            <Typography>
              5. Do you know how you are going to reach your customer?
            </Typography>
            <div className='radio1'>
              <Typography>Yes</Typography>
                <Radio
                  // checked={selectedValue === 'a'}
                  // onChange={handleChange}
                  value="a"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'A' }}
                />
                <Typography>No</Typography>
                <Radio
                  // checked={selectedValue === 'b'}
                  // onChange={handleChange}
                  value="b"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'B' }}
                />
            </div>
          </div>
          <div className='q2'>
            <Typography>
              6. Has the company actively identified a competitor in the market?
            </Typography>
            <div className='radio2'>
              <Typography>Yes</Typography>
                <Radio
                  // checked={selectedValue === 'c'}
                  // onChange={handleChange}
                  value="c"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'A' }}
                />
                <Typography>No</Typography>
                <Radio
                  // checked={selectedValue === 'd'}
                  // onChange={handleChange}
                  value="d"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'B' }}
                />
            </div>
          </div>
          <div className='q3'>
            <Typography>
              7. Do you know how much of your market is accessible?
            </Typography>
            <div className='radio1'>
              <Typography>Yes</Typography>
                <Radio
                  // checked={selectedValue === 'a'}
                  // onChange={handleChange}
                  value="a"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'A' }}
                />
                <Typography>No</Typography>
                <Radio
                  // checked={selectedValue === 'b'}
                  // onChange={handleChange}
                  value="b"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'B' }}
                />
            </div>
          </div>
          <div className='q2'>
            <Typography>
              8. Do you know how much of your market is in your region/locality?
            </Typography>
            <div className='radio2'>
              <Typography>Yes</Typography>
                <Radio
                  // checked={selectedValue === 'c'}
                  // onChange={handleChange}
                  value="c"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'A' }}
                />
                <Typography>No</Typography>
                <Radio
                  // checked={selectedValue === 'd'}
                  // onChange={handleChange}
                  value="d"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'B' }}
                />
            </div>
          </div>
          <div className='q3'>
            <Typography>
              9. Do you have a profile for your ideal customer?
            </Typography>
            <div className='radio1'>
              <Typography>Yes</Typography>
                <Radio
                  // checked={selectedValue === 'a'}
                  // onChange={handleChange}
                  value="a"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'A' }}
                />
                <Typography>No</Typography>
                <Radio
                  // checked={selectedValue === 'b'}
                  // onChange={handleChange}
                  value="b"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'B' }}
                />
            </div>
          </div>
          <div className='q2'>
            <Typography>
              10. Do you know who your most important customers are?
            </Typography>
            <div className='radio2'>
              <Typography>Yes</Typography>
                <Radio
                  // checked={selectedValue === 'c'}
                  // onChange={handleChange}
                  value="c"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'A' }}
                />
                <Typography>No</Typography>
                <Radio
                  // checked={selectedValue === 'd'}
                  // onChange={handleChange}
                  value="d"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'B' }}
                />
            </div>
          </div>
          <div className='q2'>
            <Typography>
              11. Do you have a designated Customer Researcher Specialist for this?
            </Typography>
            <div className='radio2'>
              <Typography>Yes</Typography>
                <Radio
                  // checked={selectedValue === 'c'}
                  // onChange={handleChange}
                  value="c"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'A' }}
                />
                <Typography>No</Typography>
                <Radio
                  // checked={selectedValue === 'd'}
                  // onChange={handleChange}
                  value="d"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'B' }}
                />
            </div>
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
          <Typography>
            Does the company advertise?
          </Typography>
            <div className='radio2'>
            
              <Typography>Yes</Typography>
                <Radio
                  // checked={selectedValue === 'c'}
                  // onChange={handleChange}
                  value="c"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'A' }}
                />
                <Typography>No</Typography>
                <Radio
                  // checked={selectedValue === 'd'}
                  // onChange={handleChange}
                  value="d"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'B' }}
                />
        </div>
        <Typography>
            Is the company’s advertising effective?
          </Typography>
            <div className='radio2'>
            
              <Typography>Yes</Typography>
                <Radio
                  // checked={selectedValue === 'c'}
                  // onChange={handleChange}
                  value="c"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'A' }}
                />
                <Typography>No</Typography>
                <Radio
                  // checked={selectedValue === 'd'}
                  // onChange={handleChange}
                  value="d"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'B' }}
                />
        </div>
          <Typography>
          Does the company conduct sales planning and developed targets?
          </Typography>
            <div className='radio2'>
            
              <Typography>Yes</Typography>
                <Radio
                  // checked={selectedValue === 'c'}
                  // onChange={handleChange}
                  value="c"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'A' }}
                />
                <Typography>No</Typography>
                <Radio
                  // checked={selectedValue === 'd'}
                  // onChange={handleChange}
                  value="d"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'B' }}
                />
        </div>
        <Typography>
            Do you have a price strategy in place?
          </Typography>
            <div className='radio2'>
            
              <Typography>Yes</Typography>
                <Radio
                  // checked={selectedValue === 'c'}
                  // onChange={handleChange}
                  value="c"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'A' }}
                />
                <Typography>No</Typography>
                <Radio
                  // checked={selectedValue === 'd'}
                  // onChange={handleChange}
                  value="d"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'B' }}
                />
        </div>
        <Typography>
            Do you review your pricing strategy often?
          </Typography>
            <div className='radio2'>
            
              <Typography>Yes</Typography>
                <Radio
                  // checked={selectedValue === 'c'}
                  // onChange={handleChange}
                  value="c"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'A' }}
                />
                <Typography>No</Typography>
                <Radio
                  // checked={selectedValue === 'd'}
                  // onChange={handleChange}
                  value="d"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'B' }}
                />
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
        <Typography>
            Do you know the problem you are solving?
          </Typography>
            <div className='radio2'>
            
              <Typography>Yes</Typography>
                <Radio
                  // checked={selectedValue === 'c'}
                  // onChange={handleChange}
                  value="c"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'A' }}
                />
                <Typography>No</Typography>
                <Radio
                  // checked={selectedValue === 'd'}
                  // onChange={handleChange}
                  value="d"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'B' }}
                />
        </div>
        <Typography>
           Do you know what value you deliver to the customer?
          </Typography>
            <div className='radio2'>
            
              <Typography>Yes</Typography>
                <Radio
                  // checked={selectedValue === 'c'}
                  // onChange={handleChange}
                  value="c"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'A' }}
                />
                <Typography>No</Typography>
                <Radio
                  // checked={selectedValue === 'd'}
                  // onChange={handleChange}
                  value="d"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'B' }}
                />
        </div>
        <Typography>
            Are you aware of which customer needs you are satisfying?
          </Typography>
            <div className='radio2'>
            
              <Typography>Yes</Typography>
                <Radio
                  // checked={selectedValue === 'c'}
                  // onChange={handleChange}
                  value="c"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'A' }}
                />
                <Typography>No</Typography>
                <Radio
                  // checked={selectedValue === 'd'}
                  // onChange={handleChange}
                  value="d"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'B' }}
                />
        </div>
        <Typography>
            Can you describe the uniqueness of your product, and show key differences from existing alternatives?
          </Typography>
            <div className='radio2'>
            
              <Typography>Yes</Typography>
                <Radio
                  // checked={selectedValue === 'c'}
                  // onChange={handleChange}
                  value="c"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'A' }}
                />
                <Typography>No</Typography>
                <Radio
                  // checked={selectedValue === 'd'}
                  // onChange={handleChange}
                  value="d"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'B' }}
                />
        </div>
        <Typography>
            Do you have an elevator pitch?
          </Typography>
            <div className='radio2'>
            
              <Typography>Yes</Typography>
                <Radio
                  // checked={selectedValue === 'c'}
                  // onChange={handleChange}
                  value="c"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'A' }}
                />
                <Typography>No</Typography>
                <Radio
                  // checked={selectedValue === 'd'}
                  // onChange={handleChange}
                  value="d"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'B' }}
                />
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
            <Typography>
              1. Do you know the most important things you need to do to make your business model work?
            </Typography>
              <div className='radio2'>
              
                <Typography>Yes</Typography>
                  <Radio
                    // checked={selectedValue === 'c'}
                    // onChange={handleChange}
                    value="c"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'A' }}
                  />
                  <Typography>No</Typography>
                  <Radio
                    // checked={selectedValue === 'd'}
                    // onChange={handleChange}
                    value="d"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'B' }}
                  />
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
            <Typography>
              1. Do you know what infrastructure and resources you need in order to deliver the key activities?
            </Typography>
              <div className='radio2'>
              
                <Typography>Yes</Typography>
                  <Radio
                    // checked={selectedValue === 'c'}
                    // onChange={handleChange}
                    value="c"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'A' }}
                  />
                  <Typography>No</Typography>
                  <Radio
                    // checked={selectedValue === 'd'}
                    // onChange={handleChange}
                    value="d"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'B' }}
                  />
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

export default AssessBasic