import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/organisms/LoginForm';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const registeredUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = registeredUsers.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('auth', 'true');
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/home');
    } else {
      setError('Credenciales inválidas');
    }
  };

  return (
    <div className="login-page">
      <main>
        <LoginForm 
          email={email} 
          setEmail={setEmail} 
          password={password} 
          setPassword={setPassword} 
          onSubmit={handleLogin} 
          error={error} 
        />
      </main>
    </div>
  );
};

export default LoginPage;