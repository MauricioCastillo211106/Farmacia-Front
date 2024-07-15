import React from 'react';
import Header from '../components/organisms/Header';
import SearchBar from '../components/molecules/SearchBar';
import FeaturedProducts from '../components/molecules/FeaturedProducts';
import HowToBuy from '../components/organisms/HowToBuy';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <SearchBar />
      <FeaturedProducts />
      <HowToBuy />
    </div>
  );
};

export default HomePage;
