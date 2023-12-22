import React from 'react';
import classes from './eachUser.module.css'

const EachUser = ({ ...user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default EachUser;