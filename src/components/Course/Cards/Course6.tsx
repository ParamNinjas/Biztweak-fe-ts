import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import img from '../PDFS/course6.jpg';
import pdf6 from '../../Course/PDFS/module6.pdf';


const btnClick = () => {
  console.log('Im here')
  window.open('./PDFS/course1.jpg')
}

const Course6 = () => {
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
          Module 6 - Business Process Management
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
          In this module, you will learn all about the documentation of the business process, evaluation of the business model, and 
necessary administrative considerations to operate that process successfully. Besides, you will get a comprehensive 
understanding of BPR, derivation management, and business communication as well.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      {pdf6 && (
          <a
            href={pdf6}
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

export default Course6;