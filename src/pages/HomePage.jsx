import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FeaturedProducts from '../components/molecules/FeaturedProducts';
import HowToBuy from '../components/organisms/HowToBuy';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
      };

      fetch("https://farmacia-cris-backend.onrender.com/api/product/", requestOptions)
        .then(response => {
          if (!response.ok) {
            if (response.status === 401) {
              alert('Unauthorized: Please check your token');
              navigate('/login');
              return;
            }
            throw new Error('An error occurred while fetching data');
          }
          return response.json();
        })
        .then((result) => {
          setProducts(result.slice(0, 3));
        })
        .catch((error) => console.error(error));
    } else {
      console.error("Token no encontrado");
    }
  }, [navigate]);

  return (
    <div className="home-page">
      <h2>Productos destacados</h2>
      <FeaturedProducts products={products} />
      <div className="section-divider"></div>
      <HowToBuy />
    </div>
  );
};

export default HomePage;
