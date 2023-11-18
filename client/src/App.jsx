import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './components/login';
import SignUp from './components/signupArtist';
import Home from './components/home';
import ProfilePage from './components/profile/profilePage';


function App() {
  // Check if a token is already present in local storage
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);

  // Update local storage when the token changes
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  if (!token) {
    return <SignIn setToken={setToken} />;
  }
  

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
