import React, { useState } from 'react';
import Title from '../atoms/Title';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const AddProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [classification, setClassification] = useState('');
  const [image, setImage] = useState(null);

  const handleAddProduct = () => {
    // Logic to add product
  };

  return (
    <div className="form-container">
      <Title>Agregar Producto</Title>
      <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" />
      <Input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Precio" />
      <Input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descripción" />
      <Input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Cantidad Disponible" />
      <Input type="text" value={classification} onChange={(e) => setClassification(e.target.value)} placeholder="Clasificación" />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <Button onClick={handleAddProduct}>Agregar Producto</Button>
    </div>
  );
};

export default AddProductForm;
