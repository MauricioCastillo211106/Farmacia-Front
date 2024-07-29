import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/organisms/RegisterForm';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // Datos del formulario más valores fijos
    const raw = JSON.stringify({
      full_name: name,
      email: email,  // Incluye el email si es necesario en el backend
      password: password,
      salary: 5000,  // Valor fijo o ajustable según la lógica
      position: "Master",  // Valor fijo o ajustable según la lógica
      created_by: "Master" // Asume un valor fijo para created_by
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("https://farmacia-cris-backend.onrender.com/api/employee/create", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en el registro');
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
        localStorage.setItem('auth', 'true'); // Configura la autenticación según tu lógica
        navigate('/login');
      })
      .catch((error) => {
        console.error(error);
        setError('Error en el registro');
      });
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
