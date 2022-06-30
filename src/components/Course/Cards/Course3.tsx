import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import img from '../PDFS/course3.jpg';
import pdf3 from '../../Course/PDFS/module3.pdf';


const btnClick = () => {
  console.log('Im here')
  window.open('./PDFS/course1.jpg')
}

const Course3 = () => {
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
          Module 3 - Marketing and Sales
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
          In this module, you will learn all about social media marketing, sales and marketing plan, and product pricing strategies. 
Besides, you will get a comprehensive understanding of sales funnel, customer acquisition plan, and essential traits 
of a sales personnel
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      {pdf3 && (
          <a
            href={pdf3}
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

export default Course3;