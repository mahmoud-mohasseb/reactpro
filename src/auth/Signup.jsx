import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

const Signup = (props) => {
  const [email, setEmail] = useState('');
  const [pw, setpw] = useState('');
  const [rpw, setrpw] = useState('');
  const [isSignup, setIsSignup] = useState(true);

  const Email = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const Password = (e) => {
    console.log(e.target.value);
    setpw(e.target.value);
  };

  const RepeatPassword = (e) => {
    setrpw(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (pw !== rpw) {
      setrpw('');
    } else {
      setIsSignup(false);
      props.onAuth(email, pw, isSignup);
    }
  };

  return (
    <form className='modal-content' onSubmit={submitHandler}>
      <div className='container'>
        <h2>Sign Up</h2>
        <p>Please fill in this form to create an account.</p>
        <hr />

        <label htmlFor='email'>
          <b>Email</b>
        </label>
        <input
          type='email'
          onChange={Email}
          value={email}
          placeholder='Enter Email'
          name='email'
          required
        />

        <label htmlFor='psw'>
          <b>Password</b>
        </label>
        <input
          type='password'
          onChange={Password}
          value={pw}
          minLength='6'
          placeholder='Enter Password'
          name='psw'
          required
        />

        <label htmlFor='psw-repeat'>
          <b>Repeat Password</b>
        </label>
        <input
          type='password'
          onChange={RepeatPassword}
          value={rpw}
          placeholder='Repeat Password'
          name='psw-repeat'
          required
        />
        <p>
          By creating an account you agree to our
          <Link to='/Mainpage' style={{ color: 'dodgerblue' }}>
            Terms & Privacy
          </Link>
        </p>

        <div className='clearfix'>
          <button type='button' className='cancel_btn'>
            Cancel
          </button>
          <button type='SIGNUP' className='signupbtn'>
            SIGNUP
          </button>
        </div>
      </div>
    </form>
  );
};

// dispatching actions
const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignup) =>
      dispatch(actions.auth(email, password, isSignup)),
  };
};

export default connect(null, mapDispatchToProps)(Signup);
