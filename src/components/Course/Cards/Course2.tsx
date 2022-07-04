import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import img from '../PDFS/course2.jpg';
import pdf2 from '../../Course/PDFS/module2.pdf';




const btnClick = () => {
  console.log('Im here')
  window.open('./PDFS/course1.jpg')
}

const Course2 = () => {
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
          Module 2 - Market Intelligence
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
          In this module, you will learn what market research is and
          why it is so important for any businesses. Besides, you will get an
          extensive understanding of how market segmentation works, how to conduct competitor
          analysis and steps to create ideal customer profile. By the end of this module, you
          will get to learn how to figure out a unique selling point, what is a competitive advantage
          and how to sort out best WTP for your business as well.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      {pdf2 && (
          <a
            href={pdf2}
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

export default Course2;