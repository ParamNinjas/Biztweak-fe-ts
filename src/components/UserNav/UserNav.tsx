import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../Images/bizlogo.png'
import { Button } from '@material-ui/core';
import '../Navbar/Navbar.css';

const linkStyle = {
    margin: "1rem",
    textDecoration: "none", 
    color: 'black'
  };
const UserNavbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <Link to='/'><img src={logo} alt="Logo" width='170px' height='auto' /></Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/' style={linkStyle}>Home</Link>
                </li>
                <li>
                    <Link to='/blog' style={linkStyle}>Blog</Link>
                </li>
                <li>
                    <Link to='/Dashboard' style={linkStyle}>Dashboard</Link>
                </li>
                <li>
                    <Link to='/Coursepage' style={linkStyle}>Courses</Link>
                </li>
                <li>
                    <Link to='/Profile' style={linkStyle}>Profile</Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: '#fff' }} />) : (<FaBars size={20} style={{ color: '#fff' }} />)}

            </div>
        </div>
    )
}

export default UserNavbar