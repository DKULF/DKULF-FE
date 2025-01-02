import LandingPage from '@/pages/LandingPage';
import LoginPage from '@/pages/LoginPage';
import RegisterItemPage from '@/pages/RegisterItemPage';
import SignUpPage from '@/pages/SignUpPage';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/register-item" element={<RegisterItemPage />} />
    </Routes>
  );
};

export default App;
