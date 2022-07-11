import React , { useState } from "react";
import logo from '../../../Images/logo.png'
import { Link } from 'react-router-dom'
import '../../sideNav.css'

const linkStyle = {
    margin: "1rem",
    textDecoration: "none", 
    color: 'white'
  };

const SideN =() => {

    return (
        <div className="sideNav">
              <Link to='/'><img src={logo} alt="Logo" width='170px' height='auto' /></Link>
            <div className="Nav">
             <ul>
                <li><Link to='/AdminDash' style={linkStyle}>Dashboard</Link></li>

             </ul>
            </div>
        </div>
    )


}

export default SideN