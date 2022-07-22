import React from 'react'
import './About.css'

import {Link} from 'react-router-dom'
import image from '../../src/Images/about.png'


const About = () => {
    return (
        <div className='image'>
            <div className='left'>
                <div className='img-container'>
                        <img src={image} className='img' alt='' />
                </div>
            </div>
            <div className='right'>
            <h6>A LITTLE ABOUT</h6>
                <h1>What We Do</h1>
                <h3>We make entrepreneurship easier.</h3>
                <p className='move'>Being an entrepreneur is an interesting journey for sure, especially when you don’t know what you don’t know about your business or business idea. Not knowing the right information at the right time has caused failure in many businesses; through our business health assessment BizTweak aims to change that.</p>
                <Link to='/sign_up'><button className='btn'>TAKE FREE ASSESSMENT</button></Link>
            </div>
        </div>
        
    )
}

export default About
