import React from 'react';
import Avatar from './Avatar';
import './ContactCard.css';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

const ContactCard = (props) => {
  const Src = 'https://avatars.githubusercontent.com/u/66387837?v=4';

  return (
    <div className='contacts'>
      <Avatar src={Src} />
      {props.isgoogleAuth ? (
        <p>{props.isgoogleAuth.displayName}</p>
      ) : (
        <p>ayan mahmoud</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.Auth.token !== null,
    isgoogleAuth: state.GoogleAuth.user,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    onAuth: (email, Password) => dispatch(actions.auth(email, Password)),
    onGoogleauth: (user) => dispatch(actions.googleauth(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(ContactCard);
