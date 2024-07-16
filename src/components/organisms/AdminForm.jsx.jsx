// src/components/organisms/AdminForm.jsx
import React, { useState } from 'react';
import FormRow from '../molecules/FormRow';
import Button from '../atoms/Button';
import Label from '../atoms/Label';

const AdminForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    quantity: '',
    category: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="admin-form">
      <FormRow label="Nombre" inputType="text" value={formData.name} onChange={handleChange} placeholder="Nombre del producto" />
      <FormRow label="Precio" inputType="number" value={formData.price} onChange={handleChange} placeholder="Precio del producto" />
      <FormRow label="Descripción" inputType="textarea" value={formData.description} onChange={handleChange} placeholder="Descripción del producto" />
      <FormRow label="Cantidad Disponible" inputType="number" value={formData.quantity} onChange={handleChange} placeholder="Cantidad disponible" />
      <FormRow label="Clasificación" inputType="text" value={formData.category} onChange={handleChange} placeholder="Clasificación del producto" />
      <div className="form-row">
        <Label text="Imagen" />
        <input type="file" onChange={handleFileChange} />
      </div>
      <Button text="Agregar Producto" />
    </form>
  );
};

export default AdminForm;
