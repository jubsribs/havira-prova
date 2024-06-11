import React from 'react';
import './styles.scss';

export const UsersCard = ({ name, city, email }) => {
  return (
    <div className='card'>
      <div className='details'>
        <div className='details-text'>
          <p>{name}</p>
          <p>{city}</p>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
}