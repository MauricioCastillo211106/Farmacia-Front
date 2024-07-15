import React from 'react';
import SearchBar from '../components/molecules/SearchBar';
import FeaturedProducts from '../components/molecules/FeaturedProducts';
import HowToBuy from '../components/organisms/HowToBuy';

const HomePage = () => {
  return (
    <div className="home-page">
      <SearchBar />
      <FeaturedProducts />
      <HowToBuy />
    </div>
  );
};

export default HomePage;
