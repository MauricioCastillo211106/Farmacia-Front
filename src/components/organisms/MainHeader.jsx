import React from 'react';
import { Link } from 'react-router-dom';

const MainHeader = () => {
  return (
    <header className="header">
      <h1>Farmacia Cristopher</h1>
      <nav>
        <Link to="/home">Inicio</Link>
        <Link to="/products">Productos</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/about">Nosotros</Link>
      </nav>
    </header>
  );
};

export default MainHeader;
