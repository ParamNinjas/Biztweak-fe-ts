import "./sidebar.css";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import logo from '../../../Images/logo.png'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
      <div className="sidelogo">
      <Link to='/'><img src={logo} alt="Logo" width='170px' height='auto' /></Link>
      </div>
        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Dashboard</h3> */}
          <ul className="sidebarList">
            <Link to="/AdminDash" className="link">
              <li className="sidebarListItem active">
                <DashboardIcon className="sidebarIcon" />
                Dashboard
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <GroupIcon className="sidebarIcon" />
                Users
              </li>
            </Link>
          </ul>
          <div className="sidebarMenu">
            <ul className="sidebarList">
              <Link to="/AddAdmin" className="link">
                <li className="sidebarListItem">
                  <AdminPanelSettingsIcon className="sidebarIcon" />
                  Admin Users
                </li>
              </Link>
            </ul>
            <div className="sidebarMenu">
              <ul className="sidebarList">
                <Link to="/users" className="link">
                  <li className="sidebarListItem">
                    <AssignmentIndIcon className="sidebarIcon" />
                    Root Admin
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
