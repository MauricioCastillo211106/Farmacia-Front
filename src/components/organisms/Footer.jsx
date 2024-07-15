// src/components/organisms/Footer.jsx
import React from 'react';
import '../../assets/styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h4>Ubicaciones Valle Morelos:</h4>
          <ul>
            <li>Farmacia Tercera Ote. Sur</li>
            <li>Farmacia Central Ote</li>
            <li>Farmacia Central Pte y Tercera Pte. Sur</li>
          </ul>
        </div>
        <div className="footer-right">
          <h4>Número de teléfono:</h4>
          <p>961 442 7493</p>
        </div>
      </div>
      <div className="footer-note">
        Los precios y promociones mostrados en esta página online son exclusivos y pueden diferir de los precios y promociones de sucursal.
      </div>
    </footer>
  );
};

export default Footer;
