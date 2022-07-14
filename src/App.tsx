import React , { useState , useEffect } from "react";
import {BrowserRouter as Router  , Routes, Route} from 'react-router-dom'
import { supabase } from './supabaseClient'
import Home from './routes/Home'
import Blog from './routes/Blog'
import AboutPage from './routes/About';
import Login from './routes/SignIn';
import Register from './routes/Register';
import Dashboard from "./routes/Dash/Dashboard";
import Profile from "./CompanyProfile/Profile";
import AssessBasic from "./components/Assesment/AssesSales";
import Report from "./components/Report/Report";
import Getcourse from "./components/Course/Getcourse"
import Coursepage from "./components/Course/Coursepage"
import Bargraph from "./components/Report/Bar";
import Forgot from "./components/forgot/Forgot";
import Admin from "./Admin/AdminDash";
import Donut from "./components/Report/Donut";
import UserList from "./Admin/List";
import AddAdmin from "./Admin/AddAdmin";
import AddUser from "./Admin/AdminComponents/AddUser/AddUser";
import SendMail from "./Admin/AdminComponents/SendMail/SendMail";
import AllAsses from "./Admin/AdminComponents/AllAsses/AllAsses";
import Funding from "./components/Assesment/Funding/Funding";
import Customer from "./components/Assesment/Customer/Customer";
import AssesFull from "./components/Assesment/FullSuit/AssesFull";
import AdminFull from "./Admin/AddMinFull";
import HealthReport from "./components/Assesment/HealthReport/HealthReport";
import HealthReportFin from "./components/Assesment/HealthReport/HealthR";
import Accelerate from "./components/Assesment/Accelerate/Accelerate";
import EarlyS from "./components/Assesment/EarlyS/EarlyStage";
import Concept from "./components/Assesment/Concept/Concept";
import StartUp from "./components/Assesment/Startup/StartUp";
import './Login/Login.css'





function App() {
  

  
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={< AboutPage />} />
          <Route path='/sign_up' element={<Register />} /> 
          <Route path='/login' element={<Login />} />
          <Route path='/blog' element={<Blog />} /> 
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Report' element={<Report />} />
          <Route path='/AssesSales' element={<AssessBasic />} />
          <Route path='/Getcourse' element={<Getcourse />} />
          <Route path='/Coursepage' element={<Coursepage />} />
          <Route path='/Bar' element={<Bargraph />} />
          <Route path='/Forgot' element={<Forgot />} />
          <Route path='/AdminDash' element={<Admin />} />
          <Route path='/Donut' element={<Donut />} />
          <Route path='/List' element={<UserList />} />
          <Route path='/AddAdmin' element={<AddAdmin />} />
          <Route path='/AddUser' element={<AddUser />} />
          <Route path='/SendMail' element={<SendMail />} />       
          <Route path='/AllAsses' element={<AllAsses />} />
          <Route path='/Funding' element={<Funding />} />
          <Route path='/Customer' element={<Customer />} />
          <Route path='/AssesFull' element={<AssesFull />} />
          <Route path='/AdminFull' element={<AdminFull />} />
          <Route path='/HealthReport' element={<HealthReport />} />
          <Route path='/HealthR' element={<HealthReportFin />} />
          <Route path='/Accelerate' element={<Accelerate />} />
          <Route path='/Concept' element={<Concept />} />
          <Route path='/EarlyStage' element={<EarlyS />} />
          <Route path='/StartUp' element={<StartUp />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;