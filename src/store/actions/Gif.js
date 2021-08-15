import * as actionTypes from './actionTypes';
import { GiphyFetch } from '@giphy/js-fetch-api';

export const giphyFetch = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY);

export const fetchGifs = (offset) => async () =>
  await giphyFetch.trending({ offset, limit: 10 });

// console.log(fetchGifs);
// export const fetchGifs = (offset) => {
//   return async (dispatch) => {
//     const result = await giphyFetch.trending({ limit: 10 });
//     const Gifs = result.data.map((images) => images.url);
//     dispatch({
//       type: actionTypes.FETCH_GIF,
//       value: Gifs,
//     });
//   };
// };

export const OnGifclick = (gif, e) => {
  e.preventDefault();
  return (dispatch) =>
    dispatch({
      type: actionTypes.GIF_SHOW,
      value: gif.images.original.url,
    });
};
