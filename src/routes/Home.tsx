import { StylesProvider } from '@material-ui/core'
import React from 'react'
import Footernew from '../components/Footer/Footernew'
import Navbar from '../components/Navbar/Navbar'
import '../components/Navbar/Navbar.css'
import Slider from '../components/Navbar/Navbar'
import Header from '../components/header/Header'
import '../components/header/Header.css'
// import Subscribe from '../components/subscribe/Subscribe'


const Home = () => {
    return (
        <div>
            <Navbar />
           <Header />
           {/* <Subscribe /> */}
            <Footernew/>
        </div>
    )
}

export default Home
