import React, { useState } from 'react';
import Title from '../atoms/Title';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const DeleteProductForm = () => {
  const [productId, setProductId] = useState('');

  const handleDeleteProduct = () => {
    // Logic to delete product
  };

  return (
    <div className="form-container">
      <Title>Eliminar Producto</Title>
      <Input type="text" value={productId} onChange={(e) => setProductId(e.target.value)} placeholder="ID del Producto" />
      <Button onClick={handleDeleteProduct}>Eliminar Producto</Button>
    </div>
  );
};

export default DeleteProductForm;
