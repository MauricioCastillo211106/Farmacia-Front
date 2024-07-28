import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/organisms/LoginForm';

const LoginPage = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      full_name: fullName,
      password: password
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://localhost:3000/api/employee/login", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Credenciales inválidas');
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
        localStorage.setItem('token', result.token); // Almacenar el token
        localStorage.setItem('user', JSON.stringify(result.user)); // Almacenar información del usuario si es necesario
        navigate('/home');
      })
      .catch((error) => {
        console.error(error);
        setError('Credenciales inválidas');
      });
  };

  return (
    <div className="login-page">
      <main>
        <LoginForm 
          email={fullName} // Cambia `email` por `fullName` en LoginForm y en los props
          setEmail={setFullName} // Cambia `setEmail` por `setFullName`
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
