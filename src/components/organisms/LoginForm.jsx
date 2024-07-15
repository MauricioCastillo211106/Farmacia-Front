import React from 'react';

const LoginForm = ({ email, setEmail, password, setPassword, onSubmit, error }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="login-form">
      <h2>Iniciar Sesión</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Correo Electrónico</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu correo" 
            required
          />
        </div>
        <div className="form-field">
          <label>Contraseña</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña" 
            required
          />
        </div>
        <button className="btn" type="submit">Iniciar Sesión</button>
      </form>
      <div className="register-link">
        <a href="/register">Regístrate</a>
      </div>
    </div>
  );
};

export default LoginForm;
