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
                <li><ion-icon name="apps"></ion-icon>Dashboard</li>
                <li><ion-icon name="people-outline"></ion-icon>Users</li>
                <li><ion-icon name="person-outline"></ion-icon><Link to='/AddAdmin'>Admin Users</Link></li>
                <li><ion-icon name="person-outline"></ion-icon>Root Admin</li>
             </ul>
            </div>
        </div>
    )


}

export default Side