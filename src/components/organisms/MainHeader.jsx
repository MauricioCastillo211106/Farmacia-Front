import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../molecules/SearchBar';

const MainHeader = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Farmacia Cristopher</h1>
      </div>
      <SearchBar />
      <nav>
        <Link to="/home">Inicio</Link>
        <Link to="/products">Productos</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/about">Nosotros</Link>
        <Link to="/user">cuenta</Link>
      </nav>
    </header>
  );
};

export default MainHeader;
