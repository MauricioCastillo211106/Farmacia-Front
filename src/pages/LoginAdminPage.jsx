import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/organisms/LoginFormAdmin';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // Construir la carga de la solicitud con los datos del formulario y valores fijos
    const raw = JSON.stringify({
      full_name: email,  // Si se requiere el nombre completo
      password: password,
      // Puedes agregar otros campos fijos aquí si es necesario
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
          throw new Error('Error en el inicio de sesión');
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
        // Guarda el token y otros detalles del usuario si es necesario
        localStorage.setItem('auth', 'true'); // Esto puede variar según tu manejo de autenticación
        localStorage.setItem('user', JSON.stringify(result.user)); // Guarda detalles del usuario si es necesario
        localStorage.setItem('token', result.token); // Guarda el token
        navigate('/admin/*');
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
