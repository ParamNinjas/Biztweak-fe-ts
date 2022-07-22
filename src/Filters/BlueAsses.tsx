import React, { useEffect, useState } from "react";
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { ICompany, IRecomendation } from "../Interfaces/IRecomendation";
import { Api } from "../services/endpoints";
import './BlueAsses.css'


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

  return (
    <div className="con">
      <Container>
        <div className="Asses">
          <div className="number">
            <Typography className="text">Total Companies</Typography>
            <h1 className="numer">15</h1>
          </div>
        </div>
        <div className="Asses">
          <div className="number">
            <Typography className="text">Total Companies</Typography>
            <h1 className="numer">15</h1>
          </div>
        </div>
        <div className="Asses">
          <div className="number">
            <Typography className="text">Total Companies</Typography>
            <h1 className="numer">15</h1>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default AllAsses