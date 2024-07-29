import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Función para obtener los productos desde una API
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://farmacia-cris-backend.onrender.com/api/products'); // Cambia esta URL a tu endpoint
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="featured-products-container">
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="featured-product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedProducts;
