import React from 'react';

const LoginForm = ({ email, setEmail, password, setPassword, onSubmit, error }) => {
  return (
    <div className="login-form">
      <h2>Iniciar Sesión</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="form-field">
        <label>Correo Electrónico</label>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ingresa tu correo" 
        />
      </div>
      <div className="form-field">
        <label>Contraseña</label>
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Ingresa tu contraseña" 
        />
      </div>
      <button className="btn" onClick={onSubmit}>Iniciar Sesión</button>
      <div className="register-link">
        <a href="/register">Regístrate</a>
      </div>
    </div>
  );
};

export default LoginForm;
