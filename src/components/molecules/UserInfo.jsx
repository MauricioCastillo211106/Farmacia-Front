import React from 'react';
import Paragraph from '../atoms/Paragraph';

const UserInfo = ({ email, password, orderHistory }) => {
  return (
    <div className="user-info">
      <Paragraph>Correo vinculado: {email}</Paragraph>
      <Paragraph>Contraseña: {password}</Paragraph>
      <Paragraph>Historial de pedidos: {orderHistory}</Paragraph>
    </div>
  );
};

export default UserInfo;
