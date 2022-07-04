import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import img from '../PDFS/course5.jpg';
import pdf5 from '../../Course/PDFS/module5.pdf';


const btnClick = () => {
  console.log('Im here')
  window.open('./PDFS/course1.jpg')
}

const Course5 = () => {
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
          Module 5 - Talent Management
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
          In this module, you will learn all about management commitment and product knowledge for both the owners and 
employees. Besides, you will get a comprehensive understanding of organizational structures, advantages, and 
disadvantages of different types of structure. Later on, you will know what employee satisfaction is, how it impacts 
business, what the ways are to improve employee satisfaction and skill levels to boost up sales
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      {pdf5 && (
          <a
            href={pdf5}
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

export default Course5;