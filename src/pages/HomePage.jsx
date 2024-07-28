import React, { useEffect, useState } from 'react';
import FeaturedProducts from '../components/molecules/FeaturedProducts';
import HowToBuy from '../components/organisms/HowToBuy';

const HomePage = () => {
  const [products, setProducts] = useState([]);

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

      fetch("http://localhost:3000/api/product/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setProducts(result.slice(0, 3));
        })
        .catch((error) => console.error(error));
    } else {
      console.error("Token no encontrado");
    }
  }, []);

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
