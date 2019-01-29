import React from 'react';
import { Marker, Popup } from 'react-leaflet';
// import PropTypes from 'prop-types';
import tugShape from '../../helpers/propz/tugShape';
import './MapPopup.scss';

class MapPopup extends React.Component {
  static propTypes = {
    singleTug: tugShape.tugShape,
  }

  render() {
    const { singleTug } = this.props;

    return (
      <div className="Map-Popup">
          <Marker position={[singleTug.currentLat, singleTug.currentLon]}>
            <Popup>
              <h4>{singleTug.name}</h4>
              <p>{singleTug.captain}</p>
              <p>{singleTug.speed}</p>
            </Popup>
          </Marker>
      </div>
    );
  }
}

export default MapPopup;
