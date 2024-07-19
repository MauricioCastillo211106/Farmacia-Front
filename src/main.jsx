import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import LoginAdminPage from './pages/LoginAdminPage';
import RegisterPage from './pages/RegisterPage';
import RegisterAdminPage from './pages/RegisterAdminPage';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import AboutPage from './pages/AboutPage';
import AddProductForm from './components/organisms/AddProductForm';
import DeleteProductForm from './components/organisms/DeleteProductForm';
import EditProductForm from './components/organisms/EditProductForm';
import AuthHeader from './components/organisms/AuthHeader';
import MainHeader from './components/organisms/MainHeader';
import Footer from './components/organisms/Footer';
import AdminNavbar from './components/organisms/AdminNavbar';
import Sidebar from './components/organisms/Sidebar';
import './assets/base.css';
import './assets/AdminNavbar.css';
import './assets/header.css';
import './assets/footer.css';
import './assets/login.css';
import './assets/home.css';
import './assets/user.css';
import './assets/admin.css';
import './assets/AboutPage.css';
import './assets/AboutUsContent.css';
import './assets/InfoSection.css';

// Simulación de autenticación
const isAuthenticated = () => {
  // Reemplaza esta lógica con la lógica de autenticación real
  return localStorage.getItem('auth') === 'true';
};

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

function AdminLayout({ children }) {
  return (
    <div className="admin-page">
      <AdminNavbar />
      <Sidebar />
      <div className="admin-content">
        {children}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<AuthLayout><LoginPage /></AuthLayout>} />
      <Route path="/register" element={<AuthLayout><RegisterPage /></AuthLayout>} />
      <Route path="/loginAdmin" element={<AuthLayout><LoginAdminPage /></AuthLayout>} />
      <Route path="/registerAdmin" element={<AuthLayout><RegisterAdminPage /></AuthLayout>} />
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
        path="/admin/*"
        element={
          isAuthenticated() ? (
            <AdminLayout>
              <Routes>
                <Route path="add-product" element={<AddProductForm />} />
                <Route path="delete-product" element={<DeleteProductForm />} />
                <Route path="edit-product" element={<EditProductForm />} />
                <Route path="*" element={<AddProductForm />} /> {/* Default route */}
              </Routes>
            </AdminLayout>
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
        path="/about"
        element={
          isAuthenticated() ? (
            <MainLayout><AboutPage /></MainLayout>
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
  </BrowserRouter>
);
