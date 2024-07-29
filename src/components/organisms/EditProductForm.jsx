import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import Title from '../atoms/Title';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Label from '../atoms/Label';

const EditProductForm = () => {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [formula, setFormula] = useState('');
  const [secundaryEffects, setSecundaryEffects] = useState('');
  const [caducity, setCaducity] = useState('');
  const [dose, setDose] = useState('');
  const [uso, setUso] = useState('');
  const navigate = useNavigate(); // Hook para navegación

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProductImage(file);
    }
  };

  const handleSubmit = (e) => {
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

    const formdata = new FormData();
    formdata.append("stock", productQuantity);
    formdata.append("name", productName);
    formdata.append("price", productPrice);
    formdata.append("description", productDescription);
    if (productImage) {
      formdata.append("image", productImage);
    }
    formdata.append("type", productCategory);
    formdata.append("formula", formula);
    formdata.append("secundary_effects", secundaryEffects);
    formdata.append("caducity", caducity);
    formdata.append("dose", dose);
    formdata.append("uso", uso);
    formdata.append("created_by", "jose"); // Ajustar según sea necesario
    formdata.append("updated_by", "jose"); // Ajustar según sea necesario

    fetch(`http://localhost:3000/api/product/${productId}`, {
      method: "PUT",
      headers: myHeaders,
      body: formdata,
      redirect: "follow"
    })
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
        alert('Producto actualizado con éxito');
        console.log(result);
      })
      .catch(error => {
        alert('Error al actualizar el producto: ' + error.message);
        console.error(error);
      });
  };

  return (
    <div className="admin-form">
      <Title>Editar Producto</Title>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <Label htmlFor="productId">ID del Producto:</Label>
          <Input
            id="productId"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            placeholder="ID del producto"
          />
        </div>
        <div className="form-row">
          <Label htmlFor="productName">Nombre:</Label>
          <Input
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Nombre del producto"
          />
        </div>
        <div className="form-row">
          <Label htmlFor="productPrice">Precio:</Label>
          <Input
            id="productPrice"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            placeholder="Precio del producto"
          />
        </div>
        <div className="form-row">
          <Label htmlFor="productDescription">Descripción:</Label>
          <Input
            id="productDescription"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            placeholder="Descripción del producto"
          />
        </div>
        <div className="form-row">
          <Label htmlFor="productQuantity">Cantidad Disponible:</Label>
          <Input
            id="productQuantity"
            value={productQuantity}
            onChange={(e) => setProductQuantity(e.target.value)}
            placeholder="Cantidad disponible"
          />
        </div>
        <div className="form-row">
          <Label htmlFor="productCategory">Clasificación:</Label>
          <Input
            id="productCategory"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
            placeholder="Clasificación del producto"
          />
        </div>
        <div className="form-row">
          <Label htmlFor="formula">Fórmula:</Label>
          <Input
            id="formula"
            value={formula}
            onChange={(e) => setFormula(e.target.value)}
            placeholder="Fórmula del producto"
          />
        </div>
        <div className="form-row">
          <Label htmlFor="secundaryEffects">Efectos Secundarios:</Label>
          <Input
            id="secundaryEffects"
            value={secundaryEffects}
            onChange={(e) => setSecundaryEffects(e.target.value)}
            placeholder="Efectos secundarios"
          />
        </div>
        <div className="form-row">
          <Label htmlFor="caducity">Caducidad:</Label>
          <Input
            id="caducity"
            value={caducity}
            onChange={(e) => setCaducity(e.target.value)}
            placeholder="Caducidad"
          />
        </div>
        <div className="form-row">
          <Label htmlFor="dose">Dosis:</Label>
          <Input
            id="dose"
            value={dose}
            onChange={(e) => setDose(e.target.value)}
            placeholder="Dosis"
          />
        </div>
        <div className="form-row">
          <Label htmlFor="uso">Uso:</Label>
          <Input
            id="uso"
            value={uso}
            onChange={(e) => setUso(e.target.value)}
            placeholder="Uso del producto"
          />
        </div>
        <div className="form-row">
          <Label htmlFor="productImage">Imagen:</Label>
          <Input type="file" id="productImage" onChange={handleImageChange} />
        </div>
        <Button type="submit">Editar Producto</Button>
      </form>
    </div>
  );
};

export default EditProductForm;
