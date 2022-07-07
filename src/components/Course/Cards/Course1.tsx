import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import img from '../PDFS/course1.jpg';
// import pdf1 from '../../Course/PDFS/module1.pdf';
import * as pdf1 from '../../Course/PDFS/module1.pdf';


const btnClick = () => {
  console.log('Im here')
  window.open('./PDFS/course1.jpg')
}

const Course1 = () => {
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
          Module 1 - Strategic Planning
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
            In this module, you will learn all about a business plan and
            different types of business strategies. Besides, you will get an
            extensive understanding of the questions you need to answer for value
            proposition and importance and techniques of customer relationship management.
            And will conclude by explaining the revenue models and streams.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {pdf1 && (
          <a
            href={pdf1}
            download='resume'
            target='_blank'
            rel='noreferrer'
          >
            <Button size="small" color="primary" >
              Download
            </Button>
          </a>
           )}
      </CardActions>
    </Card >
  );
}

export default Course1;