import React from 'react';
import Title from '../atoms/Title';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Label from '../atoms/Label';

const EditProductForm = () => {
  return (
    <div className="admin-form">
        <Title>Editar Producto</Title>
      <div className="form-row">
        <Label htmlFor="productId">ID del Producto:</Label>
        <Input id="productId" placeholder="ID del producto" />
      </div>
      <div className="form-row">
        <Label htmlFor="productName">Nombre:</Label>
        <Input id="productName" placeholder="Nombre del producto" />
      </div>
      <div className="form-row">
        <Label htmlFor="productPrice">Precio:</Label>
        <Input id="productPrice" placeholder="Precio del producto" />
      </div>
      <div className="form-row">
        <Label htmlFor="productDescription">Descripción:</Label>
        <Input id="productDescription" placeholder="Descripción del producto" />
      </div>
      <div className="form-row">
        <Label htmlFor="productQuantity">Cantidad Disponible:</Label>
        <Input id="productQuantity" placeholder="Cantidad disponible" />
      </div>
      <div className="form-row">
        <Label htmlFor="productCategory">Clasificación:</Label>
        <Input id="productCategory" placeholder="Clasificación del producto" />
      </div>
      <div className="form-row">
        <Label htmlFor="productImage">Imagen:</Label>
        <Input type="file" id="productImage" />
      </div>
      <Button>Editar Producto</Button>
    </div>
  );
};

export default EditProductForm;
