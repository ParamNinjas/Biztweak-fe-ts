import React , { useState } from "react";
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom'
import './sideNav.css'



const Side =() => {

    return (
        <div className="sideNav">
              <Link to='/'><img src={logo} alt="Logo" width='170px' height='auto' /></Link>
            <div className="Nav">
             <ul>
                <li>Dashboard</li>
                <li> Users</li>
                <li> <Link to='/AddAdmin'>Admin Users</Link> </li>
                <li>Root Admin</li>
             </ul>
            </div>
        </div>
    )


}

export default Side