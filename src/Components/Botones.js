import React from 'react';
import '../styles/botones.css';
import Telefono from '../img/telefono.png';
import Wats from '../img/whats.png';

const Botones = () => {
  return (
    <div className='container-botones'>
        <a className='btn-flotante uno' href='tel:4431462935' target='_blank'>
          <img src={Telefono} />
        </a>
        <a className='btn-flotante dos' href='https://api.whatsapp.com/send/?phone=524431462935' target="_blank">
        <img src={Wats}  />
        </a>

    </div>
  )
}

export default Botones