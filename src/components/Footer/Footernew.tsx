import React from 'react'
import './Footernew.css'
import { FaFacebook, FaInstagram, FaLinkedin,FaTiktok, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa';
import { Divider } from '@material-ui/core';
import { Link } from 'react-router-dom'
import logo from '../../Images/bizlogo.png';

const Footernew = () => {
    return (
        <div className='footer'>
           	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
			   <div className="imagegrid">
                        <img
                            src={logo}
                            alt='footerL'
                            className='footerL'
                        />
                    </div>
					<div className='useful'>
  	 			<h4>Useful Links</h4>
				   <Divider/>
  	 			<ul>
  	 				<li><a href="/training">About Us</a></li>
  	 				<li><a href="/recruitment">Blog</a></li>
  	 			</ul>
				   </div>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Legal and Privacy</h4>
				   <Divider/>
  	 			<ul>
  	 				<li><a href="https://app.termly.io/document/terms-of-use-for-website/bae18684-68a5-4feb-b722-2396bf9b3d07">Terms of service</a></li>
  	 				<li><a href="https://app.termly.io/document/privacy-policy/6e538943-b793-48ed-876f-bf66701c8e56">Privacy policy</a></li>
					   <li><a href="https://app.termly.io/document/disclaimer/fe8696d1-0ff3-47d6-bdc0-a8eba5fb0466">Disclosures</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Support</h4>
				   <Divider/>
  	 			<ul>
  	 				<li><a href="#">0115689980</a></li>
  	 				<li><a href="#">hello@biztweak.org.za</a></li>
  	 			</ul>
  	 		</div>
  	 		
  	 	</div>
		<Divider/>
		   <div className="footer-icons">
  	 			<h4 className='iconHeader'>follow us</h4>
  	 			<div className="social-links">
                   <a href="https://www.facebook.com/biztweaksouthafrica"><FaFacebook size={30} style={{ color: '#5F9EA0 ', marginRight: '1rem' }} /></a>
                   <a href="https://twitter.com/BizTweak"><FaTwitter size={30} style={{ color: '#5F9EA0 ', marginRight: '1rem' }} /></a>
                   <a href="https://www.linkedin.com/company/biztweak/"><FaLinkedin size={30} style={{ color: '##5F9EA0 ', marginRight: '1rem' }} /></a>
				   <a href="https://www.linkedin.com/company/biztweak/"><FaInstagram size={30} style={{ color: '#5F9EA0 ', marginRight: '1rem' }} /></a>
				   <a href="https://www.linkedin.com/company/biztweak/"><FaTiktok size={30} style={{ color: '#5F9EA0 ', marginRight: '1rem' }} /></a>
  	 			</div>
  	 		</div>
  	 </div>
        </div>
    )
}

export default Footernew;
