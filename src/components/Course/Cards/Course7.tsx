import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import img from '../PDFS/course7.jpg';
import * as pdf7 from '../../Course/PDFS/module7.pdf';


const btnClick = () => {
  console.log('Im here')
  window.open('./PDFS/course1.jpg')
}

const Course7 = () => {
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
          Module 7 - Product Development
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
          In this module, you will learn what Saas is and how it facilitates any businesses. Besides, you will get an extensive 
understanding of investment in new product and service development and features necessary for a tech infrastructure 
that meant for your business to provide the core offerings. This module will conclude by explaining the benefits of 
selling products online and step by step procedures to set up an online shop both from scratch and existing platforms.

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      {pdf7 && (
          <a
            href={pdf7}
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

export default Course7;