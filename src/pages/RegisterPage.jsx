import React from 'react';
import RegisterForm from '../components/organisms/RegisterForm';
import Header from '../components/organisms/Header';

const RegisterPage = () => {
  return (
    <div className="register-page">
      <Header />
      <main>
        <RegisterForm />
      </main>
    </div>
  );
};

export default RegisterPage;
