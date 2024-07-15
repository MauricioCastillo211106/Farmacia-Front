import React, { useState } from 'react';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Implementa la lógica de registro aquí
  };

  return (
    <div className="register-form">
      <h2>Crear Cuenta</h2>
      <FormField
        label="Nombre"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ingresa tu nombre"
      />
      <FormField
        label="Apellido"
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Ingresa tu apellido"
      />
      <FormField
        label="Correo Electrónico"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Ingresa tu correo"
      />
      <FormField
        label="Número de Teléfono"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Ingresa tu teléfono"
      />
      <FormField
        label="Contraseña"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Ingresa tu contraseña"
      />
      <FormField
        label="Confirmar Contraseña"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirma tu contraseña"
      />
      <Button type="button" onClick={handleRegister}>
        Crear Cuenta
      </Button>
    </div>
  );
};

export default RegisterForm;
