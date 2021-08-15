import React from 'react';
import './Avatar.css';

// import { connect } from 'react-redux';

const Avatar = (props) => {
  // console.log(props.isgoogleAuth.displayName);

  return (
    <div className='circle'>
      <img src={props.src} alt='Logo' width='50' height='50' />
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     isAuthenticated: state.Auth.token !== null,
//     isgoogleAuth: state.GoogleAuth.user,
//   };
// };

// export default connect(mapStateToProps, null)(Avatar);
export default Avatar;
