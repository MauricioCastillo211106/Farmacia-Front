import React from 'react';
import Title from '../atoms/Title';
import Subtitle from '../atoms/Subtitle';
import UserInfo from '../molecules/UserInfo';

const UserSummary = ({ username, email, password, orderHistory }) => {
  return (
    <div className="user-summary">
      <Title>Resumen de Mi cuenta</Title>
      <Subtitle>¡Hola!, {username}</Subtitle>
      <UserInfo email={email} password={password} orderHistory={orderHistory} />
    </div>
  );
};

export default UserSummary;
