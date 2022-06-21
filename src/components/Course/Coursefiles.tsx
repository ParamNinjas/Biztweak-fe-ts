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
  link.download = `download.txt`;
  link.href = "./download.txt";
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
          <Typography>
          In this module, you will learn all about a business plan and different types of business strategies. Besides, you will get 
an extensive understanding of the questions you need to answer for value proposition and importance and techniques 
of customer relationship management. And will conclude by explaining the revenue models and streams.
          </Typography>
          <Button onClick={onDownload} variant="contained" color="primary" size="small">
      Download
    </Button>
        </AccordionDetails>
      
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Module 2 : Market Intelligence</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In this module, you will learn what market research is and why it is so important for any businesses. Besides, you will 
get an extensive understanding of how market segmentation works, how to conduct competitor analysis and steps to 
create ideal customer profile. By the end of this module, you will get to learn how to figure out a unique selling point, 
what is a competitive advantage and how to sort out best WTP for your business as well.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Module 3 : Marketing and Sales</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In this module, you will learn all about social media marketing, sales and marketing plan, and product pricing strategies. 
Besides, you will get a comprehensive understanding of sales funnel, customer acquisition plan, and essential traits 
of a sales personnel.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Module 4 : Financial Management</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In this module, you will learn to what extent budgeting and forecasting differs from one another. Besides, you will get 
an extensive understanding of reconciliations, cash flow management, balance sheet. By the end of this module, you 
will get to learn pricing and costing methods.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>Module 5 : Talent Management</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In this module, you will learn all about management commitment and product knowledge for both the owners and 
employees. Besides, you will get a comprehensive understanding of organizational structures, advantages, and 
disadvantages of different types of structure. Later on, you will know what employee satisfaction is, how it impacts 
business, what the ways are to improve employee satisfaction and skill levels to boost up sales.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>Module 6 : Business Process Management</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In this module, you will learn all about the documentation of the business process, evaluation of the business model, and 
necessary administrative considerations to operate that process successfully. Besides, you will get a comprehensive 
understanding of BPR, derivation management, and business communication as well.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography>Module 7 : Product Development</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In this module, you will learn what Saas is and how it facilitates any businesses. Besides, you will get an extensive 
understanding of investment in new product and service development and features necessary for a tech infrastructure 
that meant for your business to provide the core offerings. This module will conclude by explaining the benefits of 
selling products online and step by step procedures to set up an online shop both from scratch and existing platforms.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography>Module 8 : Legal</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In this module, you will learn to what laws ranging from company law to finance law.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
