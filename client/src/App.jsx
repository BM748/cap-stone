import { useState } from 'react'
import {Route,Routes} from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignIn  from './components/login';
import SignUp from './components/signupArtist';
import Selection from './components/signInSelection';
import SignUser from './components/signupUser';
import Home from './components/home';

function App() {
  const [token, setToken] = useState(true);

  if(!token) {
    return <SignIn setToken={setToken}/>
  }

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signupArtist" element={<SignUp/>}/>
      <Route path='/signinSelection' element={<Selection/>}/>
      <Route path='/signupUser' element={<SignUser/>}/>
      
    </Routes>
    </>
  )
}

export default App
