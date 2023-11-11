import { useState } from 'react'
import {Route,Routes} from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignIn  from './componets/login';
import SignUp from './componets/signupArtist';
import Selection from './componets/signInSelection';
import SignUser from './componets/signupUser';
import Home from './componets/home';

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
