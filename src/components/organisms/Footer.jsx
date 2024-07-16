import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <ul>
            <li>Ubicaciones Valle Morelos:</li>
            <li>Farmacia Tercera Ote. Sur</li>
            <li>Farmacia Central Ote</li>
            <li>Farmacia Central Pte y Tercera Pte. Sur</li>
          </ul>
        </div>
        <div className="footer-right">
          <p>Número de teléfono:</p>
          <p>961 442 7493</p>
        </div>
      </div>
      <div className="footer-note">
        <p>Los precios y promociones mostrados en esta página online son exclusivos y pueden diferir de los precios y promociones de sucursal.</p>
        <p>© Farmacia Cristopher. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
