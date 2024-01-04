import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import WelcomePage from '../components/welcomePage/WelcomePage';
import Login from '../components/loginpage/loginPage';
import Signup from '../components/signUp/signUp';


const Navigations = () => {
  return (
    <Router>
        <Routes>
          <Route path="/signup" Component={Signup}/>
          <Route path="/" Component={Login}/>
          <Route path="/welcome" Component={WelcomePage}/>
        </Routes>
    </Router>
  )
}

export default Navigations