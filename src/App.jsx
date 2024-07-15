import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} /> {/* Añade la ruta HomePage */}
        <Route path="/" element={<LoginPage />} /> {/* Redirige a la página de inicio de sesión por defecto */}
      </Routes>
    </Router>
  );
}

export default App;
