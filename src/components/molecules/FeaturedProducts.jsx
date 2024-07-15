import React from 'react';

const FeaturedProducts = () => {
  return (
    <div className="featured-products">
      <h2>Productos destacados</h2>
      <div className="product-images">
        <img src="image1.jpg" alt="Imagen 1" className="product-image" />
        <img src="image2.jpg" alt="Imagen 2" className="product-image" />
        <img src="image3.jpg" alt="Imagen 3" className="product-image" />
      </div>
    </div>
  );
};

export default FeaturedProducts;
