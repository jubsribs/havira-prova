import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

export const UsersCard = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsuarios(data))
      .catch(error => console.error('Erro ao buscar usuários:', error));
  }, []);

  return (
    <div className="card-body">

      {usuarios.map((user) => (
        <table className="user-table">
          <thead>
            <div className='details-text'>
              <tr>
                <th className='text-name'>{user.name}</th>
                <th className='text-city'>{user.address.city}</th>
                <th className='text-email'>{user.email}</th>
              </tr>
            </div>
          </thead>
        </table>
      ))}

    </div>
  );
};



