import React from 'react';
import UserSummary from '../components/organisms/UserSummary';

const UserPage = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="user-page">
      <UserSummary
        username={user?.username}
        email={user?.email}
        password="********"
        orderHistory="No orders yet"
      />
    </div>
  );
};

export default UserPage;
