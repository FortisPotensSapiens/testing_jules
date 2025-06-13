import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/Layout';
import AboutPage from './components/AboutPage';
import WalletPage from './components/WalletPage';
import ProfilePage from './components/ProfilePage';
import VouchersPage from './components/VouchersPage';
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<AboutPage />} />
          <Route path="wallet" element={<WalletPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="vouchers" element={<VouchersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
