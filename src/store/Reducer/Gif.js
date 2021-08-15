import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility/utility';

const initialState = {
  value: null,
};

const OnGifclick = (state, action) => {
  return updateObject(state, {
    value: action.value,
  });
};

const fetchGifs = (state, action) => {
  return updateObject(state, action);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GIF:
      return fetchGifs(state, action);
    case actionTypes.GIF_SHOW:
      return OnGifclick(state, action);
    default:
      return state;
  }
};

export default reducer;
