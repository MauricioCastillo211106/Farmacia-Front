import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Asegúrate de importar useNavigate
import Title from '../atoms/Title';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Label from '../atoms/Label';

const DeleteProductForm = () => {
  const [productId, setProductId] = useState('');
  const navigate = useNavigate(); // Hook para navegación

  const handleDelete = (e) => {
    e.preventDefault();

    if (!productId) {
      alert("Por favor, ingrese el ID del producto.");
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      alert('Error: Usuario no autenticado');
      navigate('/login');
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch(`https://farmacia-cris-backend.onrender.com/api/product/${productId}`, requestOptions)
      .then(response => {
        if (!response.ok) {
          if (response.status === 401) {
            alert('Unauthorized: Please check your token');
            navigate('/login');
            return;
          }
          return response.text().then(text => { throw new Error(text); });
        }
        return response.text();
      })
      .then((result) => {
        alert('Producto eliminado con éxito');
        console.log(result);
      })
      .catch((error) => {
        alert('Error al eliminar el producto: ' + error.message);
        console.error(error);
      });
  };

  return (
    <div className="admin-form">
      <Title>Eliminar Producto</Title>
      <form onSubmit={handleDelete}>
        <div className="form-row">
          <Label htmlFor="productId">ID del Producto:</Label>
          <Input
            id="productId"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            placeholder="ID del producto"
          />
        </div>
        <Button type="submit">Eliminar Producto</Button>
      </form>
    </div>
  );
};

export default DeleteProductForm;
