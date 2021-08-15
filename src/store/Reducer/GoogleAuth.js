import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility/utility';

export const initialState = {
  user: null,
};

const authLogout = (state, action) => {
  return updateObject(state, {
    user: null,
  });
};

const googleauth = (state, action) => {
  return updateObject(state, {
    user: action.user,
  });
};
console.log(googleauth);

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return googleauth(state, action);
    case actionTypes.GOOGLE_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
};

export default reducer;
