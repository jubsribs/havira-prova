import React, { useState } from 'react';
import './styles.scss';
import { toast } from 'react-toastify';
import Tooltip from '@mui/material/Tooltip';
import { Button } from '../button';
import { PeopleIcon } from '../../assets/icons';

export const Formulario = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [latitude, setLatd] = useState('');
  const [longitude, setLong] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    toast.dark('Mensagem enviada com Sucesso!');
    setName('');
    setEmail('');
    setCity('');
    setLatd('');
    setLong('');

  };

  return (
    <form id='formularioContato' onSubmit={handleSubmit}>
      <div className='forms-body'>
        <div className='forms'>
          <div className='title-icon'>
            <PeopleIcon />
            <h1 className='title'>Cadastro de Usuários</h1>
          </div>
          <div className='sub-title-body'>

            <div className='style-next'>
              <div className='style-box-name'>
                <h4 className='sub-title'>
                  Nome
                  <Tooltip title='campo obrigatório'>
                    <span>*</span>
                  </Tooltip>
                </h4>
                <input
                  className='sub-title-box'
                  value={name}
                  type='name'
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='style-box-name'>
                <h4 className='sub-title'>
                  Email
                  <Tooltip title='campo obrigatório'>
                    <span>*</span>
                  </Tooltip>
                </h4>
                <input
                  className='sub-title-box'
                  value={email}
                  type='email'
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='style-box-name'>
                <h4 className='sub-title'>
                  Cidade
                  <Tooltip title='campo obrigatório'>
                    <span>*</span>
                  </Tooltip>
                </h4>
                <input
                  className='sub-title-box'
                  value={city}
                  type='text'
                  required
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>


            <div className='style-long-latd'>
              <div className='style-box-name'>
                <h4 className='sub-title'>
                  Longitude
                  <Tooltip title='campo obrigatório'>
                    <span>*</span>
                  </Tooltip>
                </h4>
                <input
                  className='sub-title-box'
                  value={longitude}
                  type='number'
                  required
                  onChange={(e) => setLong(e.target.value)}
                />
              </div>
              <div className='style-box-name'>
                <h4 className='sub-title'>
                  Latitude
                  <Tooltip title='campo obrigatório'>
                    <span>*</span>
                  </Tooltip>
                </h4>
                <input
                  className='sub-title-box'
                  value={latitude}
                  type='number'
                  required
                  onChange={(e) => setLatd(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className='button-wrapper'>
            <Button onClick={handleSubmit}> ENVIAR</Button>
          </div>
        </div>
      </div>
    </form>
  );
};
