import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

// 1. Go lookup module 6/7 where we setup routes/pages on the frontend using ReactRouter and BrowserRouter
// 2. Add a login route/page to your app
// 3. Move the login code to the Vite folder
// 4. Verify that the login page renders on the website and works
// 5. Add other "stub" pages