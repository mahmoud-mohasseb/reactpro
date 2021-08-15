import React, { useState } from 'react';
import './Authform.css';
import { AiOutlineLogin } from 'react-icons/ai';
import { SiGoogle } from 'react-icons/si';

import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

// import { updateObject, checkValidity } from '../store/utility/utility';

const Authform = (props) => {
  const [email, setEmail] = useState('');
  const [pw, setpw] = useState('');

  // const { onGoogleauth } = props;

  const userName = (e) => {
    setEmail(e.target.value);
  };

  const Password = (e) => {
    setpw(e.target.value);
  };

  let errorMessage = null;
  if (props.error) {
    errorMessage = <p>{props.error.message}</p>;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    props.onAuth(email, pw);
  };

  const googlesignin = (e) => {
    e.preventDefault();
    props.onGoogleauth();
  };

  return (
    <div>
      <form className='Signin' onSubmit={submitHandler}>
        {errorMessage}
        <label htmlFor='uname'>
          <b>Username</b>
        </label>
        <input
          type='email'
          onChange={userName}
          value={email}
          placeholder='Enter your Email'
          name='Email'
          required
        />
        <label htmlFor='psw'>
          <b>Password</b>
        </label>
        <input
          type='password'
          value={pw}
          onChange={Password}
          placeholder='Enter Password'
          name='psw'
          minLength='6'
          required
        />
        <button className='button' type='submit'>
          SignIn
          <AiOutlineLogin size='15px' />
        </button>
        {/* google authentication */}
        <button onClick={googlesignin} className='button'>
          Google
          <SiGoogle size='15px' />
        </button>
        <label>
          <input
            // onChange={handleremember}
            type='checkbox'
            readOnly
            name='remember'
          />
          Remember me
        </label>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.Auth.error,
  };
};
const mapDispatchToprops = (dispatch) => {
  return {
    onAuth: (email, Password) => dispatch(actions.auth(email, Password)),
    onGoogleauth: (user) => dispatch(actions.googleauth(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(Authform);
