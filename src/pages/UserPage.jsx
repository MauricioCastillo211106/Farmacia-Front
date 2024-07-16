// src/pages/UserPage.jsx
import React, { useEffect, useState } from 'react';
import UserSummary from '../components/organisms/UserSummary';

const UserPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulación de una llamada a la API para obtener la información del usuario
    const storedUser = JSON.parse(localStorage.getItem('user')) || {
      name: 'Nombre del usuario',
      email: 'asd@gmail.com',
      orders: []
    };
    setUser(storedUser);
  }, []);

  return (
    <div className="user-page">
      {user ? <UserSummary user={user} /> : <p>Loading...</p>}
    </div>
  );
};

export default UserPage;
