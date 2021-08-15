import React from 'react';
import Backdrop from '../backdrop/backdrop';
import Aux from '../../HOC/Aux';
import './Model.css';

const Model = (props) => {
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modelClosed} />
      <div
        className='Modal'
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0',
        }}>
        {props.children}
      </div>
    </Aux>
  );
};
export default Model;
