// src/components/molecules/UserInfo.jsx
import React from 'react';
import Title from '../atoms/Title';
import Subtitle from '../atoms/Subtitle';
import Paragraph from '../atoms/Paragraph';

const UserInfo = ({ user }) => {
  const hasOrders = user.orders && user.orders.length > 0;

  return (
    <div className="user-info card">
      <Title text="Resumen de Mi cuenta" />
      <Subtitle text={`¡Hola!, ${user.name}`} />
      <Paragraph text={`Correo vinculado: ${user.email}`} />
      <Paragraph text="Contraseña: ********" />
      <Paragraph text={`Historial de pedidos: ${hasOrders ? user.orders.join(', ') : 'No orders yet'}`} />
    </div>
  );
};

export default UserInfo;
