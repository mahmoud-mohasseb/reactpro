import React, { useState } from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api';

export const FormContext = React.createContext({
  value: null || '',
  media: [],
  OnGifclick: () => {},
  fetchGifs: () => {},
  readFileAsDataURL: () => {},
});

// theme provider wrapped the app tag in index to through the value
export const FormProvider = (props) => {
  const [value, setvalue] = useState(null);
  const [media, setmedia] = useState(null);

  // console.log(media);

  const giphyFetch = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY);
  const fetchGifs = (offset) => giphyFetch.trending({ offset, limit: 10 });

  const OnGifclick = (gif, e) => {
    e.preventDefault();
    setvalue(gif.images.original.url);
  };

  return (
    <FormContext.Provider
      value={{
        OnGifclick,
        fetchGifs,
        value,
        media,
        setmedia,
      }}>
      {props.children}
    </FormContext.Provider>
  );
};
