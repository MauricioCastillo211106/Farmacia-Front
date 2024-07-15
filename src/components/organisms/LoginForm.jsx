import React from 'react';

const LoginForm = ({ email, setEmail, password, setPassword, onSubmit, error }) => {
  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        {error && <p style={{color: 'red'}}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
