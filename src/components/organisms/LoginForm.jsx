import React from 'react';

const LoginForm = ({ email, setEmail, password, setPassword, onSubmit, error }) => {
  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
        <div className="form-field">
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-field">
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        {error && <p style={{color: 'red'}}>{error}</p>}
        <button className="btn" type="submit">Login</button>
      </form>
      <div className="register-link">
        <a href="/register">Regístrate</a>
      </div>
    </div>
  );
};

export default LoginForm;
