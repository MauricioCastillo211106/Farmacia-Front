import React from 'react';
import Title from '../atoms/Title';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Label from '../atoms/Label';

const DeleteProductForm = () => {
  return (
    <div className="admin-form">
        <Title>Eliminar Producto</Title>
      <div className="form-row">
        <Label htmlFor="productId">ID del Producto:</Label>
        <Input id="productId" placeholder="ID del producto" />
      </div>
      <Button>Eliminar Producto</Button>
    </div>
  );
};

export default DeleteProductForm;
