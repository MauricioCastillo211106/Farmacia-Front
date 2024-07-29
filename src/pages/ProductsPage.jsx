import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Importar useNavigate y Link

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Inicializar useNavigate

  useEffect(() => {
    const token = localStorage.getItem('token'); // Obtener el token almacenado
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch("http://localhost:3000/api/product/", requestOptions)
      .then(response => {
        if (!response.ok) {
          if (response.status === 401) {
            alert('Unauthorized: Please check your token'); // Mostrar alerta
            navigate('/login'); // Redirigir al login
            return;
          }
          throw new Error('An error occurred while fetching data');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setError('Data is not in expected format');
        }
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [navigate]); // Incluir navigate en las dependencias

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Productos</h1>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.url} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Precio: {product.price}</p>
            <Link to={`/product/${product.id}`}>Ver detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
