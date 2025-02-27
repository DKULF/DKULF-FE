import ProtectedRoute from '@/components/atoms/ProtectedRoute';
import { PATH } from '@/constants/path';
import { Layout } from '@/layouts/Layout';
import AdminLoginPage from '@/pages/AdminLoginPage';
import AdminPage from '@/pages/AdminPage';
import ItemDetailPage from '@/pages/ItemDetailPage';
import LandingPage from '@/pages/LandingPage';
import LoginPage from '@/pages/LoginPage';
import RegisterItemPage from '@/pages/RegisterItemPage';
import SignUpPage from '@/pages/SignUpPage';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path={PATH.LOGIN} element={<LoginPage />} />
        <Route path={PATH.SIGN_UP} element={<SignUpPage />} />
        <Route path={PATH.REGISTER_ITEM} element={<RegisterItemPage />} />
        <Route path={PATH.ITEM_DETAIL} element={<ItemDetailPage />} />
        <Route
          path={PATH.ADMIN}
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          }
        />
        <Route path={PATH.ADMIN_LOGIN} element={<AdminLoginPage />} />
      </Route>
    </Routes>
  );
};

export default App;
