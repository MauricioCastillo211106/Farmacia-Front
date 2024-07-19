// src/components/organisms/FeaturedProducts.jsx
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedProducts = ({ products = [] }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="featured-products-container">
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="featured-product-card">
            <img src={product.image} alt={product.title} />
            <h3 className="featured-product-title">{product.title}</h3>
            <p className="featured-product-description">{product.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedProducts;
