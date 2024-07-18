import React from 'react';
import FeaturedProducts from '../components/molecules/FeaturedProducts';
import HowToBuy from '../components/organisms/HowToBuy';

const HomePage = () => {
  return (
    <div className="home-page">
      <h2>Productos destacados</h2>
      <FeaturedProducts />
      <div className="section-divider"></div>
      <HowToBuy />
    </div>
  );
};

export default HomePage;
