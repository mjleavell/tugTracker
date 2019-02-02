import React from 'react';
import PropTypes from 'prop-types';
import {
  Map as LeafletMap,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import MapPopup from '../MapPopup/MapPopup';
import './Map.scss';

class Map extends React.Component {
  static propTypes = {
    tugs: PropTypes.array,
  }

  render() {
    const { tugs } = this.props;

    const tugMarker = () => tugs.map(tug => (
      <Marker
        key={tug.id}
        position={[((tug.currentLat === undefined) ? tug.homeportLat : tug.currentLat), ((tug.currentLon === undefined) ? tug.homeportLon : tug.currentLon)]}
      >
        <Popup>
          <h4>{tug.name}</h4>
          <p>{tug.captain}</p>
          <p>{tug.speed}</p>
        </Popup>
      </Marker>
    ));

    return (
      <div className="Map">
        <LeafletMap
          center={[35.08533, -90.15833]}
          zoom={6}
          maxZoom={12}
          attributionControl={true}
          zoomControl={true}
          doubleClickZoom={true}
          scrollWheelZoom={true}
          dragging={true}
          animate={true}
          easeLinearity={0.35}
        >
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          {tugMarker()}
        </LeafletMap>
      </div>
    );
  }
}

export default Map;
