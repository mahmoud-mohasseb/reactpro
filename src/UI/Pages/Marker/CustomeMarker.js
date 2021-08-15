import * as React from 'react';
import { MapContext } from 'react-map-gl';
import './CustomMarket.css';
import Avatar from '../../components/Avatar';
import { TiLocation } from 'react-icons/ti';
function CustomeMarker(props) {
  const context = React.useContext(MapContext);
  const { longitude, latitude } = props;
  //   will locate div on location
  const [x, y] = context.viewport.project([longitude, latitude]);

  const markerStyle = {
    position: 'absolute',
    background: 'black',
    borderRadius: '10px',

    left: x,
    top: y,
  };
  return (
    <div style={markerStyle}>
      {/* ({longitude}, {latitude}) */}
      <div className='Findme'>
        <TiLocation size='30' />
        <p>Me</p>
        <Avatar src={props.src} />
      </div>
    </div>
  );
}

export default CustomeMarker;
