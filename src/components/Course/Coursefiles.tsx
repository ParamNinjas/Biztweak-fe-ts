import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Button } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import Course1 from './Cards/Course1';
import Course2 from './Cards/Course2';
import Course3 from './Cards/Course3';
import Course4 from './Cards/Course4';
import Course5 from './Cards/Course5';
import Course6 from './Cards/Course6';
import Course7 from './Cards/Course7';
import Course8 from './Cards/Course8';


// import Thumbnail from './Thumbnail'


const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const onDownload = () => {
  const link = document.createElement("a");
  link.download = `module1-strategicplanning.pdf`;
  link.href = "./PDFS/module1-strategicplanning.pdf";
  link.click();
};

export default function Coursefiles() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
       <div>
    <h1 className='bizness'>My Courses</h1>
    </div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Module 1: Strategic Planning </Typography>
        </AccordionSummary>
        <AccordionDetails>
         <Course1/>
   
        </AccordionDetails>
      
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Module 2 : Market Intelligence</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <Course2/>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Module 3 : Marketing and Sales</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Course3/>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Module 4 : Financial Management</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Course4/>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>Module 5 : Talent Management</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <Course5/>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>Module 6 : Business Process Management</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <Course6/>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography>Module 7 : Product Development</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <Course7/>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography>Module 8 : Legal</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Course8/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
