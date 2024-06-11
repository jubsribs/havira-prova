import React, { useEffect, useState } from 'react';
import { UsersCard } from '../../components/usersCard';
import './styles.scss';

export const Users = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsuarios(data))
      .catch(error => console.error('Erro ao buscar usuários:', error));
  }, []);


  return (
    <>
      <div className='users-body'>
      {usuarios.map((user) => (
          <UsersCard
            name={user.name}
            city={user.address.city}
            email={user.email}
          />
        ))}
      </div>
    </>
  );
};

