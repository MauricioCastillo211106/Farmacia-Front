import React from 'react';
import LoginForm from '../components/organisms/LoginForm';
import Header from '../components/organisms/Header';

const LoginPage = () => {
  return (
    <div className="login-page">
      <Header />
      <main>
        <LoginForm />
      </main>
    </div>
  );
};

export default LoginPage;
