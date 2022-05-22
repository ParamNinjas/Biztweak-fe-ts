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
import AssesSell from "./components/Assesment/AssesSell";



function App() {
  const [session, setSession] = useState(null)

  // useEffect(() => {
  //   setSession(supabase.auth.session())

  //   supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session)
  //   })
  // }, [])
  return (
    <div className="App">
      {/* {!session ? <Login /> : <Register key={session.user.id} session={session} />} */}
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={< AboutPage />} />
          <Route path='/sign_up' element={<Register />} /> 
          <Route path='/login' element={<Login />} />
          <Route path='/blog' element={<Blog />} /> 
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/AssesSell' element={<AssesSell />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;