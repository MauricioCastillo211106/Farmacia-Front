import React, { useState } from 'react';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implementa la lógica de inicio de sesión aquí
  };

  return (
    <div className="login-form">
      <h2>Iniciar Sesión</h2>
      <FormField
        label="Correo Electrónico"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Ingresa tu correo"
      />
      <FormField
        label="Contraseña"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Ingresa tu contraseña"
      />
      <Button type="button" onClick={handleLogin}>
        Iniciar Sesión
      </Button>
    </div>
  );
};

export default LoginForm;
