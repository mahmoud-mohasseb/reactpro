import React, { useEffect, useRef, useState, useContext } from 'react';
// import { GiphyFetch } from '@giphy/js-fetch-api';
import { Grid } from '@giphy/react-components';

import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

// import { FormContext } from '../../../store/FormContext';

const Gifer = (props) => {
  // const { OnGifclick, fetchGifs, value } = useContext(FormContext);

  const { OnfetchGifs, OnGifclick, value } = props;

  console.log(props);
  console.log(OnGifclick);

  const OnfetchGifsImages = () => OnfetchGifs();

  const OnGifclickImg = () => {
    return OnGifclick();
  };

  return (
    <div className='GifGrid__Content'>
      <Grid
        onGifClick={OnGifclickImg}
        fetchGifs={OnfetchGifsImages}
        // onGifClick={OnGifclick}
        // fetchGifs={fetchGifs}
        width={240}
        // height='auto'
        columns={2}
        gutter={6}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    value: state.GIF.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // ongiphyFetch: () => dispatch(actions.giphyFetch()),
    OnfetchGifs: () => dispatch(actions.fetchGifs()),
    OnGifclick: () => dispatch(actions.OnGifclick()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gifer);
