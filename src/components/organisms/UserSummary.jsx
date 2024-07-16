// src/components/organisms/UserSummary.jsx
import React from 'react';
import UserInfo from '../molecules/UserInfo';

const UserSummary = ({ user }) => {
  return (
    <div className="user-summary">
      <UserInfo user={user} />
    </div>
  );
};

export default UserSummary;
