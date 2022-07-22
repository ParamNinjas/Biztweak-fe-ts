import React, { useEffect, useState } from "react";
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Api } from '../services/endpoints';
import { ICompany, IRecomendation } from "../Interfaces/IRecomendation";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './Box.css'


interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const AllAsses = () => {
  const [allRecommendations, setAllRecommendations] = useState<IRecomendation[]>([]);
  const test = async () => {
    const allRecommendations = await Api.GET_AllRecommendations()
    const result = allRecommendations.result ? allRecommendations.result : [] as IRecomendation[];
    setAllRecommendations(result)
    // console.log('reco',allRecommendations)
  }

  const [allAsses, setAllAsses] = useState<ICompany[]>([]);
  const asses = async () => {
    const allAsses = await Api.GET_AllProfiles()
    const outcome = allAsses.result ? allAsses.result : [] as ICompany[];
    setAllAsses(outcome)
    console.log('profile', allAsses)
  }

  useEffect(() => {
    test();
    asses();
  });






  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };


  const linkStyle = {
    margin: "5px",
    textDecoration: "none",
    color: 'white'
  }


  return (
    <Container>
      <div className="TotComAsses">
        <div className="numb">
          <div className="cartlogo">
            <Button
              className="BTN1"
              variant="outlined"
            >< AddShoppingCartIcon /> How To Sell
            </Button>
          </div>
        </div>
        <div className="typos">
          <Typography className="TotTypo">I want to learn how to sell</Typography>
          <Typography className="Comtypo">First Phase</Typography>
          <Button
            className="AddUsers"
            variant="outlined"
          >
            <Link to='/AddUser' style={linkStyle}>Export to CSV</Link>
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default AllAsses