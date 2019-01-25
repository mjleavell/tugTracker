import React from 'react';
import PropTypes from 'prop-types';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import MapPopup from '../MapPopup/MapPopup';
import './Map.scss';

class Map extends React.Component {
  static propTypes = {
    tugs: PropTypes.array,
  }

  render() {
    const { tugs } = this.props;

    const mapComponent = tugs.map(tug => (
      <MapPopup
        key={tug.id}
        singleTug={tug}
      />
    ));

    return (
      <div className="Map">
        <h3>All tugs will be displayed on map</h3>
        <LeafletMap
          center={[35.08533, -90.15833]}
          zoom={6}
          maxZoom={10}
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
          <div>{mapComponent}</div>
        </LeafletMap>
      </div>
    );
  }
}

export default Map;
