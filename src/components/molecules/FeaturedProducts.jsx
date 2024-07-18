import React from 'react';
import TempraImage from '../../assets/Images/Tempra.png';
import LoratadinaImage from '../../assets/Images/Loratadina.png';
import Ibuprofeno from '../../assets/Images/Ibuprofeno.png';

const FeaturedProducts = () => {
  return (
    <div className="featured-products-container">
      <div className="featured-product-card">
        <img src={TempraImage} alt="Tempra" />
        <div className="featured-product-title">Tempra</div>
        <div className="featured-product-description">Paracetamol 500mg, 20 tabletas.</div>
      </div>
      <div className="featured-product-card">
        <img src={LoratadinaImage} alt="Loratadina" />
        <div className="featured-product-title">Loratadina</div>
        <div className="featured-product-description">Antihistamínico, 10mg, 10 tabletas.</div>
      </div>
      <div className="featured-product-card">
        <img src={Ibuprofeno} alt="Ibuprofeno" />
        <div className="featured-product-title">Ibuprofeno</div>
        <div className="featured-product-description">Analgésico 400mg, 20 tabletas.</div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
