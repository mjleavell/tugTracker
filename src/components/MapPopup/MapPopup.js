import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import tugShape from '../../helpers/propz/tugShape';
import './MapPopup.scss';

class MapPopup extends React.Component {
  static propTypes = {
    singleTug: tugShape.tugShape,
  }

  render() {
    const { singleTug } = this.props;
    const latitude = (singleTug.currentLat === undefined) ? singleTug.homeportLat : singleTug.currentLat;
    const longitude = (singleTug.currentLon === undefined) ? singleTug.homeportLon : singleTug.currentLon;

    return (
      <div className="Map-Popup">
          <Marker
            key={singleTug.id}
            position={[latitude, longitude]}
          >
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
