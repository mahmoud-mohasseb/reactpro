import React from 'react';
import './Purecard.css';
import Aux from '../../HOC/Aux';

const PureCard = (props) => {
  return (
    <Aux>
      <div className='PureCard'>{props.children}</div>
    </Aux>
  );
};

export default PureCard;
