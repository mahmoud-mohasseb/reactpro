import React from 'react';
import './Card.css';
import Aux from '../../HOC/Aux';

const card = (props) => {
  return (
    <Aux>
      <div className='Card'>
        <img src={props.src} alt='' width='100' height='100' />
        <h3>{props.title}</h3>
      </div>
    </Aux>
  );
};

export default card;
