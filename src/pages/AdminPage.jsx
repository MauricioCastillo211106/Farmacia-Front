// src/pages/AdminPage.jsx
import React from 'react';
import AdminForm from '../components/organisms/AdminForm';
import Sidebar from '../components/organisms/Sidebar';
import Footer from '../components/organisms/Footer';

const AdminPage = () => {
  return (
    <div className="admin-page">
      <header className="header">Zona Administrativa</header>
      <div className="admin-content">
        <Sidebar />
        <main className="admin-product-view">
          <div className="form-container">
            <AdminForm />
          </div>
          <div className="form-container">
            <AdminForm />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPage;
