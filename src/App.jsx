import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import AuthHeader from './components/organisms/AuthHeader';
import MainHeader from './components/organisms/MainHeader';

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
    </>
  );
}

export default AppWrapper;
