import React from 'react';
import Aux from '../../HOC/Aux';
import './MarketCard.css';

const MarketCard = (props) => {
  return (
    <Aux>
      <div className='MarketCard'>
        <img src={props.src} alt='' width='200' height='120' />
        <h3>{props.title}</h3>
        <button className='button'>{props.children}</button>
      </div>
    </Aux>
  );
};

export default MarketCard;
