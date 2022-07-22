import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import './SendMail.css';

const SendMail = () => {
	return (
		<div className="send-con">
			{/* <sideNav/> */}
			<Container>
				<div className="send">
					<div className="filter">
						<Typography>Filter</Typography>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							fullWidth
							variant="outlined"
							// value={age}
							// onChange={handleChange}
						>
							<MenuItem value={1}>All Users</MenuItem>
							<MenuItem value={2}>Registered Business users</MenuItem>
							<MenuItem value={3}>None Registered Business users</MenuItem>
							<MenuItem value={4}>Idea/Concept phase users</MenuItem>
							<MenuItem value={5}>Early Stage phase users</MenuItem>
							<MenuItem value={6}>Startup phase users</MenuItem>
							<MenuItem value={7}>Accelerate phase users</MenuItem>
						</Select>
					</div>
					<div className="subject">
						<Typography>Subject</Typography>
						<TextField size="small" fullWidth variant="outlined" className="subjectTypo" />
					</div>
					<div className="emailContent">
						<Typography>Email Content</Typography>
						<TextField fullWidth variant="outlined"  multiline maxRows={10} />
					</div>
					<Button className="mailBtn" variant="outlined">
						Send
					</Button>
				</div>
			</Container>
		</div>
	);
};

export default SendMail;
