import './App.css';
import { useState } from 'react';
import { LoginSignup } from './Components/LoginSignup/LoginSignup';
import WelcomePage from './Components/WelcomePage/WelcomePage';


function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (<WelcomePage />) : (<LoginSignup/>)}
    </>
  );
}

export default App;
