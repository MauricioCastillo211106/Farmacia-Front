import React from 'react';

const HowToBuy = () => {
  return (
    <div className="how-to-buy">
      <h2>TE LO PONEMOS FÁCIL</h2>
      <h3>¿Cómo comprar?</h3>
      <p>Comprar tus medicamentos en Farmacias Cristopher es un proceso rápido y sencillo. Solo tienes que:</p>
      <div className="steps">
        <div className="step">
          <h4>Elegir</h4>
          <p>Selecciona tus medicamentos de entre todas nuestras opciones</p>
        </div>
        <div className="step">
          <h4>Completar</h4>
          <p>Selecciona la farmacia de tu elección y descarga tu váucher</p>
        </div>
        <div className="step">
          <h4>Recoger</h4>
          <p>Recoge y paga en tienda, es rápido y fácil.</p>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
