import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import img from '../PDFS/course8.jpg';
import pdf8 from '../../Course/PDFS/module8.pdf';


const btnClick = () => {
  console.log('Im here')
  window.open('./PDFS/course1.jpg')
}

const Course8 = () => {
  return (
    <Card sx={{ maxWidth: 375 }}>
    <CardActionArea>
    <CardMedia
        component="img"
        height="auto"
        width="90"
        image={img}
        alt="course 8"
      />
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="div">
          Module 8 - Legal
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
          In this module, you will learn to what laws ranging from company law to finance law. Let’s get started.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      {pdf8 && (
          <a
            href={pdf8}
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

export default Course8;