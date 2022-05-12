import React from 'react'
import {BrowserRouter as Router  , Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import Blog from './routes/Blog'
import AboutPage from './routes/About';
import Login from './routes/SignIn';
import Register from './routes/Register';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={< AboutPage />} />
          <Route path='/sign_up' element={<Register />} /> 
          <Route path='/login' element={<Login />} />
          <Route path='/blog' element={<Blog />} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;