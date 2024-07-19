import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/organisms/RegisterFormAdmin';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    const registeredUsers = JSON.parse(localStorage.getItem('users')) || [];
    if (registeredUsers.some(u => u.email === email)) {
      setError('El correo electrónico ya está registrado');
    } else {
      registeredUsers.push({ name, email, password });
      localStorage.setItem('users', JSON.stringify(registeredUsers));
      localStorage.setItem('auth', 'true');
      navigate('/loginAdmin');
    }
  };

  return (
    <div className="register-page">
      <main>
        <RegisterForm 
          name={name} 
          setName={setName} 
          email={email} 
          setEmail={setEmail} 
          password={password} 
          setPassword={setPassword} 
          onSubmit={handleRegister} 
          error={error} 
        />
      </main>
    </div>
  );
};

export default RegisterPage;
