import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css'
import jpg1 from '../../Images/idea.png'
import jpg2 from '../../Images/investor.png'
import jpg3 from '../../Images/customers.png'
import jpg4 from '../../Images/viability.png'
import jpg5 from '../../Images/scalbitily.png'
import jpg6 from '../../Images/employee.png'


const Cards = () => {
  return (
    <div className='head'>
            <div className='feature-content'>
          {/* <h6>Get Courses</h6> */}
          <h1>The Impact of BizTweak</h1>
          <p>After completing the assessment you will get a business health report that will give you recommendations on</p>
        </div>
      <div className='card-container'>
        <div className='card'>
          <img src={jpg1} className='img1' alt='' />
          <h3>Business Idea Validation</h3>
          <p> Find out if your business or business idea is viable, and if not what to do about it.</p>
        </div>
        <div className='card'>
          <img src={jpg2} className='img1' alt='' />
          <h3> Investor Readiness </h3>
          <p> Score the readiness of your business or business idea for funding or investment.</p>
        </div>
        <div className='card'>
          <img src={jpg3} className='img1' alt='' />
          <h3> Customers and Revenue </h3>
          <p> Score your methods to find customers, and how you generate revenue for your business or business idea.</p>
        </div>
        <div className='card'>
          <img src={jpg4} className='img1' alt='' />
          <h3>Market Viability</h3>
          <p> Finding out and scoring the market readiness of your business or business idea.</p>
        </div>
        <div className='card'>
          <img src={jpg5} className='img1' alt='' />
          <h3>Business Scalability</h3>
          <p> Whether your business or business idea can grow in scale.</p>
        </div>
        <div className='card'>
          <img src={jpg6} className='img1' alt='' />
          <h3>Score Your Systems</h3>
          <p>Score system and processes to manage employees in your business and business idea.</p>
        </div>
      </div>
    </div>
  )
}

export default Cards
