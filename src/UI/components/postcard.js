import React from 'react';
import Aux from '../../HOC/Aux';
import './postcard.css';

const Postcard = (props) => {
  return (
    <Aux>
      <div className='postcard'>{props.children}</div>
    </Aux>
  );
};

export default Postcard;
