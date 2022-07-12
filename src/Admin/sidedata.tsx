import { makeStyles } from '@material-ui/core'
import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import  from ''


// const barWidth = 240

// const useStyles = makeStyles({
//   page: {
//     background: '#f9f9f9',
//     width: '100%'
//   },
//   drawer: {
//     width: barWidth
//   },
//   drawerPaper: {
//     width: barWidth
//   },
//   root: {
//     display: 'flex'
//   }
// })

// export default function Layout({ children }) {
//   const classes = useStyles()

//   const menuItems = [
//   {
//     text: 'My Notes',
//     icon: <SubjectOutlined color/>
//   }
//   ]

//   return (
//     <div className={classes.root}>

//       {/* side bar */}
//       <Drawer 
      
//       className={classes.drawer}
//       variant="permanent"
//       anchor="left"
//       classes={{ paper: classes.drawerPaper}}
      
//       >
//         <div>
//           <Typography variant="h5">
//             Ninja Notes
//           </Typography>
//         </div>
        
//         <List>
        
        
//         </List>
        
        
//       </Drawer>


//       <div className={classes.page}>
//         {children}
//       </div>
//     </div>
//   )

// }