// //log in compoent with set token//

// import { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';

// import './App.css';
// import SignIn from './components/login'; // Correct the import path
// import SignUp from './components/signupArtist'; // Correct the import path
// import Selection from './components/signInSelection'; // Correct the import path
// import SignUser from './components/signupUser'; // Correct the import path
// import Home from './components/home'; // Correct the import path
// import ProfilePage from './components/profile/profilePage';

// function App() {
//   // const [token, setToken] = useState(false); // Set to false or leave it undefined

//   // if (!token) {
//   //   return <SignIn setToken={setToken} />;
//   // }

//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/signupArtist" element={<SignUp />} />
//         <Route path="/profile" element={<ProfilePage />} />
//         <Route path="/signupUser" element={<SignUser />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
 //Log component with local storage token//


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