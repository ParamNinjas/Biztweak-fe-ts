import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Container, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import UserNavbar from '../../UserNav/UserNav';
import Footernew from '../../Footer/Footernew';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import pop3 from '../../../Images/pop3.png';
import { Link } from 'react-router-dom';
import './HealthReport.css';

const linkStyle = {
  margin: "1rem",
  textDecoration: "none", 
};


function rand() {
	return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
	const top = 50 + rand();
	const left = 50 + rand();

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`
	};
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			'& > * + *': {
				marginTop: theme.spacing(2)
			}
		},
		bullet: {
			display: 'inline-block',
			margin: '0 2px',
			transform: 'scale(0.8)'
		},
		title: {
			fontSize: 14
		},
		pos: {
			marginBottom: 12
		},
		paper: {
			backgroundColor: theme.palette.background.paper,
			border: '2px solid #000',
			boxShadow: theme.shadows[5],
			padding: theme.spacing(2, 4, 3)
		}
	})
);

const HealthReportFin = () => {
	const classes = useStyles();
	const [ modalStyle ] = React.useState(getModalStyle);
	const [ open, setOpen ] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className="HR-con">
			<UserNavbar />
			<Container>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={12} md={3} lg={3}>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography className="">No Name</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
									ex, sit amet blandit leo lobortis eget.
								</Typography>
							</AccordionDetails>
						</Accordion>
					</Grid>

					<Grid item xs={12} sm={12} md={9} lg={9}>
						<Card className={classes.root}>
							<CardContent>
								<div className="cont">
                                    <div className='alerts'>
									<div className="HR-Alert">
										<Alert severity="success">SUCCESS! Company Assessment Completed.</Alert>
									</div>
                                    <div className="HR-Alert2">
										<Alert severity="success">SUCCESS! Company Profile Completed.</Alert>
									</div>
                                    <div className='HR-Alert3'>
                                    <Alert severity="info">Congratulations! your report is ready.</Alert>
                                    </div>
                                    </div>
									<div className="HR-Header">
										<Typography variant="h3" className="header">
											Business Health Report
										</Typography>
										<Typography>
											In this nicely designed report you can check your business factors in
											graphical way and understand easily, moreover you will also get
											recommendations from our system based on the assessment.
										</Typography>
									</div>
								</div>
							</CardContent>
							<CardActions>
								<Button size="small" variant="outlined" className="bizReport" onClick={handleOpen}>
									View Biz Report
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</Container>
			<Footernew />
			<div className="popUp">
				<div>
					<Dialog
						open={open}
						onClose={handleClose}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
					>
						{/* <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle> */}
						<DialogContent>
							<DialogContentText id="alert-dialog-description">
								<img className="pop3" alt="pop3" src={pop3} />
							</DialogContentText>
              <Typography variant='h5' className='poptypo'>
              Complete Company Profile
              </Typography>
              <Typography>
              Completing your company information will help us know more about your business.
              Lets fill the assessment text: Completing your business assessment will help us
                know what kind of help your business needs.
              </Typography>
						</DialogContent>
						<DialogActions>
              <Link to='/Report' style={linkStyle}>
							<Button className="popSave" variant="outlined">
								OK
							</Button>
              </Link>
						</DialogActions>
					</Dialog>
				</div>
			</div>
		</div>
	);
};

export default HealthReportFin;

//

