import React from 'react';
import { Container, Grid , Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Radio from '@material-ui/core/Radio';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import UserNavbar from '../UserNav/UserNav';
import company from '../../Images/company.png'
import './Assessment.css'


// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular,
//   },
// }));




const AssesSell = () => {
  // const [selectedValue, setSelectedValue] = React.useState('a');

  // const handleChange = (event) => {
  //   setSelectedValue(event.target.value);
  // };
  function Alert(props : any) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

    return (
      <div className='sell-con'>
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
            {/* <div className='sideAccord2'>
              <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className=''>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className='sideAccord3'>
              <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className=''>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
              </Accordion>
            </div> */}
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
           </div>
           <div className='sell'>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className=''>Prototype</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className='cusSegmant-con'>
          <div className='q1'>
            <Typography>
              1.Do you have a prototype of the solution you are suggesting?
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
              2.Do you have the skills required to develop a prototype of the solution?
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
          <Typography className=''>Revenue Streams</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className='rev'>
          <Typography>
            1. How are you generating revenue from each customer segment?
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
            2. Do you know the value that your customers are willing to pay for?
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
            3.Do you know how your customers are currently paying?
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
            4. Do you know how your customers prefer to pay?
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
            5. Do you have a designated employee appointed for this?
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
            1. Do you know the problem you are solving?
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
           2. Do you know what value you deliver to the customer?
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
            3. Are you aware of which customer needs you are satisfying?
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
            4. Can you describe the uniqueness of your product, and show key differences from existing alternatives?
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
            5. Do you have an elevator pitch?
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
          <Typography className=''>Cost Structure</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <div className='cost'>
         <Typography>
            1. Have the costs involved in delivering the key activities been determined?
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
            2. Have the costs involved in acquiring the key resources been determined?
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
            3. Do you know the costs involved in maintaining customer relationships?
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
            4. Do you know the costs involved in determining and acquiring market segments
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
            <Typography className=''>Proof of Concept</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className='proof'>
            <Typography>
              1.Have you conducted a process of proving that your target audience is willing to pay for your service/product, at the price you want?
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
              2. Do you need help with proof of concept?
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
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className=''>Customer relations</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className='customerR'>
            <Typography>
              1. Do you know the types of relationships you need to establish with your customer segments?
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
              2. Do you have a process for retaining your customer base?
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
              3. Do you have a system in place for growing your customer base?
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
              4. Do you have a process for getting your customer base?
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
              5. Do you have a designated Customer Researcher Specialist for this?
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
            <Typography className=''>Channels</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <div className='channels'>
          <Typography>
              1. Do you know how you are going to reach your customers?
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
              2. Do you have a marketing plan in place?
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
              3. Have you developed a network to reach your target audience?
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
              4. Do you provide post-sales customer support?
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
              5. Do you have a designated employee appointed for this?
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
            <Typography className=''>e-Commerce</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <div className='commerce'>
          <Typography>
              1. Can your company sell products/services online?
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
              2. Does your company sell online?
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
              3.  Do you know how to set up an online shop?
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
              4. Do you know how to set up an online presence for your business?
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
              5. Do you have an experienced and knowlegeable person dedicated to e-Commerce in your business?
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
            <Typography className=''>Current Alternatives</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <div className='Current'>
          <Typography>
              1. Do you know how the problem you are solving is currently being addressed?
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
              2. Do you know who are the people currently solving this problem?
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
            <Typography className=''>Key Partners</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className='keyP'>
            <Typography>
              1. Do you know what strategic partnerships the company needs to form, to increase the scalability and efficiency of the business?
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
          </div>Do you have a Memorandum of Understanding in place?
          <Typography>
              2. Have you determined how each partnership will help the business?
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
              3. Do you have a specific person appointed to develop strategic partnerships?
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
            <Typography className=''>Traction</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className='traction'>
            <Typography>
              1. Do you have paying customers?
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
              2. Do you have letters of intent/interest?
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
              3. Do you have a Memorandum of Understanding in place?
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
            <Typography className=''>Unique Selling Point</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className='unique'>
            <Typography>
              1. Is there a special thing, attribute or characteristic that your competitors are not able to copy or obtain?
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
              2. Do you know the company's product or service differentiation
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
                  >
                  Save
                  </Button>       
                  </div>
           </Grid>
         </Grid>
        </Container>
      </div>
      );
      
    
}

export default AssesSell