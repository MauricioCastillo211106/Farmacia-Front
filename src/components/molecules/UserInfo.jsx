// src/components/molecules/UserInfo.jsx
import React from 'react';
import Title from '../atoms/Title';
import Subtitle from '../atoms/Subtitle';
import Paragraph from '../atoms/Paragraph';

const UserInfo = ({ user }) => {
  const hasOrders = user.orders && user.orders.length > 0;

  return (
<div className="user-info card">
      <Title>Resumen de Mi cuenta</Title>
      <Subtitle>¡Hola!, {user.name}</Subtitle>
      <Paragraph>Correo vinculado: {user.email}</Paragraph>
      <Paragraph>Contraseña: ********</Paragraph>
      <Paragraph>Historial de pedidos: {hasOrders ? user.orders.join(', ') : 'No orders yet'}</Paragraph>
    </div>
  );
};

export default UserInfo;
