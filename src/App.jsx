import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import AuthHeader from './components/organisms/AuthHeader';
import MainHeader from './components/organisms/MainHeader';
import Footer from './components/organisms/Footer';
import './assets/base.css';
import './assets/header.css';
import './assets/footer.css';
import './assets/login.css';
import './assets/home.css';
import './assets/user.css';
import './assets/admin.css';

// Simulación de autenticación
const isAuthenticated = () => {
  // Reemplaza esta lógica con la lógica de autenticación real
  return localStorage.getItem('auth') === 'true';
};

function App() {
  return (
    <Routes>
      <Route path="/login" element={<AuthLayout><LoginPage /></AuthLayout>} />
      <Route path="/register" element={<AuthLayout><RegisterPage /></AuthLayout>} />
      <Route
        path="/home"
        element={
          isAuthenticated() ? (
            <MainLayout><HomePage /></MainLayout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/admin"
        element={
          isAuthenticated() ? (
            <MainLayout><AdminPage /></MainLayout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
              <Route
          path="/user"
          element={
            isAuthenticated() ? (
              <MainLayout><UserPage /></MainLayout>
            ) : (
              <Navigate to="/login" />
            )
          }   
          />
      <Route
        path="/"
        element={
          isAuthenticated() ? (
            <Navigate to="/home" />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

function AuthLayout({ children }) {
  return (
    <>
      <AuthHeader />
      <main>{children}</main>
    </>
  );
}

function MainLayout({ children }) {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default AppWrapper;
