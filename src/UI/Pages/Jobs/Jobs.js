import React, { useState } from 'react';
import ReactMapGL, { FlyToInterpolator } from 'react-map-gl';
import { RiSearchEyeLine } from 'react-icons/ri';
import './Jobs.css';
import CustomeMarker from '../Marker/CustomeMarker';
import Country from '../Country/Country';
import { ImTarget } from 'react-icons/im';
import { Information } from '../../../Data/information';
import Avatar from '../../components/Avatar';
import PureCard from '../../components/Purecard';

const Src = 'https://avatars.githubusercontent.com/u/66387837?v=4';

const Jobs = () => {
  const [viewport, setViewport] = useState({
    longitude: 31.3181,
    latitude: 30.1254,
    width: '100vw',
    height: '100vh',
    center: [-73.985664, 40.748514],
    zoom: 4,
  });
  const goToLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.longitude);
      console.log(position.coords.latitude);
      try {
        setViewport({
          ...viewport,
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
          zoom: 18,
          transitionDuration: 20000,
          transitionInterpolator: new FlyToInterpolator(),
        });
      } catch (err) {
        console.log(err);
      }
    });
  };
  const WorkLocation = (items, index) => {
    setViewport({
      ...viewport,
      longitude: items.coordinates[0],
      latitude: items.coordinates[1],
      zoom: 18,
      transitionDuration: 20000,
      transitionInterpolator: new FlyToInterpolator(),
    });
    // console.log(items.coordinates[0]);
    // console.log(items.coordinates[1]);
    // console.log(index);
  };
  // console.log(navigator.mediaDevices.enumerateDevices());
  return (
    <div className='Map_container'>
      <div className='mapbox'>
        <Country />
        <div style={{ display: 'flex', margin: 20 }}>
          <form className='searchJob'>
            <input type='text' name='Search' placeholder='Search' />
            <button type='submit'>
              <RiSearchEyeLine size='15px' />
            </button>
          </form>
          <div>
            <button onClick={goToLocation} className='btnlocation'>
              <ImTarget />
            </button>
          </div>
          <div className='content'>
            {Information.map((items, index) => {
              return (
                <PureCard>
                  <div className='card_details'>
                    <Avatar key={index} src={items.img} />
                    <p>This is the {items.title}</p>
                    <button
                      onClick={() => WorkLocation(items, index)}
                      className='button'>
                      {items.button}
                      <ImTarget />
                    </button>
                  </div>
                </PureCard>
              );
            })}
          </div>
        </div>
      </div>

      <ReactMapGL
        style={{ position: 'absolute', zIndex: '-100' }}
        {...viewport}
        mapStyle='mapbox://styles/mapbox/satellite-streets-v11'
        // mapStyle='mapbox://styles/ghareb4/ckq9bzte900dr17s345db30m5'
        onViewportChange={setViewport}
        mapboxApiAccessToken={process.env.React_App_MAP_TOKEN}>
        <CustomeMarker
          src={Src}
          longitude={viewport.longitude}
          latitude={viewport.latitude}
        />
        {Information.map((items, index) => (
          <CustomeMarker
            src={items.img}
            key={index}
            longitude={items.coordinates[0]}
            latitude={items.coordinates[1]}
          />
        ))}
        {/*  */}
      </ReactMapGL>
    </div>
  );
};

export default Jobs;
