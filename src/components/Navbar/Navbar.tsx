import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../Images/bizlogo.png'
import { Button } from '@material-ui/core';
import './Navbar.css';

const linkStyle = {
  margin: "1rem",
  textDecoration: "none", 
  
};

const Navbar = () => {
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

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none", 
        color: 'black'
      };
      
    window.addEventListener('scroll', changeColor)

    return (
        // <div className='nv'></div>
        <div className={color ? 'header header-bg' : 'header'}>
            <div className='nav-logo'><Link to='/'><img src={logo} alt="Logo" width='170px' height='auto' /></Link></div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/'style={linkStyle}>Home</Link>
                </li>
                <li>
                    <Link to='/blog' style={linkStyle} >Blog</Link>
                </li>
                <li>
                    <Link to='/about'style={linkStyle}>About Us</Link>
                </li>
                <li>
                    <Link to='/login'style={linkStyle}>Sign In</Link>
                </li>
                 <li className="nav-btn">
                <Button variant='outlined'disableRipple className='BtnRegister'>
                <Link to='/sign_up' >Register</Link>
                </Button>
          </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: '#fff' }} />) : (<FaBars size={20} style={{ color: '#fff' }} />)}

            </div>
        </div>
    )
}

export default Navbar