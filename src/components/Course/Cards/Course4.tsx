import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import img from '../PDFS/course4.jpg';
import pdf4 from '../../Course/PDFS/module4.pdf';


const btnClick = () => {
  console.log('Im here')
  window.open('./PDFS/course1.jpg')
}

const Course4 = () => {
  return (
    <Card sx={{ maxWidth: 375 }}>
    <CardActionArea>
    <CardMedia
        component="img"
        height="auto"
        width="90"
        image={img}
        alt="course 1"
      />
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="div">
          Module 4 - Financial Management
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
          In this module, you will learn to what extent budgeting and forecasting differs from one another. Besides, you will get 
an extensive understanding of reconciliations, cash flow management, balance sheet. By the end of this module, you 
will get to learn pricing and costing methods. Let’s get started.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      {pdf4 && (
          <a
            href={pdf4}
            download='resume'
            target='_blank'
            rel='noreferrer'
          >
            <Button size="small" color="primary" >
              Download
            </Button>
          </a>
          
        // <Button size="small" color="primary" onClick={btnClick.bind(this)} >
        //   Download
        // </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default Course4;