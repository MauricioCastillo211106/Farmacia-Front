import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBox, faShoppingCart, faInfoCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../molecules/SearchBar';

const MainHeader = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Farmacia Cristopher</h1>
      </div>
      <div className="header-center">
        <SearchBar />
      </div>
      <nav>
        <Link to="/home">
          <FontAwesomeIcon icon={faHome} /> Inicio
        </Link>
        <Link to="/products">
          <FontAwesomeIcon icon={faBox} /> Productos
        </Link>
        <Link to="/shopping_cart">
          <FontAwesomeIcon icon={faShoppingCart} /> Carrito
        </Link>
        <Link to="/about">
          <FontAwesomeIcon icon={faInfoCircle} /> Nosotros
        </Link>
        <Link to="/user">
          <FontAwesomeIcon icon={faUser} /> Cuenta
        </Link>
      </nav>
    </header>
  );
};

export default MainHeader;
