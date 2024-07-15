import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import AuthHeader from './components/organisms/AuthHeader';
import MainHeader from './components/organisms/MainHeader';
import Footer from './components/organisms/Footer';
import './assets/styles.css';


// Simulación de autenticación
const isAuthenticated = () => {
  return localStorage.getItem('auth') === 'true';
};

function App() {
  return (
    <Router>
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
    </Router>
  );
}

function AuthLayout({ children }) {
  return (
    <>
      <AuthHeader />
      <main className="main-content">{children}</main>
    </>
  );
}

function MainLayout({ children }) {
  return (
    <>
      <MainHeader />
      <main className="main-content">{children}</main>
      <Footer />
    </>
  );
}

export default App;
