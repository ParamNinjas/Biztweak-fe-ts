import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import List from './List'

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'white'
  };

export default function Content() {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 40 }} variant="h5" component="div">
                    Proceed to Free Download
                </Typography>
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                    Selected Course List
                </Typography>
                <List />
            </CardContent>
            <CardActions>
                <Button className="BtnTake"
                    variant="outlined"
                >
                    <Link to="/CoursePage" style={linkStyle}>Proceed To Download</Link>  </Button>
            </CardActions>
        </Card>
    );
}
