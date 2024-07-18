// src/components/organisms/AdminForm.jsx
import React, { useState } from 'react';
import Title from '../atoms/Title';
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';

const AdminForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Manejar la lógica de envío
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <Title text="Agregar Producto" />
      <FormField label="Nombre" type="text" placeholder="Nombre del producto" value={name} onChange={(e) => setName(e.target.value)} />
      <FormField label="Precio" type="text" placeholder="Precio del producto" value={price} onChange={(e) => setPrice(e.target.value)} />
      <FormField label="Descripción" type="text" placeholder="Descripción del producto" value={description} onChange={(e) => setDescription(e.target.value)} />
      <FormField label="Cantidad Disponible" type="text" placeholder="Cantidad disponible" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <FormField label="Clasificación" type="text" placeholder="Clasificación del producto" value={category} onChange={(e) => setCategory(e.target.value)} />
      <div className="form-row">
        <Label text="Imagen" />
        <input type="file" className="form-field" onChange={(e) => setImage(e.target.files[0])} />
      </div>
      <Button text="Agregar Producto" />
    </form>
  );
};

export default AdminForm;
