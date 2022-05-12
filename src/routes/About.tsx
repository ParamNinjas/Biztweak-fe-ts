import React from 'react'
import Footernew from '../components/Footer/Footernew'
import Navbar from '../components/Navbar/Navbar'
import About from '../About/About'
import Subscribe from '../components/subscribe/Subscribe'
import Cards from '../../src/components/cards/Cards'



const AboutPage = () => {
    return (
        <div>
            <Navbar />
            <About />
            <Cards />
            <Subscribe />
            <Footernew />
        </div>
    )
}

export default AboutPage
