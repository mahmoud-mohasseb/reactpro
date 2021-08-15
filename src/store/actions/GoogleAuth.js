import * as actionTypes from './actionTypes';
import { auth, provider } from '../../firebase';

export const googleauth = () => {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        localStorage.setItem('user', result.user.uid);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
};

export const googlelogout = () => {
  localStorage.removeItem('user');
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};
