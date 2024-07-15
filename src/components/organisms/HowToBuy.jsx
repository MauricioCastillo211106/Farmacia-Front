import React from 'react';
import Title from '../atoms/Title';
import Subtitle from '../atoms/Subtitle';
import Step from '../atoms/Step';
import icon_path_1 from '../../assets/Images/icon-path-1.png';
import icon_path_2 from '../../assets/Images/icon-path-2.png';
import icon_path_3 from '../../assets/Images/icon-path-3.png';


const HowToBuy = () => {
  return (
    <div className="how-to-buy">
      <Title>TE LO PONEMOS FÁCIL</Title>
      <Subtitle>¿Cómo comprar?</Subtitle>
      <div className="steps">
        <Step
          icon={icon_path_1}
          title="Elegir"
          description="Selecciona tus medicamentos de entre todas nuestras opciones."
        />
        <Step
          icon={icon_path_2}
          title="Completar"
          description="Selecciona la farmacia de tu elección y descarga tu váucher."
        />
        <Step
          icon={icon_path_3}
          title="Recoger"
          description="Recoge y paga en tienda, es rápido y fácil."
        />
      </div>
    </div>
  );
};

export default HowToBuy;
