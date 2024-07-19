import React from 'react';
import UserInfo from '../molecules/UserInfo';
import Button from '../atoms/Button';
import { useNavigate } from 'react-router-dom';

const UserSummary = ({ user }) => {
  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    try {

      navigate('/login'); // Navega a la página de inicio de sesión u otra página pública
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <div className="user-summary">
      <UserInfo user={user} />
      <Button onClick={handleLogoutClick}>
        Cerrar sesión
      </Button>
    </div>
  );
};

export default UserSummary;
