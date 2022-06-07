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
// import AssesSell from "./components/Assesment/AssesSell";
import AssessBasic from "./components/Assesment/AssesBasic";
import Report from "./components/Report/Report";
import Getcourse from "./components/Course/Getcourse"
import Bargraph from "./components/Report/Bar";
import Pchart from "./components/Report/Pie";





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
          <Route path='/AssesBasic' element={<AssessBasic />} />
          <Route path='/Getcourse' element={<Getcourse />} />
          <Route path='/Bar' element={<Bargraph />} />
          <Route path='/Pie' element={<Pchart />} />
       
        </Routes>
      </Router>
    </div>
  );
}

export default App;