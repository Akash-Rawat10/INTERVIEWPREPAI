import React from 'react'
import { BrowserRouter as Router ,Routes , Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'


import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Home/Dashboard';

import UserProvider from './context/UserContext';
import InterviewPrep from './pages/Interviewprep/InterviewPrep';

const App = () => {
  return (
    <UserProvider>
    <div >
      <Router>
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<LandingPage />} />
          
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/interview-prep/:sessionId" element={<InterviewPrep />} />
        </Routes>
      </Router>

      <Toaster 
      toastOptions={{
        className:"",
        style:{
          fontsize:"13px",
        },
      }} />
    </div>
    </UserProvider>
  )
}

export default App
