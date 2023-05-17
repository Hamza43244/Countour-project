import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
const Approuter = () => {
  return (
    <div>
    
    
    <Router>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
   
    </div>
  )
}

export default Approuter
