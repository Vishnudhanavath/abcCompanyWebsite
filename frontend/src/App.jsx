import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CMSPage from './pages/CMSPage';
import Navbar from './components/Navbar';
import './App.css'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cms" element={<CMSPage />} />
      </Routes>
    </Router>
  );
}

export default App;
