// src/pages/AdminPage.jsx
import React from 'react';
import AdminForm from '../components/organisms/AdminForm';
import Title from '../components/atoms/Title';

const AdminPage = () => {
  const handleProductSubmit = (data) => {
    console.log('Product Data:', data);
    // Aquí iría la lógica para manejar el envío del formulario
  };

  return (
    <div className="admin-page">
      <Title text="Zona Administrativa" />
      <div className="admin-product-view">
        <div className="form-container">
          <Title text="Agregar Producto" />
          <AdminForm onSubmit={handleProductSubmit} />
        </div>
        <div className="form-container">
          <Title text="Eliminar Producto" />
          {/* Aquí iría el formulario para eliminar producto */}
        </div>
        <div className="form-container">
          <Title text="Editar Producto" />
          {/* Aquí iría el formulario para editar producto */}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
