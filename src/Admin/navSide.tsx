import { makeStyles } from '@material-ui/core'
import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom'

const barWidth = 240

const useStyles = makeStyles({
  page: {
    background: '#082A2C',
    width: '100%'
  },
  drawer: {
    width: barWidth
  },
  drawerPaper: {
    width: barWidth,
    background: '#082a2c'
  },
  root: {
    display: 'flex'
  },
  active: {
  background: 'f4f4f4'
  }
})

type Props = {
  title: string;
  children?: React.ReactNode;
};


type LayoutProps = React.PropsWithChildren<{}>;

export default function Layout({ children }: LayoutProps) {
  const classes = useStyles()
  const navigate = useNavigate();
  const location = useLocation();
  
  const menuItems = [
    {
      text: ' Dashboard',
      icon: <DashboardIcon color="secondary" />,
      path: '/AdminFull'
    },
    {
      text: ' User',
      icon: <GroupIcon color="secondary" />,
      path: '/AdminDash'
    },
    {
      text: ' Admin Users',
      icon: <AssignmentIndIcon color="secondary" />,
      path: '/AddAdmin'
    },
    {
      text: ' Root Users',
      icon: <AdminPanelSettingsIcon color="secondary" />,
      path: '/AdminDash'
    },
  ]

  return (
    <div className={classes.root}>

      {/* side bar */}
      <Drawer

        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}

      >
        <div>
        <Link to='/'><img src={logo} alt="Logo" width='170px' height='auto' /></Link>
        </div>

      {/* list / links */}

        <List>

        {menuItems.map(item => (
<ListItem 
button
key ={item.text}
onClick={() => navigate(item.path)}
// className={location.pathname == item.path }
>
<ListItemIcon>{item.icon}</ListItemIcon>
<ListItemText primary={item.text}/>
</ListItem>

))}
        </List>


      </Drawer>


      <div className={classes.page}>
        {children}
      </div>
    </div>
  )

}